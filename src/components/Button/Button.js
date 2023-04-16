import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, children, leftIcon, rightIcon, className, onClick, ...passprops }) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passprops,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={cx('wrapper', { [className]: className })} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <h4 className={cx('title')}>{children}</h4>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
