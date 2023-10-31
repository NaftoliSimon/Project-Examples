import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import baseUrl from '../../../data/URLpaths';
import myPostFetch from '../../../functions/myPostFetch';
import { pillButtonSolid } from '../../../data/Bootstrap/pillButton';
import postFetch from '../../../functions/postFetch';

export default function AddBlogModal({ show, setShow, loggedIn, savedUpdateData = false }) { //Add or edit Blog data Modal. For edit - pass the preexisting data to update, into the "savedUpdateData" object. For add - just leave it out of the props
    const text = !savedUpdateData ? 'Add' : 'Update';
    const url = savedUpdateData ? `${baseUrl}/blogInfo/edit` : `${baseUrl}/blogInfo`;

    const [companyName, setCompanyName] = useState(savedUpdateData?.companyName || '');
    const [website, setWebsite] = useState(savedUpdateData?.website || '');
    const [shortSummary, setShortSummary] = useState(savedUpdateData?.shortSummary || '');

    const [validated, setValidated] = useState(false);
    if (loggedIn) {
        const { userId, firstName, lastName } = loggedIn;

        //TODO: switch data passed in to only be object in body, and pass in Method to MyFetch & myPostFetch (make method defaults?)
        const blogData = JSON.stringify({ companyName, website, shortSummary, name: `${firstName} ${lastName}`, userId })
        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);

        const clearFields = () => {
            setCompanyName('');
            setWebsite('');
            setShortSummary('');
        }

        const handleSubmit = (e) => {
            // console.log('e', e);
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
                console.log('blog data NOT sent to server');
            } else {
                console.log('blog data sent to server');
                // myPostFetch(url, blogData)
                postFetch(url, blogData)
                clearFields();
                handleClose();

                // e.preventDefault();
                // e.stopPropagation();
            }
            // setValidated(true)
        }
        const onKeyDownInput1 = ({ key }) => { //TODO: either get the onkeydowns to focus on proper element or remove them
            if (key === 'Enter') {
                // focusOn('input2');
            }
        }
        const onKeyDownInput2 = ({ key }) => {
            if (key === 'Enter') {
                // focusOn('input3', 'textarea');
            }
        }
        const onLastInputKeyDown = ({ key }) => {
            if (key === 'Enter') {
                // handleSubmit(); 
            }
        };
        return (
            <>
                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton className='bgColor-primary'>
                        <Modal.Title>{text} Your Blog Info</Modal.Title>
                    </Modal.Header>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Body className='bgColor-primary'>
                            
                            <Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label className='mb-1 pt-2'>Company Name</Form.Label>
                                    <Form.Control
                                        required
                                        name='input1'
                                        autoFocus
                                        type="text"
                                        placeholder="Company Name"
                                        value={companyName}
                                        onChange={e => setCompanyName(e.target.value)}
                                        onKeyDown={onKeyDownInput1}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label className='mb-1 pt-2'>Website</Form.Label>
                                    <Form.Control
                                        required
                                        name='input2'
                                        type="text"
                                        placeholder="Your Website"
                                        value={website}
                                        onChange={e => setWebsite(e.target.value)}
                                        onKeyDown={onKeyDownInput2}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom03" >
                                    <Form.Label className='mb-1 pt-2'>Short Summary</Form.Label>
                                    <Form.Control
                                        name='input3'
                                        as="textarea"
                                        required
                                        type="text"
                                        placeholder="Short Introduction or Summary Of What Your Blog is About..."
                                        value={shortSummary}
                                        onChange={e => setShortSummary(e.target.value)}
                                        onKeyDown={onLastInputKeyDown}
                                    />
                                </Form.Group>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer className='bgColor-primary'>

                            <div className='ms-1 d-flex'>
                                <Button type="submit" className={`button ${pillButtonSolid}`}>{text}</Button>
                                <Button className={`button mx-2 ${pillButtonSolid}`} onClick={handleClose}>Cancel</Button>
                            </div>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}