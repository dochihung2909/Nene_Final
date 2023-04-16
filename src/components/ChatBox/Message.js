import classNames from 'classnames/bind'
import styles from './ChatBox.module.scss'

const cx = classNames.bind(styles)

function Message({ thumb, sender, message }) {
    return (
        <div className={cx('message-wrapper')}>
            {!sender && <img className={cx('message-avt')} src={thumb} alt="thumn" />}
            <span className={cx('message', { 'user-message': sender })}>{message}</span>
            {sender && <img className={cx('message-avt')} src={thumb} alt="thumn" />}
        </div>
    )
}

export default Message
