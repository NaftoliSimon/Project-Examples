import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss';
import '../Styles/Colors.scss';
import '../Styles/Links.scss';
import '../Styles/InputIcons.scss';
import '../Styles/Buttons.scss';
import '../Styles/animations.scss';
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
  const alertMsgHeading = 'For full features of the website please connect to the server.'
  const alertMsg = 'The website will be limited in its functions. Limited Data will be displayed for viewing purposes only. The log in/sign up features, the paginator, and adding or manipulating any data from the website, will not be available.';
  const alertMsgComponent = <span>{alertMsgHeading}<span className='d-block'>{alertMsg}</span></span>
  const savedPage = sessionStorage.getItem('pageNum');
  // State and Refs
  const [blogsArr, setBlogsArr] = useState([]); //list of blogs data (to be) populated from the server, only populates 6 at a time prt page (see )
  const [loggedInUser, setLoggedInUser] = useState(null); //loggedInUser is either an object (with user's info) or null
  const [loggedInUserBlog, setLoggedInUserBlog] = useState(null); //loggedInUser's blog info 
  const [showLogin, setShowLogin] = useState(false); //boolean to show/hide the login pop up modal
  const [showSignUp, setShowSignUp] = useState(false); //boolean to show/hide the signUp pop up modal
  const [showError, setShowError] = useState(false); //if failed to fetch blogs, show pop up error message
  const [page, setPage] = useState(Number(savedPage)); //the current blogs being displayed on the page (see index.js in the backend) 
  const [totalPages, setTotalPages] = useState(1);//the total number of blog pages displayed 
  const hasFetchedData = useRef(false);
  const hasSetSessionStorage = useRef(false);
  const hasSetPage = useRef(false)

  // Effects
  useEffect(() => {
    // myFetch(`blogsTotal`, (data) => setTotalPages(Number(data)));
    myFetch(`${baseUrl}/blogsTotal`, setTotalPages);
  }, []);

  useEffect(() => {
    // myFetch(`${baseUrl}/blogsTotal`, setTotalPages);
    // Fetch blog data if it hasn't been fetched already
    if (!hasFetchedData.current) { //current is used to make the code run once instead of twice
      myFetch(`${blogsLink}?page=${page}`, setBlogsArr, setShowError);
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
    // Save the page number to session storage
    // if (!hasSetPage.current) {
      sessionStorage.setItem('pageNum', page);
      // hasSetPage.current = true;
    // }
  }, [page]);


  useEffect(() => {
    // Save or remove the logged-in user to/from session storage
    if (loggedInUser) {
      sessionStorage.setItem(ssKey, JSON.stringify(loggedInUser));
      
      // sets the logged in user's blog,
      setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedInUser.userId));//first it attempts to find the user's blog from the already fetched blogs
      if(loggedInUserBlog === -1 || !loggedInUserBlog) { //if blog was not found in the already fetched blogs array (meaning the (6) current blogs being displayed on the page)
          myFetch(`${baseUrl}/blog/${loggedInUser.userId}`, setLoggedInUserBlog);
      }
    } else {
      sessionStorage.removeItem(ssKey);
    }
  }, [loggedInUser, ssKey]);

  // Blog element
  const blogElem = <Blog blogsArr={blogsArr} loggedIn={loggedInUser} setShowLogin={setShowLogin} setLoggedIn={setLoggedInUser} />;

  // console.log('blogsArr:', blogsArr);
  return (
    <BrowserRouter>
      <Header loggedIn={loggedInUser} setLoggedIn={setLoggedInUser} loggedInBlog={loggedInUserBlog} showLogin={showLogin} showSignUp={showSignUp}
        setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} blogsArr={blogsArr} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to={home} />} />
          <Route path="/">
            <Route path={home} element={<BlogList blogsArr={blogsArr} loggedIn={loggedInUser} setShowLogin={setShowLogin} page={page} setPage={setPage} setBlogsArr={setBlogsArr} blogPages={totalPages} />} />
            <Route path={`${home}/:blogId/`} element={blogElem} />
            <Route path={`${home}/:blogId/:postId`} element={blogElem} />
            <Route path={about} element={<About />} />
            <Route path="/termsandconditions" element={<TermsAndConditions setShowSignUp={setShowSignUp} loggedIn={loggedInUser} />} />
            <Route path="*" element={<FourOhFour />} />
          </Route>
        </Routes>
        <PopUpAlert show={showError} setShow={setShowError} title={'No Connection to the Server'} text={alertMsgComponent} variant='danger' />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
