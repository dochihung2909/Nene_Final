import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'

import styles from './Header.module.scss'

import HeadlessTippy from '@tippyjs/react/headless'

const cx = classNames.bind(styles)

function Header({ onLogin, onLogout, profile }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('logo-wrapper')}>
                <img
                    className={cx('logo-avt')}
                    src="https://f9-zpcloud.zdn.vn/1523179116296052704/f51db69e793aa564fc2b.jpg"
                    alt="img"
                ></img>
                <h1>
                    EngQ<span style={{ color: '#5A62B3' }}>uiz</span>
                </h1>
            </Link>
            <div className={cx('btn-wrapper')}>
                {Object.keys(profile).length <= 0 ? (
                    <Button onClick={onLogin} className={cx('login-btn')}>
                        Đăng nhập
                    </Button>
                ) : (
                    <HeadlessTippy
                        interactive
                        placement="bottom-start"
                        trigger="click"
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <ul className={cx('user-menu')}>
                                    <li className={cx('menu-item')}>
                                        <Button leftIcon={<i class="fa-regular fa-user"></i>}>Thông tin cá nhân</Button>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <Button
                                            onClick={onLogout}
                                            leftIcon={<i class="fa-solid fa-arrow-right-from-bracket"></i>}
                                        >
                                            Đăng Xuất
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    >
                        <button className={cx('profile')}>
                            <img src={profile.picture} alt="user-avatar" />
                        </button>
                    </HeadlessTippy>
                )}
                {/* <Button className={cx('signup-btn', 'btn btn-primary')}>Đăng ký</Button> */}
            </div>
        </div>
    )
}

export default Header
