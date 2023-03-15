import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import baseUrl from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import NoData from './Post/NoData';
import PostsList from './PostsList';
import SelectedBlog from './SelectedBlog';

export default function Blog({ blogsArr, loggedIn, setShowLogin, setLoggedIn }) { //This component is linked from BlogList.js

  //Posts are fetched from the url id (see App.js). 
  //Web page is not reliant on button click to fetch data. Link can be shared and will fetch the data.
  const params = useParams(); //url parameters
  const {blogId: url_id} = params;

  const [postsArr, setPostsArr] = useState([]);
  let selectedBlog = blogsArr.find(blog => blog.userId == url_id)

  const postsUrl = `${baseUrl}/posts/${url_id}`;
  const hasFetchedData = useRef(false);
  useEffect(() => {
    if (hasFetchedData.current === false) {
      myFetch(postsUrl, setPostsArr)
      hasFetchedData.current = true;
    }
  }, [url_id])

  //TODO: make sure NoData error display component is good (ie correct size, ect) 
  return (
    <>
      {selectedBlog && <SelectedBlog selectedBlog={selectedBlog} loggedIn={loggedIn} />}
      {!postsArr.length && <NoData selectedBlog={selectedBlog}/>}
      <PostsList postsArr={postsArr} loggedIn={loggedIn} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn}/>
    </>
  )
}
