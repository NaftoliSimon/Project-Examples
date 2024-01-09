import React from 'react';
import Button from 'react-bootstrap/Button';
import hide, { show } from '../../../../data/Bootstrap/hide';
import isMobile from '../../../../data/isMobile';

export default function SignUpModalFooter({ handleClose, handleOpenLogin, showError }) {
    // const primaryLinkStyle = `link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`;
    const text = `Already have an account?`;
    const SignInLink = <a className='link link-primary fw-bold pointer ms-1' href='#' onClick={handleOpenLogin}>Sign In</a>
    return (<>
        <div className='ms-1 d-flex'>
            {/* {isMobile ?  */}
            <Button type="submit" className={`btn btn-primary mx-2`}>Sign Up</Button> 
            {/* : */}
             {/* <Button type="submit" disabled={showError} className={`btn btn-primary mx-2`}>Sign Up</Button> } */}
            <Button className={`btn btn-primary`} onClick={handleClose}>Cancel</Button>
            <div className={`me-4 ms-3 mt-1 ${hide.xs}`}>{text} {SignInLink}</div>
        </div>

        <div className={`me-4 ms-3 mt-3 fw-normal ${show.xs}`}>{text} {SignInLink}</div>
    </>);
}
