import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Grammar.module.scss'

const cx = classNames.bind(styles)

function Grammar({ thumb, title, description }) {
    return (
        <Link to="/study/grammar" className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={thumb} alt="ảnh"></img>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('title')}>{title}</h4>
                <p className={cx('description')}>{description}</p>
            </div>
        </Link>
    )
}

export default Grammar
