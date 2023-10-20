import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';
import center from '../../../../data/Bootstrap/center';

const SuccessAlert = ({ name, show, hide, clearFields }) => {
    //TODO: fix success alert to close by hitting enter key (ie get autoFocus to work on ok button, it works when you set successfulSubmit to true (signUpModal.js), but not if you use it with filling out the sign up form) see PopUpModal.js for working example
    // console.log('name:', name);
    const bgColor = 'bgColor-primary border-0';
    const msg = `Welcome ${name}! Click on the person icon in the top right corner of the website for your account details. You can now comment on any post.`;
    function onClose() {
        hide();
        clearFields(); //resets all the form fields (after name is done being used in success message)
        window.location.reload(); //reloads page to (set the loggedIn user from session storage and) show the loggedIn icon
    }
    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header className={bgColor} closeButton>
                <Modal.Title>Account Created Successfully!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body className={bgColor}>
                <p>{msg}</p>
            </Modal.Body>
            <Modal.Footer className={`${bgColor} ${center}`}>
                <Button className={pillButtonSolid} onClick={onClose} autoFocus>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessAlert;
