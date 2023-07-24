import React, { useEffect, useState } from 'react';
import Login from './Login/Login.js';
import Navbar from '../Header&Footer/Navbar/Navbar';
import Title from '../Header&Footer/Title';
import Icon from './Navbar/Icon.js';
import center from '../../data/Bootstrap/center.js';

export default function Header({ loggedIn, setLoggedIn, showLogin, showSignUp, setShowSignUp, setShowLogin, blogsArr }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const largeBreakpoint = 992;
  const smallerScreenWidthMax = largeBreakpoint;
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < smallerScreenWidthMax);
    window.addEventListener('resize', handleResize); // Add event listener to window resize event
    setIsSmallScreen(window.innerWidth < largeBreakpoint); // Initial check of screen size
    return () => {    // Remove event listener when component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const login = <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} showSignUp={showSignUp} blogsArr={blogsArr} />;
const headerStyle = 'sticky-top ps-3 pe-3 bgColor-primary color-secondary-reverse  shadow';
  return (
    <>
      {/* Header for smaller screen sizes */}
      {isSmallScreen && (
        <header className={headerStyle}>
          <div className="row pb-1 ps-2 pe-2">
            <Icon />
            <Title />
            {login}
          </div>
        </header>
      )}

      {/* Header for bigger screen sizes */}
      {!isSmallScreen && (
      <header className={headerStyle}>
          <div className="row pb-1 ps-2 pe-2">
            <div className={`col ${center}`}><Navbar /></div>
            <div className={`col ${center}`}><Title /></div>
            <div className={`col ${center}`}>{login}</div>
          </div>
        </header>
      )}
    </>
  );
}
