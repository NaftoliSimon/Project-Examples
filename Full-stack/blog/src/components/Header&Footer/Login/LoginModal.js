import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../data/URLpaths';
import myFetch from '../../../functions/myFetch';
import ModalBody from './LoginModalBody';
import ModalFooter from './LoginModalFooter';
import DismissibleAlert from '../../Alert';

export default function LoginModal({ show, setShow, setShowSignUp, setLoggedIn, showLogin: title }) {
    const modalTitle = typeof title === 'string' ? title : "Account Log In"; //showLogin (or title) is either true or a string.

    const [email, setEmail] = useState(''); //TODO: combine email and password state similar to form fields in Sign up modal?
    const [password, setPassword] = useState('');
    const [savedUser, setSavedUser] = useState({});
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpenSignUp = () => {
        handleClose();
        setShowSignUp(true);
    }
    const url = `${baseUrl}/signUp`
    useEffect(() => {
        myFetch(url, setSavedUser); //TODO: combine this with Sign up's fetch?
    }, [])

    function handleLogin() {
        const validUser = savedUser.find(obj => obj.email === email);
        if (validUser) {
            setInvalidEmail(false);
            if (validUser.password === password) {
                setLoggedIn(validUser);
                setInvalidPassword(false);
                setShow(false);
            } else {
                setInvalidPassword(true)//<span className='text-danger ps-3 '> Password Is Incorrect</span>
            }
            
        } else {
            setInvalidEmail(true)
        } //TODO: Switch above code to be more similar to the following code:
        // if (validUser) {
        //     if (validUser.password === password) {
        //       setLoggedIn(validUser);
        //       setErrorMessage('');
        //       setShow(false);
        //     } else {
        //       setErrorMessage('Password is incorrect');
        //     }
        //   } else {
        //     setErrorMessage('Invalid email');
        //   }
    }

    const disabled = !email || !password; // Define disabled
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='bgColor-primary backgroundImage-primary'><Modal.Title>{modalTitle}</Modal.Title></Modal.Header>

            <ModalBody invalidEmail={invalidEmail} email={email} setEmail={setEmail} invalidPassword={invalidPassword} 
                setPassword={setPassword} password={password} handleLogin={handleLogin} 
                setInvalidPassword={setInvalidPassword} setInvalidEmail={setInvalidEmail} />

            <ModalFooter handleClose={handleClose} handleOpenSignUp={handleOpenSignUp} handleLogin={handleLogin} disabled={disabled} />
        </Modal>
    );
}
