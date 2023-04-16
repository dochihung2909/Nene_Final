import classNames from 'classnames/bind'
import styles from './UserInfo.module.scss'

const cx = classNames.bind(styles)

function UserInfo() {
    return <div className={cx('wrapper')}>UserPage</div>
}

export default UserInfo
