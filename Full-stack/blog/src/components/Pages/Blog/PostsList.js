import React, { useEffect, useState } from 'react';
import Post from './Post';
import center from '../../../data/Bootstrap/center';
import AddPost from './AddPost';

export default function PostsList({ postsArr, loggedIn, setShowLogin, setLoggedIn, show, setShow }) {
  const lsKey = 'selectedPostId'; //local storage key
  let startingSelectedPostId = null; //if loading for first time there is no selected postId. If reloading it will be set with previous postId (from sessionStorage)
  startingSelectedPostId = sessionStorage.getItem(lsKey);

  const [selectedPostId, changeSelectedPost] = useState(startingSelectedPostId);

  useEffect(() => {
    sessionStorage.setItem(lsKey, selectedPostId)
  }, [selectedPostId])

  return (<div className='container'>
    <div className={`row ${center}`}>
      <AddPost show={show} setShow={setShow} />
      <ul className={`list-group post d-flex flex-row flex-wrap ${center}`}>
        {postsArr.map(post => {
          return <Post post={post} selectedPostId={selectedPostId} loggedIn={loggedIn} setShowLogin={setShowLogin}
            changeSelectedPost={changeSelectedPost} key={`${post.id}`} setLoggedIn={setLoggedIn} />
        })}
      </ul>
    </div>
  </div>
  )
}
