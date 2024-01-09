import React from 'react';
import { Col, Form, Row, InputGroup, Alert } from 'react-bootstrap';
import { BsEnvelopeFill } from 'react-icons/bs';
import InputIcon from './InputIcon';
import bgLightOrDark from '../../../../data/Bootstrap/colors';

export default function Row2({ email, setField, takenEmail, autoFill }) {
  const takenEmailStyle = takenEmail ? 'border-danger shadow-red password-input' : '';
  return (
    <Row className="mb-3">
      <Form.Group as={Col} md="12" className='input-parent' controlId="validationSignUp03">
        <Form.Label>Email </Form.Label>
        <InputIcon name={'email'} icon={<BsEnvelopeFill />} />
        <Form.Control
          type="email"
          name='email'
          placeholder="name@gmail.com"
          required
          value={email}
          onChange={e => setField('email', e.target.value)}
          className={`inputPadding ${autoFill} ${takenEmailStyle}`}
          isInvalid={takenEmail} // Set isInvalid to true when takenEmail is true
        />
        {/* <div className='email-signUp' onClick={() => focusOn(`email`)}><BsEnvelopeFill /></div> */}
        <Form.Control.Feedback type="invalid" className={`text-danger-emphasis`}>
        {takenEmail && <Alert className={`me-3`} style={{ display: 'inline', padding: '5px' }} variant={'danger'}>Email is already taken</Alert>}
        Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
}
