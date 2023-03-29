import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row1 from './Row1';
import Row2 from './Row2';
import baseUrl from '../../../../../../data/URLpaths';
import myFetch from '../../../../../../functions/myFetch';
import myPostFetch from '../../../../../../functions/myPostFetch'
import useCustomNav from '../../../../../../hooks/navigate';
import Icon from '../Icon';
import { BsPerson, BsPersonAdd, BsPersonPlus } from 'react-icons/bs';

export default function SignUpModal({ show, setShow, setShowLogin, setLoggedIn, setShowSignUpPerson }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');

    const [savedEmails, setSavedEmails] = useState({});
    const [takenEmail, setTakenEmail] = useState(false);
    const [validated, setValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);
    // const [showSignUpPerson, setShowSignUpPerson] = useState(false);

    //TODO: Add show hide password icon/button
    //TODO: Add icons by inputs to make it look nicer

    const passwordMsg = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."

    const url = `${baseUrl}/signUp`;
    const signUpData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
    };
    useEffect(() => {
        myFetch(url, setSavedEmails);
    }, [])

    const handleClose = () => {
        setShow(false)
        // clearFields();
    };
    const handleShow = () => setShow(true);

    const handleOpenLogin = () => {
        handleClose();
        setShowLogin(true);
    }
    const clearFields = () => {
        setFirstName('');
        setLastName('')
        setEmail('');
        setPassword('');
        setRetypedPassword('');
    }

    const navigate = useCustomNav()
    const navigateToTermsAndConditions = () => navigate(`/termsandconditions`, true)
    function goToTermsAndConditionsPage() {
        handleClose();
        navigateToTermsAndConditions();
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            //check if data already exists in server (ie email already exists in server)
            const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
            if (emailAlreadyExists) {
                event.preventDefault();
                event.stopPropagation();
                setTakenEmail(<span className='text-danger ps-3 '> Email is already taken</span>)
            } else {
                //Log in requirements met - send sign up data to database
                myPostFetch(url, signUpData);
                //close sign up modal
                clearFields();
                handleClose();

                //TODO: log in to user account 
                alert('Sign Up Successful!!! You may now log in. Just click "Log In" in the top right corner of the website.')

            }

        }
        setValidated(true);

    };
    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        // setValidated(false);
        if (passwordValue.length > 0) {
            const validPassword = validatePassword(passwordValue);
            if (validPassword) {
                event.target.setCustomValidity('');
                setPasswordValidated(true);
            } else {
                event.target.setCustomValidity('Please provide a valid password.');
                setPasswordValidated(false);
            }
        } else setPasswordValidated(false);
    }
    const validatePassword = (password) => {
        // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        return passwordRegex.test(password);
    }
    const handleRetypedPasswordChange = (event) => {
        const retypedPasswordValue = event.target.value;
        setRetypedPassword(retypedPasswordValue);
        // setValidated(false);
        if (retypedPasswordValue.length > 0 && password !== retypedPasswordValue) {
            event.target.setCustomValidity('Passwords do not match.');
        } else {
            event.target.setCustomValidity('');
        }
    }
    return (
        <>
            <Button variant=""
                className='color-secondary-reverse nav-link'
                onClick={handleShow}
                onMouseOver={() => setShowSignUpPerson(true)}
                onMouseLeave={() => setShowSignUpPerson(false)}
            >
                Sign Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bgColor-primaryLight'>
                    <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='bgColor-primaryLight'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row1 firstName={firstName} lastName={lastName} email={email} takenEmail={takenEmail}
                            setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} />

                        <Row2 password={password} retypedPassword={retypedPassword} passwordMsg={passwordMsg}
                            validated={validated} passwordValidated={passwordValidated}
                            handlePasswordChange={handlePasswordChange} handleRetypedPasswordChange={handleRetypedPasswordChange} />

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label={<div>I accept and have not read the <span
                                    className='tac-link fst-italic text-decoration-underline pointer'
                                    onClick={goToTermsAndConditionsPage}>terms and conditions</span>
                                </div>}
                                // label={<div>I accept and have not read the <Link to={`/termsandconditions`} onClick={handleClose}>terms and conditions</Link></div>}
                                feedback="You must accept before submitting"
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <div className='ms-1 d-flex'>
                            <Button type="submit" className={`button`}>Sign Up</Button>
                            <Button className='button mx-2' onClick={handleClose}>Cancel</Button>
                            <div className='me-4 ms-3'> Already have an account?
                                <a className='link ms-1' href='#' onClick={handleOpenLogin}>Sign In</a>
                            </div>
                        </div>
                    </Form>
                </Modal.Footer>
            </Modal>
        </>
    );
}