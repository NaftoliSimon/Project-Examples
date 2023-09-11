import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { pillButtonSolid } from '../../../data/Bootstrap/pillButton';

export default function ModalFooter({ handleClose, handleOpenSignUp, handleLogin, disabled }) {
    return (
        <Modal.Footer className='bgColor-primary d-flex flex-row-reverse border-0 pt-0'>
            <Button className={`button order-2 ${pillButtonSolid}`} onClick={handleLogin}>
                Log In
            </Button>
            <Button className={`button order-1 ${pillButtonSolid}`} onClick={handleClose}>
                Cancel
            </Button>
            <div className='ps-5 order-3 fw-normal'>Don't have an account?
                <span className='link link-color pointer ms-1' onClick={handleOpenSignUp}>Sign Up</span>
            </div>
        </Modal.Footer>
    );
}
