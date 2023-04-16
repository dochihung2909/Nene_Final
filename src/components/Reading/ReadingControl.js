import classNames from 'classnames/bind'
import { useState } from 'react'
import Button from '../Button'
import styles from './Reading.module.scss'

const cx = classNames.bind(styles)

function ReadingControl({ onSubmit }) {
    return (
        <div className={cx('test-control')}>
            <div className={cx('test-info')}>
                <div className={cx('info-detail')}>
                    <div className={cx('test-name')}>
                        <img
                            src="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/92e207d2-d08f-4916-b9d3-e3ab75cdf4c5.png"
                            alt="english"
                        />
                        <div className={cx('test-title')}>
                            <h4>CAM17 - Reading Test 1</h4>
                            <p>The development of the London underground railway</p>
                        </div>
                    </div>
                    <div className={cx('test-passage', 'active')}>
                        <div className={cx('badge')}>0/6</div>
                        <div className={cx('test-passage-info')}>
                            <h4>PASSAGE 1</h4>
                            <p>6 questions</p>
                        </div>
                    </div>

                    <div className={cx('test-passage')}>
                        <div className={cx('badge')}>0/13</div>
                        <div className={cx('test-passage-info')}>
                            <h4>PASSAGE 2</h4>
                            <p>13 questions</p>
                        </div>
                    </div>

                    <div className={cx('test-passage')}>
                        <div className={cx('badge')}>0/14</div>
                        <div className={cx('test-passage-info')}>
                            <h4>PASSAGE 3</h4>
                            <p>14 questions</p>
                        </div>
                    </div>
                </div>
                <div className={cx('test-navigate')}>
                    <Button
                        to="/result"
                        onClick={onSubmit}
                        className={cx('next-ques-btn', 'btn btn-primary')}
                        rightIcon={<i class="fa-solid fa-arrow-right"></i>}
                    >
                        Submit
                    </Button>
                </div>
            </div>
            <div className={cx('test-ques-num')}>
                <div className={cx('type-ques')}>
                    <p>Summary, Note Completion</p>
                    <div className={cx('num-wrapper')}>
                        <button className={cx('num')}>1</button>
                        <button className={cx('num')}>2</button>
                        <button className={cx('num')}>3</button>
                        <button className={cx('num')}>4</button>
                        <button className={cx('num')}>5</button>
                        <button className={cx('num')}>6</button>
                    </div>
                </div>
                {/* <div className={cx('type-ques')}>
                    <p>True / False / Not given</p>
                    <div className={cx('num-wrapper')}>
                        <button className={cx('num')}>7</button>
                        <button className={cx('num')}>8</button>
                        <button className={cx('num')}>9</button>
                        <button className={cx('num')}>10</button>
                        <button className={cx('num')}>11</button>
                        <button className={cx('num')}>12</button>
                        <button className={cx('num')}>13</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ReadingControl
