import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function Row2(params) {
    const { password, handlePasswordChange, passwordMsg, retypedPassword, handleRetypedPasswordChange } = params
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={e => handlePasswordChange(e)}

                />
                <Form.Control.Feedback type="invalid">
                    {passwordMsg}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Re-Type Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Re-Type Password"
                    required
                    value={retypedPassword}
                    onChange={e => handleRetypedPasswordChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                    Does Not Match Password.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}
