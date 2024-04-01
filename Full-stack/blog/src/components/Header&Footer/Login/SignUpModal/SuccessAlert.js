import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import center from '../../../../data/Bootstrap/center';
import AlertIcon from '../../../reuseable/AlertIcon';
import { Alert } from 'react-bootstrap';

const SuccessAlert = ({ name, show, hide, clearFields }) => {
    //TODO: fix success alert to close by hitting enter key (ie get autoFocus to work on ok button, it works when you set successfulSubmit to true (signUpModal.js), but not if you use it with filling out the sign up form) see PopUpModal.js for working example

    const style = 'border-0';
    const msg = `Welcome ${name}! Click on the person icon in the top right corner of the website for your account details. You can now comment on any post.`;
    function onClose() {
        hide();
        clearFields(); //resets all the form fields (after name is done being used in success message)
        window.location.reload(); //reloads page to (set the loggedIn user from session storage and) show the loggedIn icon
    }
    const theme = JSON.parse(localStorage.getItem('theme'));

    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} data-bs-theme={theme}>
            <Alert variant='success' className='m-0'> {/* Alert makes it display with bootstrap success colors */}
                <Modal.Header className={style} closeButton>
                    <Modal.Title><AlertIcon variant={'success'} /> Account Created Successfully!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body className={style}>
                    <p>{msg}</p>
                </Modal.Body>
                <Modal.Footer className={`${style} ${center}`}>
                    <Button className={`btn btn-primary`} variant='success' onClick={onClose} autoFocus>
                        OK
                    </Button>
                </Modal.Footer>
            </Alert>
        </Modal>
    );
};

export default SuccessAlert;
