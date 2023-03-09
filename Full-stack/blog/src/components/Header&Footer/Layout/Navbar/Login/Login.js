import React, { useState } from 'react';
import LoginModal from './LoginModal';
import LogOut from './LogOut';
import SignUpModal from './SignUpModal/SignUpModal';

export default function Login({ loggedIn, setLoggedIn }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  //TODO: only show one of the modals below depending on if the user is logged in or not
  // show logout modal if logged in
  return (
    <div className={`col d-flex flex-row-reverse p-0`}>
      {!loggedIn && <LoginModal show={showLogin} setShow={setShowLogin} setShowSignUp={setShowSignUp}
        loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
      {!loggedIn && <SignUpModal show={showSignUp} setShow={setShowSignUp} setShowLogin={setShowLogin} />}
      {loggedIn && <LogOut setLoggedIn={setLoggedIn} setShow={setShowLogin}/>}
    </div>
  )
}
