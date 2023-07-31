import React from 'react';
import Button from 'react-bootstrap/Button';
import hide, {show} from '../../../../data/Bootstrap/hide';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';

export default function SignUpModalFooter({ handleClose, handleOpenLogin }) {
    return (
        <div className='ms-1 d-flex'>
            <Button type="submit" className={`button ${pillButtonSolid}`}>Sign Up</Button>
            <Button className={`button mx-2 ${pillButtonSolid}`} onClick={handleClose}>Cancel</Button>

            <div className={`me-4 ms-3 mt-1 ${hide.xs}`}> Already have an account?
                <span className='link link-color pointer ms-1' href='#' onClick={handleOpenLogin}>Sign In</span>
            </div>

            <div className={`me-4 ms-3 mt-3 ${show.xs} fs-7`}> Already have an account?
                <span className='link link-color pointer ms-1' href='#' onClick={handleOpenLogin}>Sign In</span>
            </div>
        </div>
    );
}
