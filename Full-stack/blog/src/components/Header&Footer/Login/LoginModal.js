import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../data/URLpaths';
import myFetch from '../../../functions/myFetch';
import ModalBody from './LoginModalBody';
import ModalFooter from './LoginModalFooter';
import DismissibleAlert from '../../Alert';
import PopUpAlert from '../../PopUpAlert';

export default function LoginModal({ show, setShow, setShowSignUp, setLoggedIn, showLogin: title }) {
  const modalTitle = typeof title === 'string' ? title : "Account Log In"; //showLogin (or title) is either true or a string.

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [savedUser, setSavedUser] = useState({});
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpenSignUp = () => {
    handleClose();
    setShowSignUp(true);
  }
  const url = `${baseUrl}/signUp`;
  useEffect(() => {
    myFetch(url, setSavedUser);
  }, []);

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function handleLogin() {
    if (isObjectEmpty(savedUser)) {
      //TODO: show pop up error message
      if (showError === true) {
        setShowError(false);
        setTimeout(() => {
          setShowError(true)
        }, 250); // Pause for 1/4 of a second
      } else {
        setShowError(true);
      }
      console.log('No Access to server');
    }
    else if (invalidPassword || invalidEmail) {
      // Execute with a delay if either invalidPassword or invalidEmail is false
      setInvalidEmail(false);
      setInvalidPassword(false);
      setTimeout(() => {
        executeLogin();
      }, 250); // Pause for 1/4 of a second
    } else {
      // Execute immediately if both invalidPassword and invalidEmail are true
      executeLogin();
    }
  }

  function executeLogin() {
    const validUser = savedUser.find(obj => obj.email === email);
    if (validUser) {
      setInvalidEmail(false);
      if (validUser.password === password) {
        setLoggedIn(validUser);
        setInvalidPassword(false);
        setShow(false);
      } else {
        setInvalidPassword(true);
      }
    } else {
      setInvalidEmail(true);
    }
  }

  const disabled = !email || !password;

  return (<>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className='bgColor-primary border-0'>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <DismissibleAlert heading={'Error'} text={'No Access To The Server'} show={showError} setShow={setShowError} />
      <ModalBody
        invalidEmail={invalidEmail}
        email={email}
        setEmail={setEmail}
        invalidPassword={invalidPassword}
        setPassword={setPassword}
        password={password}
        handleLogin={handleLogin}
        setInvalidPassword={setInvalidPassword}
        setInvalidEmail={setInvalidEmail}
      />
      <ModalFooter
        handleClose={handleClose}
        handleOpenSignUp={handleOpenSignUp}
        handleLogin={handleLogin}
        disabled={disabled}
      />
    </Modal>
    {/* <PopUpAlert show={showError} onHide={() => setShowError(false)} /> */}
  </>
  );
}
