import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useApi from '../../helpers/useApi'
import { Button } from 'react-bootstrap'
import style from './register.module.css'
import background from './image9.png'

function Register() {
    const [Users, setUsers] = useState({ email: 'email', password: 'password' })
    const { isAuth } = useSelector((state) => state.users)

    const api = useApi('http://localhost:8080')
    const navigate = useNavigate()

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

    const daftar = () => {
        api.requests({
            method: 'POST',
            url: '/user/register',
            data: Users,
        })
            .then((res) => {
                console.log(res)
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
                            <div className={style.text1}>Welcome, Please Create an Account</div>
                            <div className={style.text2}>Please fill in your name, email and password</div>
                            <input onChange={onChangeInput} type="text" name="fullname" className={style.input} placeholder="Fullname" />
                            <input onChange={onChangeInput} type="text" name="email" className={style.input} placeholder="Email" />
                            <input onChange={onChangeInput} type="password" name="password" className={style.input} placeholder="Password" />
                            <Button onClick={daftar}>Register</Button>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <img width="1018px" height="802px" className={style.background} src={background} alt="background" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
