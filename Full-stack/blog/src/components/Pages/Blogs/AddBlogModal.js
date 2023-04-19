import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import baseUrl from '../../../data/URLpaths';
import myPostFetch from '../../../functions/myPostFetch';

export default function AddBlogModal({ show, setShow, loggedIn, savedUpdateData = false }) { //Add or edit Blog data Modal. For edit - pass the preexisting data to update, into the "savedUpdateData" object. For add - just leave it out of the props
    let initialCompanyName;
    let initialWebsite;
    let text = 'Add';
    let url = `${baseUrl}/blogInfo`;
    if (savedUpdateData) {
        initialCompanyName = savedUpdateData.companyName;
        initialWebsite = savedUpdateData.website;
        text = 'Update';
        url += `/edit`;
    }
    const [companyName, setCompanyName] = useState(initialCompanyName || '');
    const [website, setWebsite] = useState(initialWebsite || '');

    const [validated, setValidated] = useState(false);
    if (loggedIn) {
        const { userId, firstName, lastName } = loggedIn;

        const blogData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ companyName: companyName, website: website, name: `${firstName} ${lastName}`, userId: userId })
        };
        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);

        const clearFields = () => {
            setCompanyName('');
            setWebsite('')
        }

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                console.log('blog data sent to server');
                myPostFetch(url, blogData)
                clearFields();
                handleClose();

                // event.preventDefault();
                // event.stopPropagation();
            }
            // setValidated(true)
        }
        const onKeyDown = ({ key }) => {
            if (key === 'Enter') {
                handleSubmit();
            }
        };
        return (
            <>
                {/* <div className={center}>
                <Button variant="" className='button text-uppercase fs-1' onClick={handleShow}>
                    Become A Blogger
                </Button>
            </div> */}

                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton className='bgColor-primaryLight backgroundImage-primary'>
                        <Modal.Title>{text} Your Blog Info</Modal.Title>
                    </Modal.Header>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Body className='bgColor-primaryLight backgroundImage-primary'>

                            <Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        required
                                        autoFocus
                                        type="text"
                                        placeholder="Company Name"
                                        value={companyName}
                                        onChange={e => setCompanyName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Your Website"
                                        value={website}
                                        onChange={e => setWebsite(e.target.value)}
                                        onKeyDown={onKeyDown}
                                    />
                                </Form.Group>
                            </Row>

                        </Modal.Body>
                        <Modal.Footer className='bgColor-primaryLight backgroundImage-primary'>

                            <div className='ms-1 d-flex'>
                                <Button type="submit" className={`button`}>{text}</Button>
                                <Button className='button mx-2' onClick={handleClose}>Cancel</Button>
                            </div>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}