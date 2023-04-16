import classNames from 'classnames/bind'
import Content from '~/layouts/Content'
import Header from '~/layouts/Header'

import { googleLogout, useGoogleLogin } from '@react-oauth/google'

import { useEffect, useState } from 'react'

import styles from './DefaultLayout.module.scss'

import axios from 'axios'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    const [user, setUser] = useState([])
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')) || {})

    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profile))

        return () => {}
    }, [profile])

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    })
    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data)
                })
                .catch((err) => console.log(err))
        }
    }, [user])

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout()
        setProfile({})
    }

    return (
        <>
            <Header onLogin={login} onLogout={logOut} profile={profile}></Header>
            <div className={cx('wrapper', 'container-fluid')}>{children}</div>
        </>
    )
}

export default DefaultLayout
