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
import Login from './Pages/Login';
import TermsAndConditions from './Header&Footer/Layout/Navbar/Login/TermsAndConditions';

function App() {
  //creates a state with an array of blogs
  const [blogsArr, setBlogsArr] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); //registered user logged in or not

  const blogsLink = `${baseUrl}/blogs`; //My API: (see \Project Examples\Full-stack\blog\blogApi)
  const hasFetchedData = useRef(false); //useRef to only fetch data once instead of twice (see https://stackoverflow.com/questions/72252358/useeffect-fetch-request-is-pulling-data-twice)
  useEffect(() => {
    if (hasFetchedData.current === false) {
      myFetch(blogsLink, setBlogsArr);
      hasFetchedData.current = true;
    }
  }, []);

  //sets all of the routs for the url
  const {Blogs : home, About : about,  Login: login} = links;
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Navigate replace to={home} />}></Route> {/*this is a redirect*/}

        <Route path="/" element={<Outlet />}>
          <Route path={home} element={<BlogList blogsArr={blogsArr} />}></Route>
          <Route path={`${home}/:blogId/`} element={<Blog blogsArr={blogsArr} />} />
          <Route path={`${home}/:blogId/:postId`} element={<Blog blogsArr={blogsArr} />} /> {/* postId is optional (v6 removed optional support, therefore two separate paths are needed) */}
          <Route path={about} element={<About />} />
          <Route path={`/login`} element={<Login/>} />
          <Route path={`/termsandconditions`} element={<TermsAndConditions/>} />
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
