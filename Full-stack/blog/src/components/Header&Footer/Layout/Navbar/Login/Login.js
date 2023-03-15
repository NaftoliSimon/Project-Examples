import React, { useState } from 'react';
import LoginModal from './LoginModal';
import LogOut from './LogOut';
import SignUpModal from './SignUpModal/SignUpModal';

export default function Login({ loggedIn, setLoggedIn, showLogin, setShowLogin }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className={`col d-flex flex-row-reverse p-0`}>
      {!loggedIn && <LoginModal show={showLogin} setShow={setShowLogin} setShowSignUp={setShowSignUp}
        loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin}/>}
      {!loggedIn && <SignUpModal show={showSignUp} setShow={setShowSignUp} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn}/>}
      {loggedIn && <LogOut setLoggedIn={setLoggedIn} setShow={setShowLogin}/>}
    </div>
  )
}
