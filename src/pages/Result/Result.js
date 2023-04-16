import classNames from 'classnames/bind'
import styles from './Result.module.scss'

const cx = classNames.bind(styles)

function Result() {
    const profile = JSON.parse(localStorage.getItem('profile')) || {}
    const result = ['population', 'suburbs', 'businessmen', 'funding', 'press', 'soil']

    const answer = JSON.parse(localStorage.getItem('answer')) || []

    let point = 0

    answer.forEach((ans, index) => {
        if (ans === result[index - 1]) {
            point++
        }
    })

    console.log(point / result.length)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('greeting')}>
                <div className={cx('score')}>
                    <span>{(point / result.length) * result.length}</span>
                    <svg class="ant-progress-circle" viewBox="0 0 100 100">
                        <path
                            class="ant-progress-circle-trail"
                            d="M 50,50 m 0,-45.85
   a 45.85,45.85 0 1 1 0,91.7
   a 45.85,45.85 0 1 1 0,-91.7"
                            stroke="rgba(255, 255, 255, 0.2)"
                            stroke-linecap="round"
                            stroke-width="8.3"
                            fill-opacity="0"
                        ></path>
                        <path
                            class="ant-progress-circle-path"
                            d="M 50,50 m 0,-45.85
   a 45.85,45.85 0 1 1 0,91.7
   a 45.85,45.85 0 1 1 0,-91.7"
                            stroke=""
                            stroke-linecap="round"
                            stroke-width="8.3"
                            opacity="0"
                            fill-opacity="0"
                        ></path>
                        <path
                            class="ant-progress-circle-path"
                            d="M 50,50 m 0,-45.85
   a 45.85,45.85 0 1 1 0,91.7
   a 45.85,45.85 0 1 1 0,-91.7"
                            stroke=""
                            stroke-linecap="round"
                            stroke-width="8.3"
                            opacity="0"
                            fill-opacity="0"
                        ></path>
                    </svg>
                </div>

                <div>
                    <h1>{profile.name || 'Bạn'} ơi 👋</h1>
                    <p>Kỹ năng Reading của bạn còn cần cải thiện nhiều nhé. Cố gắng lên nhé.</p>
                </div>
            </div>

            <div className={cx('container', 'answer-key')}>
                <div className="row">
                    <h4>Answer Keys</h4>
                    <div className="col-6">
                        {result.map((res, index) => (
                            <div key={index} className={cx('result-key')}>
                                <div className={cx('answer-block')}>{index + 1}</div>
                                <span>{answer[index + 1] || 'Missed'}</span> |
                                <span style={{ color: '#3B8756' }}>{res}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
