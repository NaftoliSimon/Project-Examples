import React, { useEffect, useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { BsLockFill } from 'react-icons/bs'
import InputIcon from './InputIcon';
import Eye from './Eye';

export default function Row3({ password, attemptedSubmit, setField, retypedPassword, setPasswordMatch, passwordMatch }) {
    const validatePassword = (password) => { // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        return passwordRegex.test(password);
    }

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(validatePassword(password));
    const [extraSmallScreen, setExtraSmallScreen] = useState(window.innerWidth < 576); //<576px is bootstraps extra small screen size

    useEffect(() => {
        // Add or remove class based on the window width
        const handleResize = () => setExtraSmallScreen(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const passwordMsg = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."

    const dangerOrSuccess = !passwordValidated ? 'border-danger text-danger' : 'border-success text-success';
    const submittedDisplayColor = attemptedSubmit ? dangerOrSuccess : ''; //if you have not tried to submit border/text shouldn't be colored, if you have clicked submit border will be either red or green depending on if the password is valid

    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setField('password', passwordValue);
        if (passwordValue.length > 0) {
            const validPassword = validatePassword(passwordValue);
            if (validPassword) {
                event.target.setCustomValidity('');
                setPasswordValidated(true);
            } else {
                event.target.setCustomValidity('Please provide a valid password.');
                setPasswordValidated(false);
            }
        } else setPasswordValidated(false);

        if (passwordValue !== retypedPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
        
    }

    return (
        <Row className={extraSmallScreen ? 'mb-4' : 'mb-2'}>
            <Form.Group as={Col} md="12" controlId="validationSignUp04" className='mb-4 input-parent'>
                <Form.Label>Password</Form.Label>
                <InputIcon name={'password'} icon={<BsLockFill />} />
                <InputGroup className="mb-3" hasValidation>
                    <Form.Control
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={e => handlePasswordChange(e)}
                        aria-describedby="passwordHelpBlock"
                        className={`inputPadding ${submittedDisplayColor} password-input text-dark`}//rounded-0 rounded-start border-end-0
                    />
                    <Eye setVisible={setPasswordVisible} visible={passwordVisible} />
                </InputGroup>
                <Form.Text type="invalid" className={`password-msg ${submittedDisplayColor}`}>
                    {!passwordValidated ? passwordMsg : 'Password Conditions Have Been Met!'}
                </Form.Text>
            </Form.Group>
        </Row>
    )
}
