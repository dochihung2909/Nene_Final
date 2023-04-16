import classNames from 'classnames/bind'
import 'react-calendar/dist/Calendar.css'

import { useState } from 'react'
import ChatBox from '~/components/ChatBox'
import Test from '~/components/Test'
import styles from './Content.module.scss'
import { Link } from 'react-router-dom'
import HeadlessTippy from '@tippyjs/react/headless'
import Quiz from '~/components/Quiz'
import Study from '~/pages/Study/Study'

const cx = classNames.bind(styles)

function Content({ profile, children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-0', 'col-lg-1')}>
                    <div className={cx('menu-wrapper')}>
                        <div className={cx('menu-item-wrapper')}>
                            <Link to="/" className={cx('menu-item', { selected: window.location.pathname === '/' })}>
                                <i className="fa-solid fa-house"></i> <h4>Home</h4>
                            </Link>
                            <Link
                                to="/test"
                                className={cx('menu-item', { selected: window.location.pathname === '/test' })}
                            >
                                <i class="fa-solid fa-clipboard"></i> <h4>Test</h4>
                            </Link>
                            <Link
                                to="/"
                                className={cx('menu-item', { selected: window.location.pathname === '/quiz' })}
                            >
                                <i class="fa-solid fa-circle-question"></i> <h4>Quiz</h4>
                            </Link>
                            <Link
                                to="/study"
                                className={cx('menu-item', { selected: window.location.pathname === '/study' })}
                            >
                                <i class="fa-solid fa-book"></i> <h4>Study</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('body', 'col-12 col-lg-11')}>
                    {!children ? (
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('body-wrapper')}>
                                    <div className={cx('welcome')}>
                                        <div id="carouselExampleIndicators" className="carousel slide">
                                            <div className={cx('carousel-indicators-test', 'carousel-indicators')}>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0"
                                                    className={cx('btn-slide', 'active')}
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1"
                                                    className={cx('btn-slide')}
                                                    aria-label="Slide 2"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2"
                                                    className={cx('btn-slide')}
                                                    aria-label="Slide 3"
                                                ></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img
                                                        src="https://b-f17-zpc.zdn.vn/3893586153896231338/6729f4e5c17e1d20446f.jpg"
                                                        className="d-block w-100"
                                                        alt="welcome"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src="https://b-f17-zpc.zdn.vn/3893586153896231338/6729f4e5c17e1d20446f.jpg"
                                                        className="d-block w-100"
                                                        alt="welcome"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src="https://b-f17-zpc.zdn.vn/3893586153896231338/6729f4e5c17e1d20446f.jpg"
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
                                            <Test title={'Cambridge IELTS 17'} questions={40} minutes={'1 hour'}></Test>
                                            <Test title={'Cambridge IELTS 17'} questions={40} minutes={'1 hour'}></Test>
                                            <Test title={'Cambridge IELTS 17'} questions={40} minutes={'1 hour'}></Test>
                                        </div>
                                    </div>

                                    <div className={cx('test-wrapper')}>
                                        <h4 className={cx('test-title')}>My Quiz</h4>
                                        <div className={cx('quizz')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-3')}>
                                                    <Quiz
                                                        thumb="https://f25-zpc.zdn.vn/5559362219638667843/078d6a13c2881ed64799.jpg"
                                                        title="Topic: Tecnology"
                                                    ></Quiz>
                                                </div>
                                                <div className={cx('col-3')}>
                                                    <Quiz
                                                        thumb="https://f7-zpc.zdn.vn/142030376977776996/56e47fded445081b5154.jpg"
                                                        title="Topic: Movie"
                                                    ></Quiz>
                                                </div>
                                                <div className={cx('col-3')}>
                                                    <Quiz
                                                        thumb="https://f19-zpc.zdn.vn/3836284697893531009/9b8931ef9a74462a1f65.jpg"
                                                        title="Topic: Travel"
                                                    ></Quiz>
                                                </div>
                                                <div className={cx('col-3')}>
                                                    <Quiz
                                                        thumb="https://f4-zpc.zdn.vn/7307247825810508522/f02c7ba7d03c0c62552d.jpg"
                                                        title="Topic: Environments"
                                                    ></Quiz>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Study></Study>
                    )}
                </div>
            </div>
            <HeadlessTippy
                interactive
                trigger="click"
                placement="left-start"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <ChatBox className={cx('chat-box')}></ChatBox>
                    </div>
                )}
            >
                <button className={cx('chat-box-btn')}>
                    <i className="fa-solid fa-robot"></i>
                </button>
            </HeadlessTippy>
        </div>
    )
}

export default Content
