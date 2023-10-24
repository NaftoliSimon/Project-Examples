import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal/SignUpModal';
import IconDropdown from './LoggedInDropdown';
import DropdownComponent from '../Navbar/DropdownComponent';
import hide, { show } from '../../../data/Bootstrap/hide';
import { Button } from 'react-bootstrap';

export default function Login({ loggedIn, setLoggedIn, showLogin, setShowLogin, showSignUp, setShowSignUp, blogsArr, loggedInBlog }) {
  const icon = <IconDropdown setLoggedIn={setLoggedIn} blogsArr={blogsArr} loggedIn={loggedIn} setShowLogin={setShowLogin} loggedInBlog={loggedInBlog}/>
  const loginModal = <LoginModal show={showLogin} setShow={setShowLogin} setShowSignUp={setShowSignUp} loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin} />
  const signUpModal = <SignUpModal show={showSignUp} setShow={setShowSignUp} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
  const buttonStyle = `color-secondary-reverse px-2 nav-link`;
  return (<>
    <div className={`col d-flex flex-row-reverse p-0 ${show.lg_xl} d-none d-lg-flex`}> {/*Bigger screen display*/}
      {loggedIn && <Icon icon={icon} />}
      {!loggedIn && (<> {loginModal}  {signUpModal}</>)}

      {!loggedIn && (<>
        <Button variant="" className={buttonStyle} onClick={() => setShowLogin(true)}> Log In </Button>
        <Button variant="" className={buttonStyle} onClick={() => setShowSignUp(true)}> Sign Up </Button>
      </>)}

    </div>

    <div className={`col d-flex flex-row-reverse mt-1 p-0 ${hide.lg_xl}`}>{/*Smaller screen display*/}
      <DropdownComponent loggedIn={loggedIn} setShowSignUp={setShowSignUp} setLoggedIn={setLoggedIn}
        setShowLogin={setShowLogin} showLogin={setShowLogin} loggedInBlog={loggedInBlog} />
    </div>
  </>)
}
