import React, { useEffect, useState } from 'react';
import Post from './Post';
import center from '../../../data/Bootstrap/center';
import AddPost from './AddPost';

export default function PostsList({ postsArr, loggedIn, setShowLogin, setLoggedIn, show, setShow }) {

  const ssKey = 'selectedPostId'; // session storage key
  const startingSelectedPostId = sessionStorage.getItem(ssKey) || null; //if loading for first time there is no selected postId. If reloading it will be set with previous postId (from sessionStorage)

  const [selectedPostId, setSelectedPost] = useState(startingSelectedPostId);

  useEffect(() => {
    sessionStorage.setItem(ssKey, selectedPostId)
  }, [selectedPostId])

  return (<div className='container'>
    <div className={`row ${center}`}>
      <AddPost show={show} setShow={setShow} />
      <ul className={`list-group post d-flex flex-row flex-wrap ${center}`}>
        {postsArr.map(post => (
           <Post post={post} selectedPostId={selectedPostId} loggedIn={loggedIn} setShowLogin={setShowLogin}
            setSelectedPost={setSelectedPost} key={post.id} setLoggedIn={setLoggedIn} />
        ))}
      </ul>
    </div>
  </div>
  )
}
