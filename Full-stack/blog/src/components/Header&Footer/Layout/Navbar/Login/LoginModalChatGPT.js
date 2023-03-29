import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../../../data/URLpaths';
import myFetch from '../../../../../functions/myFetch';
import ModalBody from './LoginModal/ModalBody';
import ModalFooter from './LoginModal/ModalFooter';

export default function LoginModal({ show, setShow, setShowSignUp, loggedIn, setLoggedIn, setShowLoginPerson, showLogin: title }) {
    const modalTitle = typeof title === 'string' ? title : "Account Log In"; //showLogin (or title) is either true or a string

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [savedUser, setSavedUser] = useState({});
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    //TODO: Add icons by inputs to make it look nicer

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOpenSignUp = () => setShowSignUp(true);

    useEffect(() => {
        const url = `${baseUrl}/signUp` // Use the correct endpoint for fetching user data
        myFetch(url, setSavedUser);
    }, [])

    function handleLogin() {
        const validUser = savedUser.find(obj => obj.email === email);
        if (validUser) {
            setInvalidEmail(false);
            if (validUser.password === password) {
                setLoggedIn(validUser);
                setInvalidPassword(false);
            } else {
                setInvalidPassword(<span className='text-danger ps-3 '> Password Is Incorrect</span>)
            }
        } else {
            setInvalidEmail(<span className='text-danger ps-3 '> Invalid Email</span>)
        }
    }

    const buttonText = 'Log In'; // Define buttonText
    const handleAction = handleLogin; // Define handleAction
    const disabled = !email || !password; // Define disabled

    return (
        <>
            <Button variant=""
                className='color-secondary-reverse nav-link'
                onClick={handleShow}
                onMouseOver={() => setShowLoginPerson(true)}
                onMouseLeave={() => setShowLoginPerson(false)}
            >
                Log In
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bgColor-primaryLight'><Modal.Title>{modalTitle}</Modal.Title></Modal.Header>
                <ModalBody invalidEmail={invalidEmail} email={email} setEmail={setEmail} invalidPassword={invalidPassword}
                    setPassword={setPassword} password={password} handleLogin={handleLogin} />
                <ModalFooter handleClose={handleClose} handleOpenSignUp={handleOpenSignUp} disabled={disabled} />
            </Modal>
        </>
    );
}
