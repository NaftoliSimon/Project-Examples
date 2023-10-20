import React, { useEffect, useRef, useState } from 'react';
import * as Bootstrap from 'react-bootstrap';
import baseUrl from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import SignUpModalFooter from './SignUpModalFooter';
import SuccessAlert from './SuccessAlert';
import DismissibleAlert from '../../../reuseable/Alert';
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

    const alertRef = useRef();

    const { firstName, lastName, email, password, retypedPassword } = fields;

    useEffect(() => {
        if (show) {
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
        if (!savedEmails || isObjectEmpty(savedEmails)) {
            setShowError(true);
            alertRef.current?.scrollIntoView({ block: 'nearest' }); //scrolls the alert error message into view, and the block: 'nearest' ensures it scrolls the modal and not the window (this line is only needed for small screens, ie phones)
            return;
        }
        const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
        if (emailAlreadyExists) {
            setTakenEmail(<span className='text-danger ps-3 '>Email is already taken</span>);
            return;
        }
        // Sign up requirements met:
        postFetch(signUpUrl, fields);
        // clearFields();
        handleClose();

        // setLoggedIn(fields); //loggin in the user directly this way causes the successAlert pop up message to not show, therefore the user is logged in by setting the session storage instead
        const ssKey = 'loggedInUser'; // session storage key
        sessionStorage.setItem(ssKey, JSON.stringify(fields)) //logs the user in while still displaying successAlert

        setSuccessfulSubmit(true); //shows a pop up success alert message (see SuccessAlert below)
    };

    const inputsStyle = attemptedSubmit ? 'exclude' : ''; //see Colors.scss "Form fields - inputs & textarea", adding 'signUp' here excludes the default input styles for all sign Up form input fields, so that the validation css takes effect
    return (<>
        <Bootstrap.Modal show={show} onHide={handleClose}>
            <Bootstrap.Modal.Header closeButton className={modalSection}>
                <Bootstrap.Modal.Title>Create an Account</Bootstrap.Modal.Title>
            </Bootstrap.Modal.Header>
            <div ref={alertRef}>
                <DismissibleAlert heading='Error' text='No Access To The Server' show={showError} setShow={setShowError} />
            </div>
            <Bootstrap.Modal.Footer className={modalSection}>
                <Bootstrap.Form noValidate validated={validated} onSubmit={handleSubmit} className={inputsStyle}>
                    <Row1 firstName={firstName} lastName={lastName} setField={setField} attemptedSubmit={attemptedSubmit} />
                    <Row2 email={email} takenEmail={takenEmail} setField={setField} />
                    <Row3 password={password} attemptedSubmit={attemptedSubmit} setField={setField} retypedPassword={retypedPassword} setPasswordMatch={setPasswordMatch} passwordMatch={passwordMatch} />
                    <Row4 retypedPassword={retypedPassword} validated={validated} setField={setField} password={password} passwordMatch={passwordMatch} setPasswordMatch={setPasswordMatch} attemptedSubmit={attemptedSubmit} />
                    <Checkbox handleClose={handleClose} checked={checked} setChecked={setChecked} attemptedSubmit={attemptedSubmit} />
                    <SignUpModalFooter handleClose={handleClose} handleOpenLogin={handleOpenLogin} showError={showError} />
                </Bootstrap.Form>
            </Bootstrap.Modal.Footer>
        </Bootstrap.Modal>
        <SuccessAlert name={`${firstName} ${lastName}`} show={successfulSubmit} hide={() => setSuccessfulSubmit(false)} clearFields={clearFields} />
    </>);
}
