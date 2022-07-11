import React from 'react'
import {Form, Button} from 'react-bootstrap'

function FormRegister() {
    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Control type="fullname" placeholder="What's your name?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Your e-mail address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Your Password" />
        </Form.Group>
        <Button variant="primary" type="button">
            Register
        </Button>
        </Form>
        </>
    )
}

export default FormRegister