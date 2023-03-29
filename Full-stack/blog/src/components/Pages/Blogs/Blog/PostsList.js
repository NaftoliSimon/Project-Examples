import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import center from '../../../../data/Bootstrap/center';
import { useParams } from 'react-router-dom';
import ButtonLink from '../../../ButtonLink';
import { links } from '../../../../data/URLpaths';
import NoData from './Post/NoData';
import AddPost from './AddPost';

export default function PostsList({ postsArr, loggedIn, setShowLogin, setLoggedIn }) {
  const lsKey = 'selectedPostId'; //local storage key
  let startingSelectedPostId = null; //if loading for first time there is no selected postId. If reloading it will be set with previous postId (from localstorage)
  startingSelectedPostId = localStorage.getItem(lsKey);

  const [selectedPostId, changeSelectedPost] = useState(startingSelectedPostId);

  useEffect(() => {
    localStorage.setItem(lsKey, selectedPostId)
  }, [selectedPostId])

  return (<div className={`row ${center}`}>
    {/* <div> */}
      <AddPost />
    {/* </div> */}
    <ul className={`list-group post d-flex flex-row flex-wrap ${center}`}>
      {postsArr.map(post => {
        return <Post post={post} selectedPostId={selectedPostId} loggedIn={loggedIn} setShowLogin={setShowLogin}
          changeSelectedPost={changeSelectedPost} key={`${post.id}`} setLoggedIn={setLoggedIn} />
      })}
    </ul>
  </div>
  )
}
