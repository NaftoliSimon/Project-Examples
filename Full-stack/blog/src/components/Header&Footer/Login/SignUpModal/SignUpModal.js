import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row1 from './Row1';
import Row2 from './Row2';
import baseUrl from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import Row3 from './Row3';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';
import Row4 from './Row4';
import Checkbox from './Checkbox';
import postFetch from '../../../../functions/postFetch';
import SuccessAlert from './SuccessAlert';
import DismissibleAlert from '../../../Alert';
import hide, { show as showSize } from '../../../../data/Bootstrap/hide';

export default function SignUpModal({ show, setShow, setShowLogin, setLoggedIn }) {
    const emptyFormFields = { firstName: '', lastName: '', email: '', password: '', retypedPassword: '' }
    const [fields, setFields] = useState(emptyFormFields); //Form input fields

    const [savedEmails, setSavedEmails] = useState({});
    const [takenEmail, setTakenEmail] = useState(false);
    const [validated, setValidated] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false)
    const [successfulSubmit, setSuccessfulSubmit] = useState(false)
    const [showError, setShowError] = useState(false)
    const [passwordMatch, setPasswordMatch] = useState(true);

    const setField = (fieldKeyAsString, value) => setFields({ ...fields, [fieldKeyAsString]: value })
    const { firstName, lastName, email, password, retypedPassword } = fields;

    const url = `${baseUrl}/signUp`;
    useEffect(() => { myFetch(url, setSavedEmails) }, [])

    const handleClose = () => setShow(false);
    const clearFields = () => setFields(emptyFormFields);

    const handleOpenLogin = () => {
        handleClose();
        setShowLogin(true);
    }

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setAttemptedSubmit(true);
        setValidated(true);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation(); // Stop event propagation to prevent further validation checks
            setShowError(true); // Show the error message for form validation failure
            return; // Exit the function, as form validation failed
        }
    
        // Check if data already exists in server (i.e., email already exists in the server)
        if (isObjectEmpty(savedEmails)) {
            console.log('No access to server (or no emails saved in the server yet)');
            setShowError(true); // Show the error message for no access to the server
            return; // Exit the function, as no further actions are needed
        }
    
        const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
        if (emailAlreadyExists) {
            setTakenEmail(<span className='text-danger ps-3 '>Email is already taken</span>);
            setShowError(true); // Show the error message for email already taken
            return; // Exit the function, as no further actions are needed
        }
    
        // Sign up requirements met:
        postFetch(url, fields); // Send sign-up data to the database
        clearFields();
        handleClose(); // Close the sign-up modal
        setLoggedIn(fields); // Log the user into the new account
        setSuccessfulSubmit(true); // Show SuccessAlert (see component below)
    };
    
    const modalSection = 'bgColor-primary border-0';
    return (
        <>
            <Modal show={show} onHide={handleClose}> {/* className='backgroundImage-primary' */}
                <Modal.Header closeButton className={modalSection}>
                    <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>
                <DismissibleAlert heading={'Error'} text={'No Access To The Server'} show={showError} setShow={setShowError} />
                <Modal.Footer className={modalSection}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row1 firstName={firstName} lastName={lastName} setField={setField} />
                        <Row2 email={email} takenEmail={takenEmail} setField={setField} />
                        <Row3 password={password} attemptedSubmit={attemptedSubmit} setField={setField} retypedPassword={retypedPassword} setPasswordMatch={setPasswordMatch} />
                        <Row4 retypedPassword={retypedPassword} validated={validated} setField={setField} password={password} passwordMatch={passwordMatch} setPasswordMatch={setPasswordMatch} attemptedSubmit={attemptedSubmit} />
                        <Checkbox handleClose={handleClose} />

                        <div className='ms-1 d-flex'>
                            <Button type="submit" className={`button ${pillButtonSolid}`}>Sign Up</Button>
                            <Button className={`button mx-2 ${pillButtonSolid}`} onClick={handleClose}>Cancel</Button>
                            <div className={`me-4 ms-3 ${hide.xs}`}> Already have an account?
                                <span className='link link-color pointer ms-1' href='#' onClick={handleOpenLogin}>Sign In</span>
                            </div>
                            <div className={`me-4 ms-3 pt-1 ${showSize.xs} fs-7 text-end`}> Already have an account?
                                <span className='link link-color pointer ms-1' href='#' onClick={handleOpenLogin}>Sign In</span>
                            </div>
                        </div>
                    </Form>
                </Modal.Footer>
            </Modal>
            <SuccessAlert name={`${firstName} ${lastName}`} show={successfulSubmit} hide={() => setSuccessfulSubmit(false)} />
        </>
    );
}