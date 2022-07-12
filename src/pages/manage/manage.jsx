import React, {useState} from 'react'

import { Container, Button, InputGroup, FormControl, Pagination, Modal,
Form, Row, Col } from 'react-bootstrap'
import style from './manage.module.css'
import imgplus from './plus.png'
import Header from '../../components/headerAuth/navbar'
import CardManage from '../../components/cardManage/cardManage'
import Footer from '../../components/footer/footer'

function Manage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Header />
            <div className="head">
                <Container>
                    <InputGroup className="mb-3" style={{ width: '90%', margin: '0 auto' }}>
                        <FormControl className={style.input_search} placeholder="Tap To Search For Something" aria-label="Tap To Search For Something" aria-describedby="basic-addon2" />
                        <Button className={style.btn_search} id="button-addon2">
                            <img src="https://i.ibb.co/PWtqWHZ/Vector.png" alt="" />
                        </Button>
                        <div className={style.but_alt}>
                            <Button className={style.btn_w} style={{ marginLeft: '20px' }}>
                                <img src="https://i.ibb.co/MhwpH7b/Vector.png" alt="" />
                            </Button>
                        </div>
                        <div className={style.but_alt}>
                            <Button className={style.btn_plus} style={{ marginLeft: '20px' }} onClick={handleShow}>
                                <img src={imgplus} alt="" style={{width: '21.5', height: '21.5'}}/>
                            </Button>
                        </div>
                    </InputGroup>

                        <CardManage category={'Headphone'} title={'Sony MDR-5706'} price={'$3000'}/>

                </Container>
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

            <Footer />
        </>
    )
}

export default Manage