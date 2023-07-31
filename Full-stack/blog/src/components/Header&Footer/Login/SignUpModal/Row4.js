import React, { useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import InputIcon from './InputIcon';
import Eye from './Eye';
import { BsLockFill } from 'react-icons/bs';

export default function Row4({ validated, retypedPassword, setField, password, passwordMatch, setPasswordMatch, attemptedSubmit }) {
    const [retypedPasswordVisible, setRetypedPasswordVisible] = useState(false);
    // const [passwordMatch, setPasswordMatch] = useState(true);

    const handleRetypedPasswordChange = (event) => {
        const retypedPasswordValue = event.target.value;
        setField('retypedPassword', retypedPasswordValue);

        if (retypedPasswordValue.length > 0 && password !== retypedPasswordValue) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationSignUp05" className="input-parent">
                <Form.Label>Retype Password</Form.Label>
                <InputIcon name={'retypePassword'} icon={<BsLockFill />} validated={validated} />
                <InputGroup className="">
                    <Form.Control
                        type={retypedPasswordVisible ? 'text' : 'password'}
                        name="retypePassword"
                        placeholder="Retype Password"
                        required
                        value={retypedPassword}
                        onChange={(e) => handleRetypedPasswordChange(e)}
                        className={`inputPadding password-input rounded`}
                        isInvalid={!passwordMatch && attemptedSubmit}
                        isValid={passwordMatch && retypedPassword.length > 0 && attemptedSubmit}
                    />
                    <Eye setVisible={setRetypedPasswordVisible} visible={retypedPasswordVisible} />
                </InputGroup>
                {attemptedSubmit && (!passwordMatch ? 
                    <Form.Text className="text-danger">Passwords do not match.</Form.Text>
                 :  <Form.Text className="text-success">Passwords match!</Form.Text> )}
            </Form.Group>
        </Row>
    );
}
