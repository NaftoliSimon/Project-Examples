import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import center from '../../../data/Bootstrap/center';
import baseUrl, { links } from '../../../data/URLpaths';
import myFetch from '../../../functions/myFetch';
import ButtonLink from '../../reuseable/ButtonLink';
import NoData from './NoData';
import PostsList from './PostsList';
import SelectedBlog from './SelectedBlog';
import { Container } from 'react-bootstrap';

export default function Blog({ blogsArr, loggedIn, setShowLogin, setLoggedIn }) { //This component is linked from BlogList.js
  const [show, setShow] = useState(null); //show add post modal
  const [selectedBlog, setSelectedBlog] = useState();

  //Posts are fetched from the url id (see App.js). 
  //Web page is not reliant on button click to fetch data. Link can be shared and will fetch the data.
  const params = useParams(); //url parameters
  let { blogId: url_id } = params;
  url_id = +(url_id);

  const [postsArr, setPostsArr] = useState([]);

  const postsUrl = `${baseUrl}/posts/${url_id}`;
  const hasFetchedData = useRef(false);
  useEffect(() => {
    if (hasFetchedData.current === false) {
      myFetch(postsUrl, setPostsArr)
      hasFetchedData.current = true;
    }
  }, [postsUrl])
  
  useEffect(() => {
    const selectBlog = blogsArr.find(blog => blog.userId === url_id); //search the current displayed blogs 

    if (!selectBlog || selectBlog === -1) {
      myFetch(`${baseUrl}/blog/${url_id}`, data => {
        setSelectedBlog(data);
      });
    } else {
      setSelectedBlog(selectBlog);
    }
  }, [url_id, blogsArr]);

  function openAddPost() {
    setShow(true)
  }
  const visibility = loggedIn && url_id == loggedIn.userId ? 'visible' : 'invisible';
  const addPost = <div className={`pb-3 container ${center}`}>
    <div className={`btn btn-primary ${center} ${visibility}`} onClick={openAddPost} role="button">Add A Post</div>
  </div>
  //TODO: make sure NoData error display component is good (ie correct size, ect) 
  return (
    <Container>
      {selectedBlog && <SelectedBlog selectedBlog={selectedBlog} loggedIn={loggedIn} />}
      {!show && addPost}
      {!postsArr.length && <NoData selectedBlog={selectedBlog} />}
      <PostsList postsArr={postsArr} loggedIn={loggedIn} setShowLogin={setShowLogin}
        setLoggedIn={setLoggedIn} show={show} setShow={setShow} />
      <ButtonLink text='Return to Blogs' link={links.blogs} large={true} />
    </Container>
  )
}
