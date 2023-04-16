import classNames from 'classnames/bind'
import 'react-calendar/dist/Calendar.css'

import { useEffect, useState } from 'react'
import ChatBox from '~/components/ChatBox'
import Test from '~/components/Test'
import styles from './Content.module.scss'
import { Link } from 'react-router-dom'
import HeadlessTippy from '@tippyjs/react/headless'
import Quiz from '~/components/Quiz'
import Study from '~/pages/Grammar/Grammar'
import Grammar from '~/components/Grammar'
import Tippy from '@tippyjs/react'

const cx = classNames.bind(styles)

function Content({ profile, children }) {
    const [showMess, setShowMbAns] = useState(true)

    useEffect(() => {
        const myTImeout = setTimeout(() => {
            setShowMbAns(false)
        }, 5000)

        return () => {
            clearTimeout(myTImeout)
        }
    }, [])

    const [selected, setSelected] = useState(1)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('menu-left', 'col-0', 'col-md-1 col-lg-1')}>
                    <div className={cx('menu-wrapper')}>
                        <div className={cx('menu-item-wrapper')}>
                            <Link
                                onClick={(e) => setSelected(1)}
                                to="/"
                                className={cx('menu-item', { selected: selected === 1 })}
                            >
                                <i className="fa-solid fa-house"></i> <h4>Home</h4>
                            </Link>
                            <Link
                                onClick={(e) => setSelected(2)}
                                to="/test"
                                className={cx('menu-item', { selected: selected === 2 })}
                            >
                                <i class="fa-solid fa-clipboard"></i> <h4>Test</h4>
                            </Link>
                            <Link
                                onClick={(e) => setSelected(3)}
                                to="/"
                                className={cx('menu-item', { selected: selected === 3 })}
                            >
                                <i class="fa-solid fa-circle-question"></i> <h4>Quiz</h4>
                            </Link>
                            <Link
                                onClick={(e) => setSelected(4)}
                                to="/study"
                                className={cx('menu-item', { selected: selected === 4 })}
                            >
                                <i class="fa-solid fa-book"></i> <h4>Study</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('body', 'col-12 col-md-11     col-lg-11')}>
                    {!children ? (
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('body-wrapper')}>
                                    <div className={cx('welcome')}>
                                        <div
                                            id="carouselExampleAutoplaying"
                                            className="carousel slide"
                                            data-bs-ride="carousel"
                                        >
                                            <div className={cx('carousel-indicators-test', 'carousel-indicators')}>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleAutoplaying"
                                                    data-bs-slide-to="0"
                                                    className={cx('btn-slide', 'active')}
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleAutoplaying"
                                                    data-bs-slide-to="1"
                                                    className={cx('btn-slide')}
                                                    aria-label="Slide 2"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleAutoplaying"
                                                    data-bs-slide-to="2"
                                                    className={cx('btn-slide')}
                                                    aria-label="Slide 3"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleAutoplaying"
                                                    data-bs-slide-to="3"
                                                    className={cx('btn-slide')}
                                                    aria-label="Slide 4"
                                                ></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img
                                                        src={require('~/assests/img/1.png')}
                                                        className="d-block w-100"
                                                        alt="welcome"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src={require('~/assests/img/2.png')}
                                                        className="d-block w-100"
                                                        alt="welcome"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src={require('~/assests/img/3.png')}
                                                        className="d-block w-100"
                                                        alt="welcome"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src={require('~/assests/img/4.png')}
                                                        className="d-block w-100"
                                                        alt="welcome"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                className={cx('prev-btn', 'carousel-control-prev')}
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="prev"
                                            >
                                                <i class="fa-solid fa-chevron-left"></i>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className={cx('next-btn', 'carousel-control-next')}
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="next"
                                            >
                                                <i class="fa-solid fa-chevron-right"></i>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('test-wrapper')}>
                                        <h4 className={cx('test-title')}>My Test</h4>
                                        <div className={cx('test')}>
                                            <Test
                                                thumb={
                                                    'https://images.dolenglish.vn/rs:auto:::0/w:1440/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBLzZmOGQyNjk2LTFlM2UtNGZkNi05OWYwLTNlNGJmZGU3YzEzMS5qcGc='
                                                }
                                                title={'Cambridge IELTS 17'}
                                                questions={40}
                                                minutes={'1 hour'}
                                            ></Test>
                                            <Test
                                                thumb={
                                                    'https://f7-zpc.zdn.vn/244269329123169052/36c4f3926e36b268eb27.jpg'
                                                }
                                                title={'Cambridge IELTS 14'}
                                                questions={40}
                                                minutes={'1 hour'}
                                            ></Test>
                                            <Test
                                                thumb={
                                                    'https://f17-zpc.zdn.vn/6296904055735237013/3a04eb0e76aaaaf4f3bb.jpg'
                                                }
                                                title={'Cambridge IELTS 16'}
                                                questions={40}
                                                minutes={'1 hour'}
                                            ></Test>
                                            <Test
                                                thumb={
                                                    'https://f17-zpc.zdn.vn/6296904055735237013/3a04eb0e76aaaaf4f3bb.jpg'
                                                }
                                                title={'Cambridge IELTS 16'}
                                                questions={40}
                                                minutes={'1 hour'}
                                            ></Test>
                                            <Test
                                                thumb={
                                                    'https://f17-zpc.zdn.vn/6296904055735237013/3a04eb0e76aaaaf4f3bb.jpg'
                                                }
                                                title={'Cambridge IELTS 16'}
                                                questions={40}
                                                minutes={'1 hour'}
                                            ></Test>
                                        </div>
                                    </div>

                                    <div className={cx('test-wrapper')}>
                                        <h4 className={cx('test-title')}>My Quiz</h4>
                                        <div className={cx('quizz')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-6 col-lg-3')}>
                                                    <Quiz
                                                        thumb="https://f25-zpc.zdn.vn/5559362219638667843/078d6a13c2881ed64799.jpg"
                                                        title="Topic: Tecnology"
                                                    ></Quiz>
                                                </div>
                                                <div className={cx('col-6 col-lg-3')}>
                                                    <Quiz
                                                        thumb="https://f7-zpc.zdn.vn/142030376977776996/56e47fded445081b5154.jpg"
                                                        title="Topic: Movie"
                                                    ></Quiz>
                                                </div>
                                                <div className={cx('col-6 col-lg-3')}>
                                                    <Quiz
                                                        thumb="https://f19-zpc.zdn.vn/3836284697893531009/9b8931ef9a74462a1f65.jpg"
                                                        title="Topic: Travel"
                                                    ></Quiz>
                                                </div>
                                                <div className={cx('col-6 col-lg-3')}>
                                                    <Quiz
                                                        thumb="https://f4-zpc.zdn.vn/7307247825810508522/f02c7ba7d03c0c62552d.jpg"
                                                        title="Topic: Environments"
                                                    ></Quiz>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('test-wrapper')}>
                                        <h4 className={cx('test-title')}>My Grammar</h4>
                                        <div className={cx('quizz')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-12', 'grammar')}>
                                                    <Grammar
                                                        thumb="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/6a085a61-95eb-482c-b22c-9c2b868ea831.jpeg"
                                                        title="Dấu hiệu nhận biết thì hiện tại đơn, cấu trúc và cách sử dụng"
                                                        description="Trên thực tế thì hiện tại đơn là kiến thức ngữ pháp cơ bản nhất mà ai cũng cần nắm được khi bắt đầu học tiếng Anh. Theo đó, Present Simple được sử dụng phổ biến trong 12 thì với việc áp dụng thường xuyên trong cả văn nói và cả văn viết. Chính vì thế việc học và nắm được cách sử dụng của Present Simple cực kỳ quan trọng nhằm nâng cao khả năng tiếng Anh. "
                                                    ></Grammar>
                                                </div>
                                                <div className={cx('col-12', 'grammar')}>
                                                    <Grammar
                                                        thumb="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:30/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBLzE4NjZhNjhhLThhMmMtNGQwOS1iNDM0LTIwNDNlZTQ1MThiYy5qcGc="
                                                        title="Cách dùng động từ “illustrate” tiếng Anh bạn nên biết"
                                                        description='Trong bài thi IELTS, đặc biệt là Writing, động từ “illustrate” thường xuyên xuất hiện. Theo đó, trong tiếng Anh, động từ này cũng được sử dụng cho nhiều nghĩa khác nhau. Do đó, trong bài viết này, DOL English sẽ phân tích Cách dùng động từ"illustrate"tiếng Anh nhằm giúp bạn đọc nắm rõ và sử dụng từ vựng này hiệu quả hơn.'
                                                    ></Grammar>
                                                </div>
                                                <div className={cx('col-12', 'grammar')}>
                                                    <Grammar
                                                        thumb="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/9e70720b-0f91-4262-af81-bf9f2be94d1c.jpeg"
                                                        title="Cách sử dụng trạng từ trong tiếng Anh bạn nên biết"
                                                        description="Trạng từ là một điểm ngữ pháp quan trọng trong tiếng Anh mà bất kỳ người học nào cũng cần nắm được. Vậy thì dùng trạng từ như thế nào đúng cách và tự nhiên nhất? Đây cũng là thắc mắc của rất nhiều bạn đọc hiện nay. Do đó trong bài viết này DOL English sẽ tổng hợp cho bạn cách dùng trạng từ cũng như gợi ý một số trạng từ phổ biến được sử dụng trong bài thi IELTS."
                                                    ></Grammar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        children
                    )}
                </div>
            </div>
            <HeadlessTippy
                interactive
                trigger="click"
                placement="top-start"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <ChatBox className={cx('chat-box')}></ChatBox>
                    </div>
                )}
            >
                <Tippy
                    visible={showMess}
                    content={<span className={cx('tippy')}>"Hãy hỏi tôi bất cứ thứ gì bạn muốn"</span>}
                    placement="left"
                >
                    <button className={cx('chat-box-btn')}>
                        <i className="fa-solid fa-robot"></i>
                    </button>
                </Tippy>
            </HeadlessTippy>
        </div>
    )
}

export default Content
