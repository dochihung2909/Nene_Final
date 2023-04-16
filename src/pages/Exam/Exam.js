import Reading from '~/components/Reading'
import ReadingTest from '~/components/Reading/ReadingTest'
import styles from './Exam.module.scss'
import classNames from 'classnames/bind'
import ReadingControl from '~/components/Reading/ReadingControl'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Test() {
    const [answer, setAnswer] = useState([])

    const handleSubmit = () => {
        localStorage.setItem('answer', JSON.stringify(answer))
    }

    return (
        <div style={{ backgroundColor: '#F4F4F6' }}>
            <Header></Header>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'content')}>
                    <div className="col-lg-5 col-12 p-0">
                        <Reading></Reading>
                    </div>
                    <div className="col-lg-7 col-12 p-0">
                        <ReadingTest setAnswer={setAnswer}></ReadingTest>
                    </div>
                </div>
                <div className={cx('row', 'control')}>
                    <div className="col-lg-12 col-12">
                        <ReadingControl onSubmit={handleSubmit}></ReadingControl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
