import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Colors.scss';
import BlogList from './Pages/Blogs/BlogList';
import { useEffect, useRef, useState } from 'react';
import Header from './Header&Footer/Header'
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom"; // React Router (v6) 
import Blog from './Pages/Blogs/Blog/Blog';
import myFetch from '../functions/myFetch';
import FourOhFour from './Pages/FourOhFour';
import About from './Pages/About';
import baseUrl, { links } from '../data/URLpaths';
import Footer from './Header&Footer/Footer';
import TermsAndConditions from './Header&Footer/Layout/Navbar/Login/TermsAndConditions';

function App() {

  const lsKey = 'loggedInUser'; //local storage key
  // let loggedInUser = false; //if loading for first time there is no logged in user. If reloading it will be set with previous loggedInUser (from localstorage)
  // loggedInUser = localStorage.getItem(lsKey);

  //creates a state with an array of blogs
  const [blogsArr, setBlogsArr] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); //Registered website user logged in or not: If user is logged out 'loggedIn' is set to false. If user is logged in 'loggedIn' is set to an object with the user's info/data from the users table from the database (sign up data)
  const [showLogin, setShowLogin] = useState(false); //Shows login popup modal form. If not showing, set to false, if showing set to modalTitle string (or true)
  //TODO: move showSign up here as well and add "set show sign up" to bottom of terms and conditions page?
  //TODO: Keep user logged in when they click link to new page (ie their blog) or when page reloads.

  const blogsLink = `${baseUrl}/blogs`; //My API: (see \Project Examples\Full-stack\blog\blogApi)
  const hasFetchedData = useRef(false); //useRef to only fetch data once instead of twice (see https://stackoverflow.com/questions/72252358/useeffect-fetch-request-is-pulling-data-twice)
  useEffect(() => {
    if (hasFetchedData.current === false) {
      myFetch(blogsLink, setBlogsArr);
      hasFetchedData.current = true;
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(lsKey, loggedIn);
  }, [loggedIn])

  const blogElem = <Blog blogsArr={blogsArr} loggedIn={loggedIn} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />

  //sets all of the routs for the url
  const { Blogs: home, About: about, Login: login } = links;
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} showLogin={showLogin} setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Navigate replace to={home} />}></Route> {/*this is a redirect*/}

        <Route path="/" element={<Outlet />}>
          <Route path={home} element={<BlogList blogsArr={blogsArr} loggedIn={loggedIn} setShowLogin={setShowLogin}/>}></Route>
          <Route path={`${home}/:blogId/`} element={blogElem} />
          <Route path={`${home}/:blogId/:postId`} element={blogElem} /> {/* postId is optional (v6 removed optional support, therefore two separate paths are needed) */}
          <Route path={about} element={<About />} />
          <Route path={`/termsandconditions`} element={<TermsAndConditions />} />
          <Route
            path="*"
            element={<FourOhFour />}
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
