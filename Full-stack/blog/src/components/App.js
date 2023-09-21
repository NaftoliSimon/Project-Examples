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

function App() {
  // Constants
  const blogsLink = `${baseUrl}/blogs`;
  const ssKey = 'loggedInUser'; // session storage key
  const { blogs: home, about } = links;

  // State and Refs
  const [blogsArr, setBlogsArr] = useState([]); //list of blogs data (to be) populated from the server
  const [loggedInUser, setLoggedInUser] = useState(null); //loggedInUser is either an object (with user's info) or null
  const [showLogin, setShowLogin] = useState(false); //boolean to show/hide the login pop up modal
  const [showSignUp, setShowSignUp] = useState(false); //boolean to show/hide the signUp pop up modal
  const hasFetchedData = useRef(false);
  const hasSetSessionStorage = useRef(false);

  // Effects
  useEffect(() => {
    // Fetch blog data if it hasn't been fetched already
    if (!hasFetchedData.current) { //current is used to make the code run once instead of twice
      myFetch(blogsLink, setBlogsArr);
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

      <Footer />
    </BrowserRouter>
  );
}

export default App;
