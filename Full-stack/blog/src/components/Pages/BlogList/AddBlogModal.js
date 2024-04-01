import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap';
import baseUrl from '../../../data/URLpaths';
import myPostFetch from '../../../functions/myPostFetch';
import postFetch from '../../../functions/postFetch';
import DismissibleAlert from '../../reuseable/Alert';

export default function AddBlogModal({ show, setShow, loggedIn, savedUpdateData = false }) {
    const text = !savedUpdateData ? 'Add' : 'Update';
    const url = savedUpdateData ? `${baseUrl}/blogInfo/edit` : `${baseUrl}/blogInfo/add`;

    const [companyName, setCompanyName] = useState(savedUpdateData?.companyName || '');
    const [website, setWebsite] = useState(savedUpdateData?.website || '');
    const [shortSummary, setShortSummary] = useState(savedUpdateData?.shortSummary || '');
    const [category, setCategory] = useState(savedUpdateData?.category || ''); // New Category field
    const [error, setError] = useState(false);

    const [validated, setValidated] = useState(false);

    if (loggedIn) {
        const { userId, firstName, lastName } = loggedIn;

        const blogData = JSON.stringify({ companyName, website, shortSummary, category, name: `${firstName} ${lastName}`, userId });
        const handleClose = () => setShow(false);

        const clearFields = () => {
            setCompanyName('');
            setWebsite('');
            setShortSummary('');
            setCategory('');
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                console.log('blog data NOT sent to server');
            } else {
                console.log('blog data sent to server');
                postFetch(url, blogData, setError);
                clearFields();
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
                                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                                        <Form.Label className='mb-1 pt-2'>Category</Form.Label>
                                        <Form.Control
                                            required
                                            name='input4'
                                            type="text"
                                            placeholder="Family, Business, Food, ect"
                                            value={category}
                                            onChange={e => setCategory(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
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
