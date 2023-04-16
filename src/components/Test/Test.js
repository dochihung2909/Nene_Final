import { Box, Image } from '@chakra-ui/react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import styles from './Test.module.scss'

const cx = classNames.bind(styles)

function Test({ title, minutes, questions }) {
    return (
        <Link to="/test" className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('image-test')}>
                    <img
                        src="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:70/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBLzZmOGQyNjk2LTFlM2UtNGZkNi05OWYwLTNlNGJmZGU3YzEzMS5qcGc="
                        alt="test"
                    />
                </div>
                <div className={cx('header-title')}>
                    <h4>{title}</h4>
                </div>
                <div className={cx('option')}>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('description')}>
                    <div>
                        <div>
                            <i class="fa-regular fa-circle-question"></i> {questions} Questions
                        </div>
                        <div>
                            <i class="fa-regular fa-clock"></i> {minutes} hour
                        </div>
                    </div>

                    <div>
                        <div>
                            <i class="fa-regular fa-circle-question"></i> {questions} Questions
                        </div>
                        <div>
                            <i class="fa-regular fa-clock"></i> {minutes} hour
                        </div>
                    </div>
                </div>
                <Button to="/test" className={cx('btn-test')} rightIcon={<i className="fa-solid fa-chevron-right"></i>}>
                    Xem bài thi
                </Button>
            </div>
        </Link>
    )
}

export default Test
