import React, {useState} from 'react'
import style from './detail.module.css'
import pen from './Vector.png'
import Header from '../../components/header/navbar'

function Detail() {
    const [num, setNum] = useState(1)

    function incrementCount() {
        setNum(num + 1)
    }

    function decrementCount() {
        if (num == 0) {
            setNum(0)
        } else {
            setNum(num - 1)
        }
    }

    return (
        <>
        <Header />
        <div className={style.container}>
            <div className="row">
            <div className="col-6 col-md-auto">
            <div className={style.img}>
                <img src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" className="card-img-top" alt="..." />
                <div className="card-body">
                <img src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" className={style.imgthumb} alt="..." />
                <img src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" className={style.imgthumb} alt="..." />
                <img src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" className={style.imgthumb} alt="..." />
                <img src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" className={style.imgthumb} alt="..." />
                </div>
            </div>
            <div className={style.detail}>
                <div className="card-body">
                <h5 className="card-title text-center">Details</h5>
                
                <div className="row">
                <div className="col">
                    <div className={style.btn_num}>  
                    <div className={style.counters}>
                        <div className={style.counter}>
                        <button onClick={decrementCount} type="button" className="btn btn-light">-</button>
                        <p className={style.p}>{num}</p>
                        <button onClick={incrementCount} type="button" className="btn btn-light">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <p className={style.stock}>Stock</p>
                </div>
                <div className="col-md-auto">
                    <p className={style.num_stock}>5</p>
                </div>
                </div>

                <div className={style.notes}>
                    <img src={pen} alt="" style={{ width: '24px', height: '24px', padding: '0 0 4px', marginLeft: '10px' }} />
                    <a className="card-link">Add notes</a>
                </div>

                

                <div className={style.sub_total}>
                <div className="row">
                    <div className="col">
                    <p className="card-subtitle mb-2 text-muted"><small>Sub-total</small></p>
                    </div>
                    <div className="col"><h5 className='text-end'>$3000</h5></div>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                <button type="button" className={style.btn}>Checkout</button>
                <button type="button" className={style.cart}><img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} /></button>
                </div>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="mb-3">
                <div className="card-body">
                    <div className={style.title}>
                    <h1 className="card-title">Sennheiser HD-25</h1>
                    </div>
                <div className={style.detail1}>
                    
                    <a className={style.card_price}>Sold</a>
                    <a className={style.stock}>6</a>
                    <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px', marginLeft: '10px' }} />
                    <a className={style.card_rate}>4.9</a>
                </div>
                </div>
            </div>

            {/* Details and Review Nav */}
            <hr />
            <div className={style.nav}>
            <nav className="nav">
                <a className="nav-link active" aria-current="page" href="#">Details</a>
                <a className="nav-link" href="#">Review</a>
            </nav>
            </div>
            <hr />

            <p>Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated arterial trauma, following unsuccessful endovascular repair; tube prosthesis  </p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
            
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Sennheiser HD-25</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}

export default Detail