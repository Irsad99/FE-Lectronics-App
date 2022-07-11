import React from 'react'
import style from './myprofile.module.css'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'

function MyProfile() {
    return (
        <>
            {/* <Header /> */}
            <Container style={{ marginTop: '1%' }}>
                <Button className={style.but_back}>
                    <img src="https://i.ibb.co/HDFThwz/Vector-64.png" alt="" />
                </Button>
                <div className={style.content}>
                    <div className={style.avatar}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
                    </div>
                </div>
                <Container>
                    <div className={style.btn}>
                        <Button className={style.upload}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </Button>
                    </div>
                    <div className={style.ctn}>
                        <a className={style.bio}>Edit Your Personal Bio</a>
                        <div className={style.form_profile}>
                            <Form>
                                <Row className="mb-5">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className={style.label}>Name</Form.Label>

                                        <div className={style.form}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className={style.icon} viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                            <input type="text" className={style.input} name="fullname" placeholder="Fullname" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label className={style.label}>Date of Birth</Form.Label>
                                        <div className={style.form}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className={style.icon} viewBox="0 0 16 16">
                                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <input type="text" className={style.input} name="Password" placeholder="When were you born" />
                                        </div>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} className="mb-5" controlId="formGridAddress1">
                                        <Form.Label className={style.label}>Address</Form.Label>
                                        <div className={style.form}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className={style.icon} viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            <input type="text" className={style.input} name="Address" placeholder="Where is your house address" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className={style.label}>State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className={style.label}>Phone</Form.Label>
                                        <div className={style.form}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className={style.icon} viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                            <input type="text" className={style.input} name="Phone" placeholder="Enter your phone number" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className={style.label}>Password</Form.Label>
                                        <div className={style.form}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className={style.icon} viewBox="0 0 16 16">
                                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                            <input type="text" className={style.input} name="Password" placeholder="Password" />
                                        </div>
                                    </Form.Group>
                                </Row>

                                <Button className={style.btn_submit}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default MyProfile
