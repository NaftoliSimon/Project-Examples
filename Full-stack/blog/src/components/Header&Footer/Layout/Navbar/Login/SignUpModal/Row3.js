import React, { useState } from 'react'
import { Col, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'
import { BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill, BsLockFill } from 'react-icons/bs'
import focusOn from '../../../../../../functions/focusOn';
import InputIcon from './InputIcon';
import Eye from './Eye';

export default function Row3(params) {
    //TODO: fix error with retype password where if you match it to an improper password (that doesn't meet written requierments), then if you change the password without changing the retyped password it considers the retyped password valid and submits to the server
    const { password, handlePasswordChange, retypedPassword, handleRetypedPasswordChange, validated, passwordValidated, attemptedSubmit } = params;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypedPasswordVisible, setRetypedPasswordVisible] = useState(false);

    const passwordMsg = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."

    // const bgColor = /*validated ? 'bg-white' :*/ 'bg-transparent'; //set background color to white only to hide default validation warning symbol, otherwise make transparent to show default background color (which is usually white but can also be light grey when filling out the field from Chrome saved suggestion) TODO: fix the issue of different background color (white on grey) when hovering over Chrome tooltip suggestion
    let borderColor = '';
    if (attemptedSubmit) {
        borderColor = !passwordValidated ? 'border-danger' : 'border-success';
    }
    return (<>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03" className='mb-4'>
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
                        className={`inputPadding ${borderColor} password-input`}//rounded-0 rounded-start border-end-0
                    />
                    <Eye setVisible={setPasswordVisible} visible={passwordVisible} />
                </InputGroup>
                <Form.Text type="invalid" className='text-dark password-msg'>
                    {passwordMsg}
                </Form.Text>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Retype Password</Form.Label>
                <InputIcon name={'retypePassword'} icon={<BsLockFill />} validated={validated} />
                <InputGroup className="mb-3">
                    <Form.Control
                        type={retypedPasswordVisible ? 'text' : 'password'}
                        name="retypePassword"
                        placeholder="Retype Password"
                        required
                        value={retypedPassword}
                        onChange={e => handleRetypedPasswordChange(e)}
                        className={`inputPadding password-input rounded`}
                    />
                    <Eye setVisible={setRetypedPasswordVisible} visible={retypedPasswordVisible} />
                </InputGroup>
                <Form.Control.Feedback type="invalid" className='pt-1'>
                    Does Not Match Password.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    </>
    )
}
