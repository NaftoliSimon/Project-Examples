import React, { useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import InputIcon from './InputIcon';
import Eye from './Eye';
import { BsLockFill } from 'react-icons/bs';

export default function Row4({ validated, retypedPassword, setField, password, passwordMatch, setPasswordMatch, attemptedSubmit }) {
    const [retypedPasswordVisible, setRetypedPasswordVisible] = useState(false);

    const handleRetypedPasswordChange = (event) => {
        const retypedPasswordValue = event.target.value;
        setField('retypedPassword', retypedPasswordValue);

        if (password !== retypedPasswordValue) {//retypedPasswordValue.length > 0 && 
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };
    const successOrFailColor = !passwordMatch ? 'border-danger text-danger shadow-red' : 'border-success text-success shadow-green';
    const borderColor = attemptedSubmit ? successOrFailColor : '';

    // const dangerOrSuccess = !passwordValidated ? 'border-danger text-danger' : 'border-success text-success';
    // const submittedDisplayColor = attemptedSubmit ? dangerOrSuccess : ''; //if you have not tried to submit border/text shouldn't be colored, if you have clicked submit border will be either red or green depending on if the password is valid
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationSignUp05" className="input-parent">
                <Form.Label>Retype Password</Form.Label>
                <InputIcon name={'retypePassword'} icon={<BsLockFill />} validated={validated} />
                <InputGroup>
                    <Form.Control
                        type={retypedPasswordVisible ? 'text' : 'password'}
                        name="retypePassword"
                        placeholder="Retype Password"
                        required
                        value={retypedPassword}
                        onChange={(e) => handleRetypedPasswordChange(e)}
                        className={`inputPadding ${borderColor} password-input text-dark rounded`}
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
