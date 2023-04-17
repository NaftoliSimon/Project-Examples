import React, { useState } from 'react';
import { BsPerson, BsPersonAdd, BsPersonCheck, BsPersonCircle, BsPersonDown, BsPersonUp } from 'react-icons/bs';
import center from '../../../../../data/Bootstrap/center';
import Icon from './Icon';
import LoginModal from './LoginModal';
// import LoginModal from './LoginModalChatGPT'
import LogOut from './LogOut';
import SignUpModal from './SignUpModal/SignUpModal';

export default function Login({ loggedIn, setLoggedIn, showLogin, setShowLogin }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignUpPerson, setShowSignUpPerson] = useState(false);
  const [showLoginPerson, setShowLoginPerson] = useState(false);
  const [showLogOutPerson, setShowLogOutPerson] = useState(false);

  const personAddIcon = <Icon icon={<BsPersonAdd size={30} />} />
  const personIcon = <Icon icon={<BsPerson size={30} />} />
  let icon = <BsPerson size={30} className={`invisible`}/>;
  if (showSignUpPerson) {
    icon = <BsPersonAdd size={30} />
  } else if (showLoginPerson) {
    icon = <BsPersonUp size={30} />
  } else if (loggedIn) {
    if (showLogOutPerson) {
      icon = <BsPersonDown size={30} />
    } else {
      // icon = <BsPersonCheck size={30} />
      icon = <BsPerson size={30} />
    }
  }
  return (<>
    <div className={`col d-flex flex-row-reverse p-0`}>
      <Icon icon={icon} />
      {!loggedIn && <LoginModal show={showLogin} setShow={setShowLogin} setShowSignUp={setShowSignUp}
        loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin}
        showSignUpPerson={showSignUpPerson} setShowSignUpPerson={setShowSignUpPerson}
        setShowLoginPerson={setShowLoginPerson}
      />}
      {!loggedIn && <SignUpModal show={showSignUp} setShow={setShowSignUp}
        setShowSignUpPerson={setShowSignUpPerson} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />}
      {loggedIn && <LogOut setLoggedIn={setLoggedIn} setShow={setShowLogin} setShowLogOutPerson={setShowLogOutPerson} />}
    </div>
  </>)
}
