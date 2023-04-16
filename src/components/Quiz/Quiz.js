import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Quiz.module.scss'

const cx = classNames.bind(styles)

function Quiz({ thumb, title }) {
    return (
        <Link to="/" className={cx('wrapper')}>
            <div className={cx('thumb')}>
                <img src={thumb} alt="thumb" />
            </div>
            <h4 className={cx('title')}>{title}</h4>
        </Link>
    )
}

export default Quiz
