import React from 'react'
import Logins from '../../components/login/login'
import background from './image18.png'
import style from './login.module.css'

function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                    <div className={style.form}>
                        <div className={style.text1}>Welcome Back</div>
                        <div className={style.text2}>Steps to get started, find the best stuff.</div>
                        <Logins />
                    </div>
                    
                </div>
                <div className="col-sm-8">
                <img width="899px" height="921px" className={style.background} src={background}  alt="background" />
                </div>
                </div>
            </div>
        </>
    )
}

export default Login