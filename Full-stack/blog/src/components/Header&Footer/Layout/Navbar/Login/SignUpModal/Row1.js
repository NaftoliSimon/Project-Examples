import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function Row1({firstName, lastName, email, setFirstName, setLastName, setEmail}) {
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required
                    autoFocus
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    min="8"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                    placeholder="name@gmail.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}
