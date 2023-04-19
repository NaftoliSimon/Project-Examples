import React, { useState } from 'react';
import { BsPerson, BsPersonAdd, BsPersonCheck, BsPersonCircle, BsPersonDown, BsPersonUp } from 'react-icons/bs';
import Icon from './Icon';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal/SignUpModal';
import IconDropdown from './LoggedInDropdown';

export default function Login({ loggedIn, setLoggedIn, showLogin, setShowLogin, blogsArr }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignUpPerson, setShowSignUpPerson] = useState(false);
  const [showLoginPerson, setShowLoginPerson] = useState(false);
  const [showLogOutPerson, setShowLogOutPerson] = useState(false);

  let icon = <BsPersonCircle size={30} className={`invisible`} />;
  if (loggedIn) {
    if (showLogOutPerson) {
      icon = <div className='bg-secondary rounded-circle'><BsPersonCircle size={30} /></div>
    } else {
      // icon = <div className='bg-secondary rounded-circle'><BsPersonCircle size={30} /></div>
      icon = <IconDropdown setLoggedIn={setLoggedIn} blogsArr={blogsArr} loggedIn={loggedIn}/>
    }
  }
  return (<>
    <div className={`col d-flex flex-row-reverse p-0`}>
      {loggedIn && <Icon icon={icon} />}
      {!loggedIn && <LoginModal show={showLogin} setShow={setShowLogin} setShowSignUp={setShowSignUp}
        loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin}
        showSignUpPerson={showSignUpPerson} setShowSignUpPerson={setShowSignUpPerson}
        setShowLoginPerson={setShowLoginPerson}
      />}
      {!loggedIn && <SignUpModal show={showSignUp} setShow={setShowSignUp}
        setShowSignUpPerson={setShowSignUpPerson} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />}
    </div>
  </>)
}
