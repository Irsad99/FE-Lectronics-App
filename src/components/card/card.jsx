import React from 'react'
import { InputGroup, FormControl, Pagination, Card, Button } from 'react-bootstrap'
import style from './card.module.css'
import '../../index.css'

function Cards() {
    return (
        <>
            <div className="head">
                <InputGroup className="mb-3">
                    <FormControl className={style.input_search} placeholder="Tap To Search For Something" aria-label="Tap To Search For Something" aria-describedby="basic-addon2" />
                    <Button className={style.btn_search} id="button-addon2">
                        <img src="https://i.ibb.co/PWtqWHZ/Vector.png" alt="" />
                    </Button>
                    <div className={style.but_alt}>
                        <Button className={style.btn_w} style={{ margin: '0 20px 0 20px' }}>
                            <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" />
                        </Button>
                        <Button className={style.btn_w}>
                            <img src="https://i.ibb.co/MhwpH7b/Vector.png" alt="" />
                        </Button>
                    </div>
                </InputGroup>
            </div>
            <div className={style.btn_gr}>
                <a href="/#" className={style.label_cat} id={style.active}>
                    Headphone
                </a>
                <a href="/#" className={style.label_cat}>
                    Air Conditioner
                </a>
                <a href="/#" className={style.label_cat}>
                    Router
                </a>
            </div>
            <div className={style.cardCont} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8%', flexDirection: 'row', flexWrap: 'wrap' }}>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
                <Card className={style.card}>
                    <Card.Body className={style.body_ut}>
                        <div className={style.title}>
                            <a href="#" className={style.card_name}>
                                Sennheiser HD-25
                            </a>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <a className={style.card_price}>$3000</a>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/2YCQs1S/Vector.png" alt="" style={{ padding: '0 0 4px' }} />
                                <a className={style.card_rate}>4.9</a>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{ padding: '27px', margin: '-140px 0px' }}>
                        <Card.Img variant="top" src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1" />
                        <Card.Body style={{ display: 'flex' }}>
                            <Button className={style.but_detail} style={{ width: '100%' }}>
                                Detail
                            </Button>
                            <Button className={style.but_cart}>
                                <img src="https://i.ibb.co/CK2X9RQ/Vector.png" alt="" style={{ width: '20px' }} />
                            </Button>
                        </Card.Body>
                    </div>
                </Card>
            </div>
            <Pagination itemclassName="page-item" linkclassName="page-link" className={style.pagination}>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Item>{7}</Pagination.Item>
                <Pagination.Item>{8}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    )
}

export default Cards
