import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { forwardRef } from 'react'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = forwardRef(({ to, href, children, leftIcon, rightIcon, className, onClick, ...passprops }, ref) => {
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
        <Comp ref={ref} className={cx('wrapper', { [className]: className })} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <h4 className={cx('title')}>{children}</h4>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
})

export default Button
