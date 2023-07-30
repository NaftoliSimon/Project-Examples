import React, { useEffect, useState } from 'react'
import { BsEnvelope, BsEnvelopeFill, BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill, BsLockFill } from "react-icons/bs";
import { InputGroup, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import focusOn from '../../../functions/focusOn';
import DismissibleAlert from '../../Alert';

export default function ModalBody(props) {
    const { invalidEmail, email, setEmail, invalidPassword, setPassword, password, handleLogin, setInvalidPassword, setInvalidEmail } = props;
    //Show eye icons and password input display
    const [showPassword, setShowPassword] = useState(false);
    const [eyeFill, setEyeFill] = useState(false);

    const iconSize = 20;

    const onKeyDownEmail = ({ key }) => { if (key === 'Enter') { focusOn('password') } };
    const onKeyDownPassword = ({ key }) => { if (key === 'Enter') { handleLogin() } };

    const emailInputProps = { className: `inputPadding`, type: 'email', name: 'email', placeholder: "Enter Your Email", value: email, onChange: e => setEmail(e.target.value), onKeyDown: onKeyDownEmail };
    const passwordInputProps = { className: `rounded inputPadding`, type: showPassword ? 'text' : 'password', name: 'password', value: password, placeholder: "Enter Your Password", onChange: e => setPassword(e.target.value), onKeyDown: onKeyDownPassword };
    const eyeIconContainerProps = { className: `eye-icon pointer`, onMouseOver: () => setEyeFill(true), onMouseLeave: () => setEyeFill(false), onClick: () => setShowPassword(!showPassword) };

    return (
        <Modal.Body className='bgColor-primary border-0'>
            <Form>
            <DismissibleAlert heading={'Invalid Email'} text={'The email you have entered does not exist'} show={invalidEmail} setShow={setInvalidEmail}/>
            <DismissibleAlert heading={'Incorrect Password'} text={'The password you have entered is incorrect'} show={invalidPassword} setShow={setInvalidPassword}/>
                <Form.Group className="mb-3 input-parent login-parent" controlId="loginForm.ControlInput1">
                    <Form.Label>Email address </Form.Label>
                    <div className='input-icon cursor-text' onClick={() => focusOn(`email`)}><BsEnvelopeFill /></div>
                    <Form.Control required autoFocus {...emailInputProps} />
                </Form.Group>

                <Form.Group className="mb-3 input-parent login-parent" controlId="loginForm.ControlInput2">
                    <Form.Label>Password </Form.Label>
                    <div className='input-icon cursor-text' onClick={() => focusOn(`password`)}><BsLockFill /></div>
                    <InputGroup className="mb-3">
                        <Form.Control required {...passwordInputProps} />
                        <div {...eyeIconContainerProps}>
                            {showPassword && (!eyeFill ? <BsEyeSlashFill size={iconSize} /> : <BsEyeSlash size={iconSize} />)} {/*If password is set to show, then show the slash eye icon (either filled or unfilled)*/}
                            {!showPassword && (!eyeFill ? <BsEyeFill size={iconSize} /> : <BsEye size={iconSize} />)} {/*If password is set to NOT show, then show the un-slashed eye icon (either filled or unfilled)*/}
                        </div>
                    </InputGroup>
                </Form.Group>
            </Form>
        </Modal.Body>
    )
}
