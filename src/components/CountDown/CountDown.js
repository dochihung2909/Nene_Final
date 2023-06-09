import classNames from 'classnames/bind'
import styles from './CountDown.module.scss'

const cx = classNames.bind(styles)

function CountDown({ time }) {
    return (
        <div className={cx('wrapper')}>
            <span>
                {time.minutes} : {time.seconds < 10 ? '0' + time.seconds : time.seconds}
            </span>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                font-size="20"
            >
                <path d="M16 5H20V8H16V5Z" fill="#292F33"></path>
                <path
                    d="M22 1H14C12.9 1 12 1.9 12 3C12 4.1 12.9 5 14 5H22C23.1 5 24 4.1 24 3C24 1.9 23.1 1 22 1ZM28.184 11.507L26.68 10.189C25.853 9.464 25.769 8.194 26.494 7.367C27.219 6.54 28.489 6.456 29.316 7.181L30.82 8.499C31.647 9.224 31.731 10.494 31.006 11.321C30.281 12.148 29.011 12.232 28.184 11.507Z"
                    fill="#8899A6"
                ></path>
                <path
                    d="M18 32C24.0751 32 29 27.0751 29 21C29 14.9249 24.0751 10 18 10C11.9249 10 7 14.9249 7 21C7 27.0751 11.9249 32 18 32Z"
                    fill="#F5F8FA"
                ></path>
                <path
                    d="M18 7C10.268 7 4 13.268 4 21C4 28.732 10.268 35 18 35C25.732 35 32 28.732 32 21C32 13.268 25.732 7 18 7ZM18 32C11.935 32 7 27.065 7 21C7 14.935 11.935 10 18 10C24.065 10 29 14.935 29 21C29 27.065 24.065 32 18 32Z"
                    fill="#66757F"
                ></path>
                <path
                    d="M27 22H17C16.448 22 16 21.553 16 21C16 20.447 16.448 20 17 20H27C27.553 20 28 20.447 28 21C28 21.553 27.553 22 27 22Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M18 31C18.5523 31 19 30.5523 19 30C19 29.4477 18.5523 29 18 29C17.4477 29 17 29.4477 17 30C17 30.5523 17.4477 31 18 31Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M24 28C24.5523 28 25 27.5523 25 27C25 26.4477 24.5523 26 24 26C23.4477 26 23 26.4477 23 27C23 27.5523 23.4477 28 24 28Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M24 16C24.5523 16 25 15.5523 25 15C25 14.4477 24.5523 14 24 14C23.4477 14 23 14.4477 23 15C23 15.5523 23.4477 16 24 16Z"
                    fill="#292F33"
                ></path>
                <path
                    d="M12 28C11.744 28 11.488 27.902 11.293 27.707C10.902 27.316 10.902 26.684 11.293 26.293L18.293 19.293C18.684 18.902 19.316 18.902 19.707 19.293C20.098 19.684 20.098 20.316 19.707 20.707L12.707 27.707C12.512 27.902 12.256 28 12 28Z"
                    fill="#DD2E44"
                ></path>
            </svg>
        </div>
    )
}

export default CountDown
