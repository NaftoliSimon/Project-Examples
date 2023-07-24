import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.scss';
import '../Styles/Colors.scss';
import BlogList from './Pages/BlogList/BlogList';
import { useEffect, useRef, useState } from 'react';
import Header from './Header&Footer/Header'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // React Router (v6) 
import Blog from './Pages/Blog/Blog';
import myFetch from '../functions/myFetch';
import FourOhFour from './Pages/FourOhFour';
import About from './Pages/About';
import baseUrl, { links } from '../data/URLpaths';
import Footer from './Header&Footer/Footer';
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
  const [blogsArr, setBlogsArr] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // loggedInUser is either an object (with the logged in user's info) or null/false
  const [showLogin, setShowLogin] = useState(false); //shows the login pop up modal
  const [showSignUp, setShowSignUp] = useState(false);

  const blogsLink = `${baseUrl}/blogs`;
  const ssKey = 'loggedInUser'; // session storage key

  const hasFetchedData = useRef(false);
  const hasSetSessionStorage = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) { 
      myFetch(blogsLink, setBlogsArr);  //sets the initial blogsArr data
      hasFetchedData.current = true;
    }

    if (!hasSetSessionStorage.current) {
      const storedUser = JSON.parse(sessionStorage.getItem(ssKey));
      if (storedUser) {
        setLoggedInUser(storedUser); //sets the initial logged In user to the stored user, if the user is saved in session storage (so that users stay logged in on page reloads)
      }
      hasSetSessionStorage.current = true;
    }
  }, [blogsLink, ssKey]);

  useEffect(() => {
    if (loggedInUser) { //saves the logged in user to session storage or removes
      sessionStorage.setItem(ssKey, JSON.stringify(loggedInUser));
    } else {
      sessionStorage.removeItem(ssKey);
    }
  }, [loggedInUser, ssKey]);

  const blogElem = <Blog blogsArr={blogsArr} loggedIn={loggedInUser} setShowLogin={setShowLogin} setLoggedIn={setLoggedInUser} />

  const { blogs: home, about } = links;
  return (
    <BrowserRouter>
      <Header loggedIn={loggedInUser} setLoggedIn={setLoggedInUser} showLogin={showLogin} showSignUp={showSignUp} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} blogsArr={blogsArr} />
      <Routes>
        <Route path="/" element={<Navigate replace to={home} />} />

        <Route path="/">
          <Route path={home} element={<BlogList blogsArr={blogsArr} loggedIn={loggedInUser} setShowLogin={setShowLogin} />} />
          <Route path={`${home}/:blogId/`} element={blogElem} />
          <Route path={`${home}/:blogId/:postId`} element={blogElem} />
          <Route path={about} element={<About />} />
          <Route path="/termsandconditions" element={<TermsAndConditions setShowSignUp={setShowSignUp} loggedIn={loggedInUser}/>} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;