import React, { useState } from 'react'
import { BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill } from "react-icons/bs";
import { InputGroup, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function ModalBody(params) {
    const { invalidEmail, email, setEmail, invalidPassword, setPassword, password, handleLogin } = params;
    //Show eye icons and password input display
    const [showPassword, setShowPassword] = useState(false);
    const [eyeFill, setEyeFill] = useState(false);

    const iconSize = 20;

    const onKeyDownEmail = ({ key }) => {
        if (key === 'Enter') {
            const passwordInput = document.querySelector(`input[name=password]`);
            passwordInput.focus();
        }
    };
    const onKeyDownPassword = ({ key }) => {
        if (key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Modal.Body className='bgColor-primaryLight'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address {invalidEmail}</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={onKeyDownEmail}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password {invalidPassword}</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter Your Password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={onKeyDownPassword}
                            className={`rounded`}
                        />
                        <div className={`eye pointer`}
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseOver={() => setEyeFill(true)}
                            onMouseLeave={() => setEyeFill(false)}>
                            {showPassword && (eyeFill ? <BsEyeSlashFill size={iconSize} /> : <BsEyeSlash size={iconSize} />)} {/*If password is set to show, then show the slash eye icon (either filled or unfilled)*/}
                            {!showPassword && (eyeFill ? <BsEyeFill size={iconSize} /> : <BsEye size={iconSize} />)} {/*If password is set to NOT show, then show the un-slashed eye icon (either filled or unfilled)*/}
                        </div>
                    </InputGroup>
                </Form.Group>
            </Form>
        </Modal.Body>
    )
}
