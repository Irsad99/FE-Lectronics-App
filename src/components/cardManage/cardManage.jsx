import React, {useState} from 'react'
import style from './cardManage.module.css'
import img from './bin.png'
import {Card, Button, Modal, Form, Row, Col} from 'react-bootstrap'

function CardManage(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Card className={style.card}>
                <div className={style.content_wrapper}>
                    <div className={style.left}>
                        <img
                            className={style.img}
                            width="156px"
                            height="156px"
                            src="https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-headset/proheadset-hero.png?v=1"
                        />
                        <div className={style.details}>
                            <a className={style.category}>{props.category}</a>
                            <div className="row">
                                <div className="col">
                                <div className={style.name}>{props.title}</div>
                                </div>
                                <div className="col">
                                <div className={style.prc}>{props.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.button}>
                            <Button className={style.but_details} onClick={handleShow}>Edit</Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Add Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form>
                                <Row>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formGroupName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Input name product..." />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formGroupPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="price" placeholder="Input price product..." />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formGroupStok">
                                        <Form.Label>Stok</Form.Label>
                                        <Form.Control type="stok" placeholder="Input stok product..." />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formGroupDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="description" placeholder="Input description product..." />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formGroupCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="category" placeholder="Input category product..." />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Image (Max 5)</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Submit
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            <Button className={style.but_del}><img src={img} alt="" style={{width: '19.5px', height: '22.5px'}}/></Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardManage