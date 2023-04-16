import classNames from 'classnames/bind'
import styles from './ChatBox.module.scss'
import Message from './Message'

import { useEffect, useRef, useState } from 'react'
import { Input } from '@chakra-ui/react'
import Button from '../Button'
import Tippy from '@tippyjs/react'

const cx = classNames.bind(styles)

const API_KEY = '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'
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {
    //  Explain things like you're talking to a software professional with 5 years of experience.
    role: 'system',
    content: "Explain things like you're talking to a software professional with 2 years of experience.",
}

function ChatBox({ className }) {
    const listChatRef = useRef(false)

    const profile = JSON.parse(localStorage.getItem('profile')) || {}

    const [messages, setMessages] = useState([
        {
            message: 'Xin chào, Tôi là EngQuizz Bot! Tôi ở đây để giúp bạn học tiếng anh! Hãy hỏi tôi bất cứ điều gì',
            sentTime: 'just now',
            sender: 'ChatGPT',
            thumb: 'https://cdn-icons-png.flaticon.com/512/4712/4712126.png',
        },
    ])

    const [isTyping, setIsTyping] = useState(false)

    const [ques, setQues] = useState('')

    const handleGetValue = (e) => {
        setQues(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        listChatRef.current.scrollTop = listChatRef.current.scrollHeight

        const newMessage = {
            message: ques,
            direction: 'outgoing',
            sender: 'user',
            thumb: profile.picture || 'https://rbooks.vn/imgs/user-avt-comment.png',
        }

        const newMessages = [...messages, newMessage]

        setMessages(newMessages)

        setQues('')
        setIsTyping(true)

        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.

        await processMessageToChatGPT(newMessages)
    }

    async function processMessageToChatGPT(chatMessages) {
        // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = ''
            if (messageObject.sender === 'ChatGPT') {
                role = 'assistant'
            } else {
                role = 'user'
            }
            return { role: role, content: messageObject.message }
        })

        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act.
        const apiRequestBody = {
            model: 'gpt-3.5-turbo',
            messages: [
                systemMessage, // The system message DEFINES the logic of our chatGPT
                ...apiMessages, // The messages from our chat with ChatGPT
            ],
        }

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data)
                listChatRef.current.scrollTop = listChatRef.current.scrollHeight
                setMessages([
                    ...chatMessages,
                    {
                        message: data.choices[0].message.content,
                        sender: 'ChatGPT',
                        thumb: 'https://cdn-icons-png.flaticon.com/512/4712/4712126.png',
                    },
                ])
                setIsTyping(false)
            })
    }

    useEffect(() => {
        const myTimeout = setTimeout(() => {
            listChatRef.current.scrollTop = listChatRef.current.scrollHeight
        }, 0)

        return () => {
            clearTimeout(myTimeout)
        }
    }, [messages])

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('chatbox-info')}>
                <img
                    className={cx('chatbox-avt')}
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712126.png"
                    alt="chatbox"
                />
                <h4 className={cx('chatbox-name')}>EngQuizz Bot</h4>
            </div>
            <div ref={listChatRef} className={cx('list-chat')}>
                {messages.map((mess, index) => (
                    <Message
                        thumb={mess.thumb}
                        key={index}
                        sender={mess.sender === 'user'}
                        message={mess.message}
                    ></Message>
                ))}
            </div>
            {isTyping && (
                <div className={cx('typing')}>
                    <i className="fa-solid fa-circle-notch"></i> EngQuizz Bot is typing
                </div>
            )}
            <form onSubmit={handleSubmit} className={cx('chat')}>
                <input
                    onChange={handleGetValue}
                    className={cx('chat-input')}
                    spellCheck="false"
                    autoComplete="off"
                    type="text"
                    value={ques}
                    placeholder="Hỏi những gì bạn muốn"
                ></input>
            </form>
        </div>
    )
}

export default ChatBox
