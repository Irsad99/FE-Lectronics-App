import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import background from './image18.png'
import style from './login.module.css'
import useApi from '../../helpers/useApi'
import { login } from '../../store/reducer/user'

function Login() {
    const [Users, setUsers] = useState({ email: 'email', password: 'password' })
    const { isAuth } = useSelector((state) => state.users)

    const api = useApi('http://localhost:8080')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = { ...Users }
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const goLogin = () => {
        api.requests({
            method: 'post',
            url: '/auth/',
            data: Users,
        })
            .then((res) => {
                const { data } = res.data
                dispatch(login(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className={style.form}>
                            <div className={style.text1}>Welcome Back</div>
                            <div className={style.text2}>Steps to get started, find the best stuff.</div>
                            <input onChange={onChangeInput} type="text" name="email" className={style.input} placeholder="Enter your email" />
                            <input onChange={onChangeInput} type="password" name="password" className={style.input} placeholder="Password" />
                        </div>
                        <Button onClick={goLogin}>Login</Button>
                    </div>
                    <div className="col-sm-8">
                        <img width="899px" height="921px" className={style.background} src={background} alt="background" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
