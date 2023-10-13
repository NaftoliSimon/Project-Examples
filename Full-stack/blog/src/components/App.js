import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss';
import '../Styles/Colors.scss';
import '../Styles/Links.scss';
import '../Styles/InputIcons.scss';
import '../Styles/Buttons.scss';
import BlogList from './Pages/BlogList/BlogList';
import Header from './Header&Footer/Header';
import Blog from './Pages/Blog/Blog';
import myFetch from '../functions/myFetch';
import FourOhFour from './Pages/FourOhFour';
import About from './Pages/About';
import Footer from './Header&Footer/Footer';
import TermsAndConditions from './Pages/TermsAndConditions';
import baseUrl, { links } from '../data/URLpaths';
import PopUpAlert from './reuseable/PopUpAlert';

function App() {
  // Constants
  const blogsLink = `${baseUrl}/blogs`;
  const ssKey = 'loggedInUser'; // session storage key
  const { blogs: home, about } = links;
  const alertMsg = 'For full features of the website please connect to the server. The website will be limited in its functions. Limited Data will be displayed for viewing purposes only. The log in/sign up features, as well as as addding or manipulating any data from the website, will not be available. Data may take a few extra seconds to load as well.';

  // State and Refs
  const [blogsArr, setBlogsArr] = useState([]); //list of blogs data (to be) populated from the server
  const [loggedInUser, setLoggedInUser] = useState(null); //loggedInUser is either an object (with user's info) or null
  const [showLogin, setShowLogin] = useState(false); //boolean to show/hide the login pop up modal
  const [showSignUp, setShowSignUp] = useState(false); //boolean to show/hide the signUp pop up modal
  const [showError, setShowError] = useState(false); //if failed to fetch blogs, show pop up error message
  const hasFetchedData = useRef(false);
  const hasSetSessionStorage = useRef(false);

  // Effects
  useEffect(() => {
    // Fetch blog data if it hasn't been fetched already
    if (!hasFetchedData.current) { //current is used to make the code run once instead of twice
      myFetch(blogsLink, setBlogsArr, setShowError);
      hasFetchedData.current = true;
    }

    // Retrieve the logged-in user from session storage if available
    if (!hasSetSessionStorage.current) {
      const storedUser = JSON.parse(sessionStorage.getItem(ssKey));
      if (storedUser) {
        setLoggedInUser(storedUser);
      }
      hasSetSessionStorage.current = true;
    }
  }, [blogsLink, ssKey]);

  useEffect(() => {
    // Save or remove the logged-in user to/from session storage
    if (loggedInUser) {
      sessionStorage.setItem(ssKey, JSON.stringify(loggedInUser));
    } else {
      sessionStorage.removeItem(ssKey);
    }
  }, [loggedInUser, ssKey]);

  // Blog element
  const blogElem = <Blog blogsArr={blogsArr} loggedIn={loggedInUser} setShowLogin={setShowLogin} setLoggedIn={setLoggedInUser} />;

  return (
    <BrowserRouter>
      <Header loggedIn={loggedInUser} setLoggedIn={setLoggedInUser} showLogin={showLogin} showSignUp={showSignUp}
        setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} blogsArr={blogsArr} />

      <Routes>
        <Route path="/" element={<Navigate replace to={home} />} />
        <Route path="/">
          <Route path={home} element={<BlogList blogsArr={blogsArr} loggedIn={loggedInUser} setShowLogin={setShowLogin} />} />
          <Route path={`${home}/:blogId/`} element={blogElem} />
          <Route path={`${home}/:blogId/:postId`} element={blogElem} />
          <Route path={about} element={<About />} />
          <Route path="/termsandconditions" element={<TermsAndConditions setShowSignUp={setShowSignUp} loggedIn={loggedInUser} />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
      <PopUpAlert show={showError} setShow={setShowError} title={'No Connection to the Server'} text={alertMsg} variant='danger'/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
