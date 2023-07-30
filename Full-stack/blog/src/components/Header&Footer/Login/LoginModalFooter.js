import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { pillButtonSolid } from '../../../data/Bootstrap/pillButton';

export default function ModalFooter({ handleClose, handleOpenSignUp, handleLogin, disabled }) {
    return (
        <Modal.Footer className='bgColor-primary d-flex flex-row-reverse border-0'>
            <Button className={`button order-3 ${pillButtonSolid}`} onClick={handleLogin}>
                Log In
            </Button>
            <Button className={`button order-2 ${pillButtonSolid}`} onClick={handleClose}>
                Cancel
            </Button>
            <div className='ps-5 order-1'>Don't have an account? <span className='link link-color pointer' onClick={handleOpenSignUp}>Sign Up</span></div>
        </Modal.Footer>
    );
}
