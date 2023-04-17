import React from 'react'
import { Col, Form, Row, InputGroup } from 'react-bootstrap'
import { BsEnvelopeFill } from 'react-icons/bs'
import focusOn from '../../../../../../functions/focusOn'
import InputIcon from './InputIcon'

export default function Row2({ email, setField, takenEmail }) {
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label>Email {takenEmail}</Form.Label>
                <InputIcon name={'email'} icon={<BsEnvelopeFill />}/>
                    <Form.Control type="email"
                        name='email'
                        placeholder="name@gmail.com"
                        required
                        value={email}
                        onChange={e => setField('email', e.target.value)}
                        className={`inputPadding`}
                    />
                    {/* <div className='email-signUp' onClick={() => focusOn(`email`)}><BsEnvelopeFill /></div> */}
                {/* <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                </Form.Control.Feedback> */}
            </Form.Group>
        </Row>
    )
}
