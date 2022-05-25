import './App.css';
import BlogList from './BlogList';
import { useEffect, useState } from 'react';
import Header from './staticComponents/Header';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom"; // React Router (v6) 
import Blog from './Blog';
import myFetch from '../functions/myFetch';
import FourOhFour from './staticComponents/FourOhFour';
import About from './staticComponents/About';

function App() {
  //creates a state with an array of blogs
  const [blogsArr, setBlogsArr] = useState([]);
  const blogsLink = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    myFetch(blogsLink, setBlogsArr)
  }, [])

  //sets all of the routs for the url
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="about" />}></Route> {/*this is a redirect*/}

        <Route path="/" element={<Outlet />}>
          <Route path="blogs" element={<BlogList blogsArr={blogsArr} />}></Route>
          <Route path="blogs/:blogId/" element={<Blog />} />
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
