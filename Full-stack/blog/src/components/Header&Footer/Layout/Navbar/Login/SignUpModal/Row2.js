import React, { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

export default function Row2(params) {
    const { password, handlePasswordChange, passwordMsg, retypedPassword, handleRetypedPasswordChange, validated, passwordValidated } = params;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const hidePassword = () => setPasswordVisible(false);
    const showPassword = () => setPasswordVisible(true);

    const bgColor = validated && !passwordValidated ? 'bg-white' : 'bg-transparent'; //set background color to white only to hide default validation warning symbol, otherwise make transparent to show default background color (which is usually white but can also be light grey when filling out the field from Chrome saved suggestion) TODO: fix the issue of different background color (white on grey) when hovering over Chrome tooltip suggestion
    const eyeIcon = <div className={`eye ${bgColor}`}>
        <BsEye size={20} className={`pointer`} onMouseDown={showPassword} onMouseUp={hidePassword} onMouseLeave={hidePassword} />
    </div>
    const eyeSlashIcon = <div className={`eye ${bgColor}`}>
        <BsEyeSlash  size={20} className={`pointer`} onMouseDown={showPassword} onMouseUp={hidePassword} onMouseLeave={hidePassword} />
    </div>
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        required
                        value={password}
                        onChange={e => handlePasswordChange(e)}
                        aria-describedby="passwordHelpBlock"
                    className={`rounded`}
                    />
                    {passwordVisible ? eyeSlashIcon : eyeIcon}
                    <Form.Control.Feedback type="invalid">
                        {passwordMsg}
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Retype Password"
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
