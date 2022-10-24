import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './lightmode.css' //see "data/backgroundColor.js" for details
// import './darkmode.css' //see "data/backgroundColor.js" for details
import BlogList from './Pages/Blogs/BlogList';
import { useEffect, useRef, useState } from 'react';
import Header from './Header/Header'
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom"; // React Router (v6) 
import Blog from './Pages/Blogs/Blog/Blog';
import myFetch from '../functions/myFetch';
import FourOhFour from './Pages/FourOhFour';
import About from './Pages/About';
import bgColor from '../data/backgroundColor';
import baseUrl from '../data/URLpaths';

function App() {
  //creates a state with an array of blogs
  const [blogsArr, setBlogsArr] = useState([]);

  const blogsLink = `${baseUrl}/blogs`; //My API: (see \Project Examples\Full-stack\blog\blogApi)
  const hasFetchedData = useRef(false); //useRef to only fetch data once instead of twice (see https://stackoverflow.com/questions/72252358/useeffect-fetch-request-is-pulling-data-twice)
  useEffect(() => {
    if (hasFetchedData.current === false) {
      myFetch(blogsLink, setBlogsArr);
      hasFetchedData.current = true;
    }
  }, [])

  //sets all of the routs for the url
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="blogs" />}></Route> {/*this is a redirect*/}

        <Route path="/" element={<Outlet />}>
          <Route path="blogs" element={<BlogList blogsArr={blogsArr} />}></Route>
          <Route path="blogs/:blogId/" element={<Blog blogsArr={blogsArr} />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={<FourOhFour />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;