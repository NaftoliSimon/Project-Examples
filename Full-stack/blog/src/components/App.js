import React, { useEffect, useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss';
import '../Styles/Colors.scss';
import '../Styles/InputIcons.scss';
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
import noShow from '../data/storageKeys';
import { loggedInUser as ssLoggedInUser } from '../data/storageKeys';

function App() {
  // Constants
  const blogsLink = `${baseUrl}/blogs`;
  const ssKey = ssLoggedInUser; // session storage key
  const { blogs: home, about } = links;
  const alertMsgHeading = 'For full features of the website please connect to the server.'
  const alertMsg = 'The website will be limited in its functions. Limited Data will be displayed for viewing purposes only. The log in/sign up features, and adding or manipulating any data from the website, will not be available.';
  const alertMsg2 = 'For more details please visit the about page.';
  const alertMsgComponent = <span>
    {alertMsgHeading}
    <span className='d-block'>{alertMsg}</span>
    <span>{alertMsg2}</span>
  </span>
  const savedPage = /*Number(sessionStorage.getItem('pageNum')) ||*/ 1;

  // State and Refs
  const [blogsArr, setBlogsArr] = useState([]); //list of blogs data (to be) populated from the server, only populates 6 at a time prt page (see )
  const [loggedInUser, setLoggedInUser] = useState(null); //loggedInUser is either an object (with user's info) or null
  const [loggedInUserBlog, setLoggedInUserBlog] = useState(null); //loggedInUser's blog info 
  const [showLogin, setShowLogin] = useState(false); //boolean to show/hide the login pop up modal
  const [showSignUp, setShowSignUp] = useState(false); //boolean to show/hide the signUp pop up modal
  const [showError, setShowError] = useState(false); //if failed to fetch blogs, show pop up error message
  const [page, setPage] = useState(savedPage); //the current blogs being displayed on the page (see index.js in the backend) 
  const [totalPages, setTotalPages] = useState(1);//the total number of blog pages displayed 
  const hasFetchedBlogsData = useRef(false);
  const hasSetSessionStorage = useRef(false);
  const hasFetchedBlogsTotal = useRef(false);

  //Local Storage Hooks
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = prefersDark ? 'dark' : 'light'; //initial theme is set based on the user's browser's preference. 
  const [theme, setTheme] = useLocalStorage('theme', initialTheme);//This hook sets local storage. (Any time the user loads the website it will use the theme saved in the local storage. The current theme is automatically saved to the local storage, after loading the website. If no theme is found in local storage, it will use the users' preferred browser settings)
  // TODO: switch the other local storage used below to use this hook instead


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  // const hasSetPage = useRef(false)


  // Effects
  useEffect(() => {
    if (!hasFetchedBlogsTotal.current) {
      myFetch(`${baseUrl}/blogsTotal`, setTotalPages); //Sets the total number of pages (see Paginator.js)
      hasFetchedBlogsTotal.current = true;
    }
  }, []);

  useEffect(() => {
    // Fetch blog data if it hasn't been fetched already
    if (!hasFetchedBlogsData.current) { //current is used to make the code run once instead of twice
      if (localStorage.getItem(noShow)) { //the user has an option to not show the error message again (see PopUpAlert.js)
        myFetch(`${blogsLink}?page=${page}`, setBlogsArr)
      } else {
        myFetch(`${blogsLink}?page=${page}`, setBlogsArr, setShowError);
      }
      hasFetchedBlogsData.current = true;
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

    if (blogsArr.length > 6) {
      sessionStorage.removeItem('pageNum');
    } else {
      sessionStorage.setItem('pageNum', page);
    }

    // hasSetPage.current = true;
    // }
  }, [page/*, blogsArr*/]);


  useEffect(() => {
    // Save or remove the logged-in user to/from session storage
    if (loggedInUser) {
      sessionStorage.setItem(ssKey, JSON.stringify(loggedInUser));

      // sets the logged in user's blog,
      setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedInUser.userId));//first it attempts to find the user's blog from the already fetched blogs
      if (loggedInUserBlog === -1 || !loggedInUserBlog) { //if blog was not found in the already fetched blogs array (meaning the (6) current blogs being displayed on the page)
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
    <div className='app d-flex flex-column min-vh-100' data-theme={theme} data-bs-theme={theme}> {/*flex & min-bh-100 keeps the footer at the bottom of the page (see div flex-grow-1 below)*/}
      <BrowserRouter>
        <Header loggedIn={loggedInUser} setLoggedIn={setLoggedInUser} loggedInBlog={loggedInUserBlog} showLogin={showLogin} showSignUp={showSignUp}
          setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} blogsArr={blogsArr} switchTheme={switchTheme} theme={theme} />
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
          <PopUpAlert show={showError} setShow={setShowError} title={'No Connection to the Server'} text={alertMsgComponent} variant={'danger'} />
        </main>
        <div className="flex-grow-1">
          {/* This div will grow and push the footer to the bottom, if there is less content then page size */}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
