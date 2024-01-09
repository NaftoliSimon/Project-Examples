import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ModalFooter({ handleClose, handleOpenSignUp, handleLogin }) {
    return (
        <Modal.Footer className='d-flex flex-row-reverse border-0 pt-0'>
            <Button className={`btn btn-primary order-2`} onClick={handleLogin}>
                Log In
            </Button>
            <Button className={`btn btn-primary order-1`} onClick={handleClose}>
                Cancel
            </Button>
            <div className='ps-5 order-3 fw-normal'>Don't have an account?
                <span className='link link-primary fw-bold pointer ms-1' onClick={handleOpenSignUp}>Sign Up</span>
            </div>
        </Modal.Footer>
    );
}
