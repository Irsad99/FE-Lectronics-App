import React from 'react'
import Navbar from '../../components/header/navbar'
import Navcard from '../../components/navcard/navcard'
import style from './home.module.css'
import background from './bg1.jpg'

function Home() {
    return (
        <>
        <Navbar />
        <div className={style.background}>
        <div className={style.content}>
            <div className="row">
            <div className="col">
                <div className={style.text1}>Take Your Time</div>
                <div className={style.text1}>And Shop</div>
                <div className={style.text1}>Anywhere</div>
                <div className={style.text2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit..</div>
                <br />
                <div className={style.button}>
                <button type="button" className="btn btn-info me-md-2">Shop Now</button>
                <button type="button" className="btn btn-outline-info">Be a Seller</button>
                </div>  
            </div>
            <div className="col">
            <img width="684px" height="456px" className={style.logo} src={background}  alt="background" />
            </div>
            </div>
        </div>
        </div>

        <div className='container'>
            How it Works
            <div className={style.text3}>Make An</div>
            <div className={style.text3}>Order Easily</div>
            <div className="row">
                <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Select Product</h5>
                    <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Make Payment</h5>
                    <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Receive Product</h5>
                    <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container">
            Our Product
            <div className={style.text3}>The Best Product By</div>
            <div className={style.text3}>Lectronic</div>
            <Navcard />
        </div>
        </>
    )
}

export default Home