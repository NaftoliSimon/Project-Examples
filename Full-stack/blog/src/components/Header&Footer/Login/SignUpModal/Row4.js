import React, { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import InputIcon from './InputIcon'
import Eye from './Eye'
import { BsLockFill } from 'react-icons/bs';

export default function Row4({ validated, retypedPassword, setField, password }) {
    const [retypedPasswordVisible, setRetypedPasswordVisible] = useState(false);

    const handleRetypedPasswordChange = (event) => {
        const retypedPasswordValue = event.target.value;
        setField('retypedPassword', retypedPasswordValue)
        if (retypedPasswordValue.length > 0 && password !== retypedPasswordValue) {
            event.target.setCustomValidity('Passwords do not match.');
        } else {
            event.target.setCustomValidity('');
        }
    }
    
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationSignUp05" className='input-parent'>
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
    )
}