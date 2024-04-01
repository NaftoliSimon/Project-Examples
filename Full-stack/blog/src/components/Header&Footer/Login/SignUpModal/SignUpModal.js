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
import { loggedInUser } from '../../../../data/storageKeys';
import bgLightOrDark from '../../../../data/Bootstrap/colors';
import usePopOut from '../../../../hooks/popOut';

const modalSection = 'border-0';
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
    const { getPopClass, handlePopOut } = usePopOut();

    const alertRef = useRef();
    const headerRef = useRef();

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
        if (attemptedSubmit && showError) {
            setShowError(false);
        }
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
            if (showError) {
                setTimeout(() => {
                    handlePopOut();
                }, 500);
            }
            setShowError(true);
            headerRef.current?.scrollIntoView({ block: 'nearest' }); //scrolls the alert error message into view, and the block: 'nearest' ensures it scrolls the modal and not the window (this line is only needed for small screens, ie phones)
            
            return;
        }
        const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
        if (emailAlreadyExists) {
            setTakenEmail(true);
            return;
        }

        // Sign up requirements met:
        postFetch(signUpUrl, fields);
        // clearFields();
        handleClose();

        // setLoggedIn(fields); //loggin in the user directly this way causes the successAlert pop up message to not show, therefore the user is logged in by setting the session storage instead

        sessionStorage.setItem(loggedInUser, JSON.stringify(fields)) //logs the user in while still displaying successAlert

        setSuccessfulSubmit(true); //shows a pop up success alert message (see SuccessAlert below)
    };

    const autofillDark = bgLightOrDark === 'text-white bg-dark' ? 'autofill-dark' : '';
    const theme = JSON.parse(localStorage.getItem('theme'));

    return (<>
        <Bootstrap.Modal show={show} onHide={handleClose} data-bs-theme={theme}>
            <div className={`rounded`}>
                <Bootstrap.Modal.Header ref={headerRef} closeButton className={modalSection}>
                    <Bootstrap.Modal.Title>Create an Account</Bootstrap.Modal.Title>
                </Bootstrap.Modal.Header>
                    <DismissibleAlert heading='Error' text='No Access To The Server' show={showError} setShow={setShowError} getPopClass={getPopClass}/>
                <Bootstrap.Modal.Footer className={modalSection}>
                    <Bootstrap.Form noValidate validated={validated} onSubmit={handleSubmit} className={``}>
                        <Row1 firstName={firstName} lastName={lastName} setField={setField} attemptedSubmit={attemptedSubmit} />
                        <Row2 email={email} takenEmail={takenEmail} setField={setField} autoFill={autofillDark} />
                        <Row3 password={password} attemptedSubmit={attemptedSubmit} setField={setField} retypedPassword={retypedPassword} setPasswordMatch={setPasswordMatch} passwordMatch={passwordMatch} autoFill={autofillDark} />
                        <Row4 retypedPassword={retypedPassword} validated={validated} setField={setField} password={password} passwordMatch={passwordMatch} setPasswordMatch={setPasswordMatch} attemptedSubmit={attemptedSubmit} autoFill={autofillDark} />
                        <Checkbox handleClose={handleClose} checked={checked} setChecked={setChecked} attemptedSubmit={attemptedSubmit} />
                        <SignUpModalFooter handleClose={handleClose} handleOpenLogin={handleOpenLogin} theme={theme} showError={showError} />
                    </Bootstrap.Form>
                </Bootstrap.Modal.Footer>
            </div>
        </Bootstrap.Modal>
        <SuccessAlert name={`${firstName} ${lastName}`} show={successfulSubmit} hide={() => setSuccessfulSubmit(false)} clearFields={clearFields} />
    </>);
}
