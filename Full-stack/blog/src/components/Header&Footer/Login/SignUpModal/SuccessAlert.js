import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';

const SuccessAlert = ({ name, show, hide }) => {
    const bgColor = 'bgColor-primary border-0';
    return (
        <Modal show={show} onHide={hide} backdrop="static" keyboard={false}>
            <Modal.Header className={bgColor} closeButton>
                <Modal.Title>Account Created Successfully!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body className={bgColor}>
                <p>
                    Welcome {name}! Click on the person icon in the top right corner of the website for your account details. You can now comment on any post.
                </p>
            </Modal.Body>
            <Modal.Footer className={bgColor}>
                <Button className={pillButtonSolid} onClick={hide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessAlert;
