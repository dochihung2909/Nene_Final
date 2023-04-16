import classNames from 'classnames/bind'
import Button from '../Button'
import styles from './Reading.module.scss'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function ReadingTest({ setAnswer }) {
    const handleInputChange = (pos, textValue) => {
        setAnswer((prev) => {
            prev[pos] = textValue

            return prev
        })
    }
    return (
        <div className={cx('reading-test')}>
            <div className={cx('current')}>
                <h2>Question 1 - 6</h2>
            </div>

            <div className={cx('test')}>
                <h3>The London underground railway</h3>
                <div className={cx('question')}>
                    <h4 className={cx('title')}>The problem</h4>
                    <ul className={cx('question-list')}>
                        <li className={cx('question-item')}>
                            The{' '}
                            <span className={cx('answer')}>
                                <span>
                                    1 <i class="fa-solid fa-arrow-right"></i>
                                </span>{' '}
                                <div
                                    onInput={(e) => handleInputChange(1, e.currentTarget.textContent)}
                                    contentEditable="plaintext-only"
                                    className={cx('answer-inp')}
                                ></div>
                            </span>{' '}
                            of London increased rapidly between 1800 and 1850
                        </li>
                        <li className={cx('question-item')}> The streets were full of horse-drawn vehicles</li>
                    </ul>
                </div>
                <div className={cx('question')}>
                    <h4 className={cx('title')}>The proposed solution</h4>
                    <ul className={cx('question-list')}>
                        <li className={cx('question-item')}>
                            Charles Pearson, a solicitor, suggested building an underground railway
                        </li>
                        <li className={cx('question-item')}>
                            Building the railway would make it possible to move people to better housing in the{' '}
                            <span className={cx('answer')}>
                                <span>
                                    2 <i class="fa-solid fa-arrow-right"></i>
                                </span>{' '}
                                <div
                                    onInput={(e) => handleInputChange(2, e.currentTarget.textContent)}
                                    contentEditable="plaintext-only"
                                    className={cx('answer-inp')}
                                ></div>
                            </span>
                        </li>
                        <li className={cx('question-item')}>
                            A number of{' '}
                            <span className={cx('answer')}>
                                <span>
                                    3 <i class="fa-solid fa-arrow-right"></i>
                                </span>{' '}
                                <div
                                    onInput={(e) => handleInputChange(3, e.currentTarget.textContent)}
                                    contentEditable="plaintext-only"
                                    className={cx('answer-inp')}
                                ></div>
                            </span>
                            agreed with Pearson's idea
                        </li>

                        <li className={cx('question-item')}>
                            The company initially had problems getting the{' '}
                            <span className={cx('answer')}>
                                <span>
                                    4 <i class="fa-solid fa-arrow-right"></i>
                                </span>{' '}
                                <div
                                    onInput={(e) => handleInputChange(4, e.currentTarget.textContent)}
                                    contentEditable="plaintext-only"
                                    className={cx('answer-inp')}
                                ></div>
                            </span>
                            needed for the project
                        </li>

                        <li className={cx('question-item')}>
                            Negative articles about the project appeared in the{' '}
                            <span className={cx('answer')}>
                                <span>
                                    5 <i class="fa-solid fa-arrow-right"></i>
                                </span>{' '}
                                <div
                                    onInput={(e) => handleInputChange(5, e.currentTarget.textContent)}
                                    contentEditable="plaintext-only"
                                    className={cx('answer-inp')}
                                ></div>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={cx('question')}>
                    <h4 className={cx('title')}>The construction</h4>
                    <ul className={cx('question-list')}>
                        <li className={cx('question-item')}>
                            The chosen route did not require many buildings to be pulled down
                        </li>
                        <li className={cx('question-item')}>
                            The 'cut and cover' method was used to construct the tunnels
                        </li>
                        <li className={cx('question-item')}>
                            With the completion of the brick arch, the tunnel was covered with{' '}
                            <span className={cx('answer')}>
                                <span>
                                    6 <i class="fa-solid fa-arrow-right"></i>
                                </span>{' '}
                                <div
                                    onInput={(e) => handleInputChange(6, e.currentTarget.textContent)}
                                    contentEditable="plaintext-only"
                                    className={cx('answer-inp')}
                                ></div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReadingTest
