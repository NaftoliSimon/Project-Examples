import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { BsEnvelopeFill, BsPersonFill } from 'react-icons/bs'
import InputIcon from './InputIcon'

export default function Row1({ firstName, lastName, setField }) {
    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="6" className='input-parent' controlId="validationSignUp01">
                <Form.Label>First Name</Form.Label>
                <InputIcon name={'firstName'} icon={<BsPersonFill />} />
                <Form.Control
                    required
                    autoFocus
                    name='firstName'
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setField('firstName', e.target.value)}
                    className={`inputPadding`}
                />

            </Form.Group>

            <Form.Group as={Col} md="6" className='input-parent' controlId="validationSignUp02">
                <Form.Label>Last Name</Form.Label>
                <InputIcon name={'lastName'} icon={<BsPersonFill />} />
                <Form.Control
                    required
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    min="8"
                    value={lastName}
                    onChange={e => setField('lastName', e.target.value)}
                    className={`inputPadding`}
                />
                {/* <div className='lastName-signUp' onClick={() => focusOn(`lastName`)}><BsPersonFill /></div> */}

            </Form.Group>
        </Row>
    )
}
