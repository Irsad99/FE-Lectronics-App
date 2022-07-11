import React from 'react'
import FormRegister from '../../components/register/register'
import style from './register.module.css'
import background from './image9.png'

function Register() {
    return (
        <>
             <div className="container">
                <div className="row">
                <div className="col-sm-4">
                    <div className={style.form}>
                        <div className={style.text1}>Welcome, Please Create an Account</div>
                        <div className={style.text2}>Please fill in your name, email and password</div>
                        <FormRegister />
                    </div>
                    
                </div>
                <div className="col-sm-8">
                <img width="1018px" height="802px" className={style.background} src={background}  alt="background" />
                </div>
                </div>
            </div>
        </>
    )
}

export default Register