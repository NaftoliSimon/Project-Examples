import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import center from '../../../../data/Bootstrap/center';
import baseUrl, { links } from '../../../../data/URLpaths';
import myFetch from '../../../../functions/myFetch';
import ButtonLink from '../../../ButtonLink';
import AddPost from './AddPost';
import AddPostModal from './AddPostModal';
import NoData from './Post/NoData';
import PostsList from './PostsList';
import SelectedBlog from './SelectedBlog';

export default function Blog({ blogsArr, loggedIn, setShowLogin, setLoggedIn }) { //This component is linked from BlogList.js
  const [show, setShow] = useState(null); //show add post modal

  //Posts are fetched from the url id (see App.js). 
  //Web page is not reliant on button click to fetch data. Link can be shared and will fetch the data.
  const params = useParams(); //url parameters
  const { blogId: url_id } = params;

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
  function openAddPost() {
    console.log('open add a post modal');
    setShow(true)
  }
  const visibility = loggedIn && url_id == loggedIn.userId ? 'visible' : 'invisible';
  const addPost = <div className={`pb-3 container ${center}`}>
    <div className={`btn button  ${center} ${visibility}`} onClick={openAddPost} role="button">Add A Post</div>
  </div>
  //TODO: make sure NoData error display component is good (ie correct size, ect) 
  return (
    <>
      {/* <AddPostModal show={show} setShow={setShow} loggedIn={loggedIn}/> */}
      {selectedBlog && <SelectedBlog selectedBlog={selectedBlog} loggedIn={loggedIn} />}
      {addPost}
      {!postsArr.length && <NoData selectedBlog={selectedBlog} />}
      <PostsList postsArr={postsArr} loggedIn={loggedIn} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
      <ButtonLink text='Return to Blogs' link={links.Blogs} large={true} />
    </>
  )
}
