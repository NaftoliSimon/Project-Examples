import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../data/URLpaths';
import myFetch from '../../../functions/myFetch';
import ModalBody from './LoginModalBody';
import ModalFooter from './LoginModalFooter';
import DismissibleAlert from '../../reuseable/Alert';
import PopUpAlert from '../../reuseable/PopUpAlert';
import scrollToElem from '../../../functions/scrollToElem';
import bgLightOrDark from '../../../data/Bootstrap/colors';
import usePopOut from '../../../hooks/popOut';

export default function LoginModal({ show, setShow, setShowSignUp, setLoggedIn, showLogin: title }) {
  const modalTitle = typeof title === 'string' ? title : "Account Log In"; //showLogin (or title) is either true or a string.

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [savedUser, setSavedUser] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [showError, setShowError] = useState(false);
  const { getPopClass, handlePopOut } = usePopOut();
  const { getPopClass: getPopPassword, handlePopOut: handlePopPassword } = usePopOut();
  const { getPopClass: getPopEmail, handlePopOut: handlePopEmail } = usePopOut();

  const handleClose = () => setShow(false);
  const handleOpenSignUp = () => {
    handleClose();
    setShowSignUp(true);
  }
  const url = `${baseUrl}/login`;
  useEffect(() => {
    if (show) {
      myFetch(`${baseUrl}/signUp`, setSavedUser);
    }
  }, [show, url]);

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function handleLogin() {
    // myFetch(`${url}/${email}/${password}`, setPasswordMatch);

    if (!savedUser || isObjectEmpty(savedUser)) { //Show pop up error message - see SignUpModal
      if (showError === true) {
        handlePopOut();
      } else {
        setShowError(true);
      }
    } else {
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
        if (invalidPassword) { //only do pop out effect if alert is already showing
          handlePopPassword();
        }
        setInvalidPassword(true);
      }
    } else {
      if (invalidEmail) {
        handlePopEmail();
      }
      setInvalidPassword(false) //this line makes it so that both error alerts don't show at the same time (ie, if the incorrect email alert is showing, and then the email is changed to incorrect as well)
      setInvalidEmail(true);
    }
  }

  const disabled = !email || !password;
  const theme = JSON.parse(localStorage.getItem('theme'));

  return (<>
    <Modal show={show} onHide={handleClose} data-bs-theme={theme}>
      <Modal.Header closeButton className='border-0'>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>

      <DismissibleAlert heading={'Error'} text={'No Access To The Server'} show={showError} setShow={setShowError} getPopClass={getPopClass} />
      <DismissibleAlert heading={'Invalid Email'} text={'The email you have entered does not exist'} show={invalidEmail} setShow={setInvalidEmail} getPopClass={getPopEmail} />
      <DismissibleAlert heading={'Incorrect Password'} text={'The password you have entered is incorrect'} show={invalidPassword} setShow={setInvalidPassword} getPopClass={getPopPassword} />
      
      <ModalBody email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}/>
      <ModalFooter handleClose={handleClose} handleOpenSignUp={handleOpenSignUp} handleLogin={handleLogin} theme={theme} />
    </Modal>
  </>
  );
}
