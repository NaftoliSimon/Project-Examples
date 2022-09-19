import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import baseUrl from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import PostsList from './PostsList';
import SelectedBlog from './SelectedBlog';

export default function Blog({ blogsArr }) { //This component is linked from BlogList.js

  //Posts are fetched from the url id (see App.js). 
  //Web page is not reliant on button click to fetch data. Link can be shared and will fetch the data.
  const location = useLocation();
  const url_id = location.pathname.split('/').pop();

  const [postsArr, setPostsArr] = useState([]);
  let selectedBlog = blogsArr.find(blog => blog.id == url_id)

  const postsUrl = `${baseUrl}/posts/${url_id}`;
  const hasFetchedData = useRef(false);
  useEffect(() => {
    if (hasFetchedData.current === false) {
      myFetch(postsUrl, setPostsArr)
      hasFetchedData.current = true;
    }
  }, [url_id])

  //TODO: Add an error displayed message to the user if bad url_id and nothing fetched. As of now page remains blank.

  return (
    <>
      {selectedBlog && <SelectedBlog selectedBlog={selectedBlog} />}
      <PostsList postsArr={postsArr} />
    </>
  )
}
