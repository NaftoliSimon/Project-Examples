import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';
import center from '../../../../data/Bootstrap/center';

const SuccessAlert = ({ name, show, hide }) => {
    //TODO: fix success alert to show the user's name when they sign up
    console.log('name:', name);
    const bgColor = 'bgColor-primary border-0';
    function onClose() {
        hide();
        window.location.reload(); //reloads page to show loggedIn icon
    }
    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header className={bgColor} closeButton>
                <Modal.Title>Account Created Successfully!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body className={bgColor}>
                <p>
                    Welcome {name}! Click on the person icon in the top right corner of the website for your account details. You can now comment on any post.
                </p>
            </Modal.Body>
            <Modal.Footer className={`${bgColor} ${center}`}>
                <Button autoFocus className={pillButtonSolid} onClick={onClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessAlert;
