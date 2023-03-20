import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import baseUrl from '../../../../data/URLpaths';
import myPostFetch from '../../../../functions/myPostFetch';

export default function AddPostModal({ show, setShow, loggedIn, savedUpdateData = false }) { //Add or edit Post data Modal. For edit - pass the preexisting data to update, into the "savedUpdateData" object. For add - just leave it out of the props
    let initialTitle;
    let initialBody;
    let text = 'Add';
    let url = `${baseUrl}/postInfo`;
    if (savedUpdateData) {
        initialTitle = savedUpdateData.title;
        initialBody = savedUpdateData.body;
        text = 'Update';
        url += `/edit`;
    }
    const [title, setTitle] = useState(initialTitle || '');
    const [body, setBody] = useState(initialBody || '');

    const [validated, setValidated] = useState(false);
    const { userId } = loggedIn;

    const blogData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body, userId: userId })
    };
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const clearFields = () => {
        setTitle('');
        setBody('')
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log('post data sent to server');
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
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton className='bgColor-primaryLight'>
                    <Modal.Title>{text} Your Post Info</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body className='bgColor-primaryLight'>

                        <Row>
                            {/* <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    autoFocus
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </Form.Group> */}
                            <Form.Group as={Col} md="12" controlId="validationCustom02" className='mt-1'>
                                {/* <Form.Label>Your Post</Form.Label>
                                <InputGroup>
                                    {/ * <InputGroup.Text></InputGroup.Text> * /}
                                    <Form.Control
                                        as="textarea"
                                        aria-label="With textarea"
                                        required
                                        type="text"
                                        placeholder=""
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                        onKeyDown={onKeyDown}
                                    />
                                </InputGroup> */}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Post Title"
                                    className="mb-3"
                                >
                                    <Form.Control required
                                        autoFocus
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Post">
                                    <Form.Control
                                        as="textarea"
                                        aria-label="With textarea"
                                        required
                                        type="text"
                                        placeholder="Post"
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                        onKeyDown={onKeyDown} />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer className='bgColor-primaryLight'>

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