import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap';
import baseUrl from '../../../data/URLpaths';
import myPostFetch from '../../../functions/myPostFetch';
import postFetch from '../../../functions/postFetch';
import DismissibleAlert from '../../reuseable/Alert';

export default function AddBlogModal({ show, setShow, loggedIn, savedUpdateData = false }) { //Add or edit Blog data Modal. For edit - pass the preexisting data to update, into the "savedUpdateData" object parameter. For add - just leave it out of the props
    //Todo: fix cors error stopping the edit and update postFetch from working
    const text = !savedUpdateData ? 'Add' : 'Update';
    const url = savedUpdateData ? `${baseUrl}/blogInfo/edit` : `${baseUrl}/blogInfo`;

    const [companyName, setCompanyName] = useState(savedUpdateData?.companyName || '');
    const [website, setWebsite] = useState(savedUpdateData?.website || '');
    const [shortSummary, setShortSummary] = useState(savedUpdateData?.shortSummary || '');
    const [error, setError] = useState(false);

    const [validated, setValidated] = useState(false);
    // useEffect(() => {
    //     console.log('error:', error.message);
    // }, [error])

    if (loggedIn) {
        const { userId, firstName, lastName } = loggedIn;

        //TODO: switch data passed in to only be object in body, and pass in Method to MyFetch & myPostFetch (make method defaults?)
        const blogData = JSON.stringify({ companyName, website, shortSummary, name: `${firstName} ${lastName}`, userId })
        const handleClose = () => setShow(false);

        const clearFields = () => {
            setCompanyName('');
            setWebsite('');
            setShortSummary('');
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                console.log('blog data NOT sent to server');
            } else {
                console.log('blog data sent to server');
                postFetch(url, blogData, setError); //Todo: fix cors error stopping the edit and update postFetch from working 
                clearFields();
                // console.log('error:', error);
                handleClose();
            }
        }

        const theme = JSON.parse(localStorage.getItem('theme'));
        return (
            <>
                <Modal show={show} onHide={handleClose} data-bs-theme={theme}>
                    <div className={`rounded`}>
                        <Modal.Header closeButton>
                            <Modal.Title>{text} Your Blog Info</Modal.Title>
                        </Modal.Header>
                        <div className='m-2'>
                            <DismissibleAlert heading={'Data NOT Sent to the Server'} text={error.message} show={error} setShow={setError} variant={'danger'} />
                        </div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Modal.Body className=''>
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
                                        />
                                    </Form.Group>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className='ms-1 d-flex'>
                                    <Button type="submit" className={`btn btn-primary me-2`}>{text}</Button>
                                    <Button className={`btn btn-primary`} onClick={handleClose}>Cancel</Button>
                                </div>
                            </Modal.Footer>
                        </Form>
                    </div>
                </Modal>
            </>
        );
    }
}