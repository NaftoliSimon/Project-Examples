import React, { useEffect, useState } from 'react';
import * as Bootstrap from 'react-bootstrap';
import baseUrl from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import SignUpModalFooter from './SignUpModalFooter';
import SuccessAlert from './SuccessAlert';
import DismissibleAlert from '../../../Alert';
import Checkbox from './Checkbox';
import postFetch from '../../../../functions/postFetch';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';

const modalSection = 'bgColor-primary border-0';
const emptyFormFields = { firstName: '', lastName: '', email: '', password: '', retypedPassword: '' };
const signUpUrl = `${baseUrl}/signUp`;

export default function SignUpModal({ show, setShow, setShowLogin, setLoggedIn }) {
    const [fields, setFields] = useState(emptyFormFields);
    const [savedEmails, setSavedEmails] = useState({});
    const [takenEmail, setTakenEmail] = useState(false);
    const [validated, setValidated] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
    const [successfulSubmit, setSuccessfulSubmit] = useState(false);
    const [showError, setShowError] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [checked, setChecked] = useState(false); //for the terms and conditions checkbox

    const { firstName, lastName, email, password, retypedPassword } = fields;

    useEffect(() => { 
        if(show) {
            myFetch(signUpUrl, setSavedEmails);
        }
    }, [show]);
    // useEffect(() => { myFetch(signUpUrl, setSavedEmails)}, []);

    const setField = (fieldKeyAsString, value) => setFields({ ...fields, [fieldKeyAsString]: value });
    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
    const handleClose = () => setShow(false);
    const clearFields = () => setFields(emptyFormFields);
    const handleOpenLogin = () => {
        handleClose();
        setShowLogin(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAttemptedSubmit(true);
        setValidated(true);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }
        // myFetch(signUpUrl, setSavedEmails, () => setShowError(true));
        // if(showError && isObjectEmpty(savedEmails)) { //if there are no save emails and failed to fetch saved emails (both are needed, saved emails because the user could be the first user signing up, and show error to stop the next line of code form executing 'savedEmails.some' if savedEmails is undefined )
        //     return
        // }
        if (isObjectEmpty(savedEmails)) {
            setShowError(true);
            return;
        }
        const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
        if (emailAlreadyExists) {
            setTakenEmail(<span className='text-danger ps-3 '>Email is already taken</span>);
            return;
        }
        // Sign up requirements met:
        postFetch(signUpUrl, fields);
        clearFields();
        handleClose();
        setLoggedIn(fields);
        // setSuccessfulSubmit(true); //TODO: make SuccessAlert (see below) appear instead of the following alert:
        alert(`Welcome ${firstName} ${lastName}! Click on the person icon in the top right corner of the website for your account details. You can now comment on any post.`)
    };

    return (<>
        <Bootstrap.Modal show={show} onHide={handleClose}>
            <Bootstrap.Modal.Header closeButton className={modalSection}>
                <Bootstrap.Modal.Title>Create an Account</Bootstrap.Modal.Title>
            </Bootstrap.Modal.Header>
            <DismissibleAlert heading='Error' text='No Access To The Server' show={showError} setShow={setShowError} />
            <Bootstrap.Modal.Footer className={modalSection}>
                <Bootstrap.Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row1 firstName={firstName} lastName={lastName} setField={setField} />
                    <Row2 email={email} takenEmail={takenEmail} setField={setField} />
                    <Row3 password={password} attemptedSubmit={attemptedSubmit} setField={setField} retypedPassword={retypedPassword} setPasswordMatch={setPasswordMatch} passwordMatch={passwordMatch}/>
                    <Row4 retypedPassword={retypedPassword} validated={validated} setField={setField} password={password} passwordMatch={passwordMatch} setPasswordMatch={setPasswordMatch} attemptedSubmit={attemptedSubmit} />
                    <Checkbox handleClose={handleClose} checked={checked} setChecked={setChecked}/>
                    <SignUpModalFooter handleClose={handleClose} handleOpenLogin={handleOpenLogin} showError={showError}/>
                </Bootstrap.Form>
            </Bootstrap.Modal.Footer>
        </Bootstrap.Modal>
        <SuccessAlert name={`${firstName} ${lastName}`} show={successfulSubmit} hide={() => setSuccessfulSubmit(false)} />
    </>);
}
