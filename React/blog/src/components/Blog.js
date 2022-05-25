import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import myFetch from '../functions/myFetch';
import PostsList from './PostsList';
import SelectedBlog from './SelectedBlog';

export default function Blog() {

  const location = useLocation(); //these 2 lines could be replaced with a selectedBlog state hook at the App level
  const { blog } = location.state; //blog = the selected blog

  const [postsArr, setPostsArr] = useState([]);

  const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`;
  useEffect(() => {
    myFetch(postsUrl, setPostsArr)
  }, [postsUrl])

  return (
    <>
      <SelectedBlog blog={blog} />
      <PostsList postsArr={postsArr} />
    </>
  )
}
