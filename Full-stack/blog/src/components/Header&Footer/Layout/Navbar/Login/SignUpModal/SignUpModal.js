import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, Route, useNavigate } from 'react-router-dom';
import Row1 from './Row1';
import Row2 from './Row2';
import baseUrl from '../../../../../../data/URLpaths';
import myFetch from '../../../../../../functions/myFetch';
import myPostFetch from '../../../../../../functions/myPostFetch'

export default function SignUpModal({ show, setShow, setShowLogin }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');
    const [savedEmails, setSavedEmails] = useState({});

    const [validated, setValidated] = useState(false);

    const url = `${baseUrl}/signUp`;
    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
    };


    useEffect(() => {
        myFetch(url, setSavedEmails);
        // const { savedEmails } = savedEmails;
        // if (savedEmails) {
        //     console.log('savedEmails:', savedEmails);
        //     // alert(savedEmails);
        // }
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

    const navigate = useNavigate()
    const navigateToTermsAndConditions = () => navigate(`/termsandconditions`)
    function goToTermsAndConditionsPage() {
        handleClose();
        navigateToTermsAndConditions();
    }

    const passwordMsg = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            //check if data already exists in server (ie email already exists in server)
            const emailAlreadyExists = savedEmails.some(obj => obj.email === email);
            if (emailAlreadyExists) {
                alert('Email already has an account associated with it.')
            } else {
                // console.log('send data to server');
                 myPostFetch(url, headers);
                 //close sign up modal
                 clearFields();
                 handleClose();
                 //log in to user account
            }
            
        }
        setValidated(true);

    };
    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        // setValidated(false);
        console.log('Validated:', validated);
        if (passwordValue.length > 0) {
            const validPassword = validatePassword(passwordValue);
            if (validPassword) {
                event.target.setCustomValidity('');
            } else {
                event.target.setCustomValidity('Please provide a valid password.');
            }
        }
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
            <Button variant="" className='color-secondary-reverse nav-link' onClick={handleShow}>
                Sign Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bgColor-primaryLight'>
                    <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='bgColor-primaryLight'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row1 firstName={firstName} lastName={lastName} email={email}
                            setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} />

                        <Row2 password={password} retypedPassword={retypedPassword} passwordMsg={passwordMsg}
                            handlePasswordChange={handlePasswordChange} handleRetypedPasswordChange={handleRetypedPasswordChange} />

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label={<div>I accept and have not read the <span className='tac-link fst-italic' onClick={goToTermsAndConditionsPage}>terms and conditions</span></div>}
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