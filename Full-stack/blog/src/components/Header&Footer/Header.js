import React, { useEffect, useState } from 'react';
import Login from './Login/Login.js';
import Navbar from '../Header&Footer/Navbar/Navbar';
import Title from '../Header&Footer/Title';
import Icon from './Navbar/Icon.js';
import center from '../../data/Bootstrap/center.js';

export default function Header({ loggedIn, setLoggedIn, showLogin, showSignUp, setShowSignUp, setShowLogin, blogsArr, loggedInBlog, switchTheme, theme }) {
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

  const login = <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} showSignUp={showSignUp} blogsArr={blogsArr} loggedInBlog={loggedInBlog} switchTheme={switchTheme} theme={theme}/>;
  const headerStyle = `container-fluid sticky-top bg-primary ps-3 pe-3 shadow-lg`;
  return (
    <>
      {/* Header for smaller screen sizes */}
      {isSmallScreen && (
        <header className={headerStyle}>
          <div className="row ps-0 pe-0">
            <Icon style={`mb-1`} />
            <Title />
            {login}
          </div>
        </header>
      )}

      {/* Header for bigger screen sizes */}
      {!isSmallScreen && (
        <header className={headerStyle}>
            <div className="row pb-1 ps-2 pe-2">
              <div className={`col ${center} p-0`}><Navbar /></div>
              <div className={`col-5 ${center} p-0`}><Title /></div>
              <div className={`col ${center} p-0`}>{login}</div>
            </div>
        </header>
      )}
    </>
  );
}
