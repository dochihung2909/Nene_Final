import styles from './Exam.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import CountDown from '~/components/CountDown'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Header() {
    const [time, setTime] = useState({
        minutes: 60,
        seconds: 0,
    })

    useEffect(() => {
        const myTimer = setInterval(() => {
            setTime((prev) => {
                let minutes = prev.minutes
                let seconds = prev.seconds

                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myTimer)
                        return {
                            minutes: 0,
                            seconds: 0,
                        }
                    } else {
                        --minutes
                    }
                    seconds = 59
                } else {
                    --seconds
                }

                return {
                    minutes,
                    seconds,
                }
            })
        }, 1000)

        return () => {
            clearInterval(myTimer)
        }
    }, [])

    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('header-right')}>
                <Button to="/" className={cx('back-btn')}>
                    <i class="fa-solid fa-x"></i>
                </Button>
                <Link to={'/'} className={cx('logo-wrapper')}>
                    <h1>
                        EngQ<span style={{ color: '#5A62B3' }}>uiz</span>
                    </h1>
                </Link>

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
            </div>
            <CountDown time={time}></CountDown>

            {time.minutes == 0 && time.seconds == 0 && (
                <div className={cx('frame')}>
                    <div className={cx('timeout-modal')}>
                        <div className={cx('timeout-header')}>
                            <h4>Thông báo</h4>
                        </div>
                        <div className={cx('timeout-body')}>
                            <div>
                                <p>Bài thi đã kết thúc</p>
                            </div>
                            <Button to="result" className={cx('result-btn', 'btn btn-primary')}>
                                Xem kết quả
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
