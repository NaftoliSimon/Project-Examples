import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row1 from './Row1';
import Row2 from './Row2';
import baseUrl from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import myPostFetch from '../../../../functions/myPostFetch'
import Row3 from './Row3';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';
import Row4 from './Row4';
import Checkbox from './Checkbox';
import postFetch from '../../../../functions/postFetch';
import Alert from '../../../Alert';
import SuccessAlert from './SuccessAlert';
import DismissibleAlert from '../../../Alert';

export default function SignUpModal({ show, setShow, setShowLogin, setLoggedIn }) {
    const emptyFormFields = { firstName: '', lastName: '', email: '', password: '', retypedPassword: '' }
    const [fields, setFields] = useState(emptyFormFields); //Form input fields

    const [savedEmails, setSavedEmails] = useState({});
    const [takenEmail, setTakenEmail] = useState(false);
    const [validated, setValidated] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false)
    const [successfulSubmit, setSuccessfulSubmit] = useState(false)
    const [showError, setShowError] = useState(false)

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
      function stopDefaults(e) {
        e.preventDefault();
            e.stopPropagation();
      }
    const handleSubmit = (e) => {
        setAttemptedSubmit(true);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            stopDefaults(e);
        } else {
            //check if data already exists in server (ie email already exists in server)
            if(isObjectEmpty(savedEmails)) { //check if there is access to database
                stopDefaults(e);
                console.log('no access to server (or no emails saved in server yet)');
                if(showError === true) {
                    setShowError(false);
                    setTimeout(() => {
                        setShowError(true)
                      }, 250); // Pause for 1/4 of a second
                } else {
                    setShowError(true);
                }
                
            }
            const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
            if (emailAlreadyExists) {
                stopDefaults(e);
                setTakenEmail(<span className='text-danger ps-3 '> Email is already taken</span>)
            } else {
                //Log in requirements met - send sign up data to database
                postFetch(url, fields);
                //close sign up modal
                clearFields();
                handleClose();

                setLoggedIn(fields); //logs user into account

                //TODO: make nice user display message
                // setSuccessfulSubmit(true);
                alert(`Account Created Successfully!!! Welcome ${firstName} ${lastName}! Click on the person icon in the top right corner of the website for your account details.`)
            }
        }
        setValidated(true);
    };
    const bgColor = 'bgColor-primary'
    return (
        <>
            <Modal show={show} onHide={handleClose}> {/* className='backgroundImage-primary' */}
                <Modal.Header closeButton className={bgColor}>
                    <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>
                <DismissibleAlert heading={'Error'} text={'No Access To The Server'} show={showError} setShow={setShowError}/>
                <Modal.Footer className={bgColor}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row1 firstName={firstName} lastName={lastName} setField={setField} />
                        <Row2 email={email} takenEmail={takenEmail} setField={setField} />
                        <Row3 password={password} attemptedSubmit={attemptedSubmit} setField={setField} />
                        <Row4 retypedPassword={retypedPassword} validated={validated} setField={setField} password={password} />
                        <Checkbox handleClose={handleClose} />

                        <div className='ms-1 d-flex'>
                            <Button type="submit" className={`button ${pillButtonSolid}`}>Sign Up</Button>
                            <Button className={`button mx-2 ${pillButtonSolid}`} onClick={handleClose}>Cancel</Button>
                            <div className='me-4 ms-3'> Already have an account?
                                <span className='link link-color pointer ms-1' href='#' onClick={handleOpenLogin}>Sign In</span>
                            </div>
                        </div>

                    </Form>
                </Modal.Footer>
            </Modal>
            <SuccessAlert name={`${firstName} ${lastName}`} show={successfulSubmit} hide={()=>setSuccessfulSubmit(false)}/>
        </>
    );
}