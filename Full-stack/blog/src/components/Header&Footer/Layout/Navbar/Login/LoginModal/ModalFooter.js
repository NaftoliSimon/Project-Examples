import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ModalFooter({ handleClose, handleOpenSignUp, handleLogin, disabled }) {
    return (
        // <Modal.Footer className='bgColor-primaryLight'>
        //     <div className='bgColor-primaryLight'>
        //         {/* <div className="d-grid gap-2">
        //     <Button variant="primary" onClick={handleAction} disabled={disabled}>
        //       {buttonText}
        //     </Button>
        //   </div> */}
        //         <div className='ms-1 d-flex'>
        //             <Button type="submit" className={`button`} disabled={disabled}>Sign Up</Button>
        //             <Button className='button mx-2' onClick={handleClose}>Cancel</Button>
        //             <div className='me-4 ms-3'> Don't have an account?
        //                 <a className='link ms-1' href='#' onClick={handleOpenSignUp}>Sign In</a>
        //             </div>
        //         </div>
        //     </div>
        // </Modal.Footer>
        <Modal.Footer className='bgColor-primaryLight d-flex flex-row-reverse backgroundImage-primary'>
            <Button className={'button order-3'} onClick={handleLogin}>
                Log In
            </Button>
            <Button className='button order-2' onClick={handleClose}>
                Cancel
            </Button>
            <div className='ps-5 order-1'>Don't have an account? <a className='link pointer' onClick={handleOpenSignUp}>Sign Up</a></div>
        </Modal.Footer>
    );
}
