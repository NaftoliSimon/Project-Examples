import React, { useState } from 'react';
import Post from './Post/Post';
import center from '../../../../data/Bootstrap/center';
import { useParams } from 'react-router-dom';

export default function PostsList({ postsArr }) {
  let startingSelectedPostId = null; //if loading for first time there is no selected postId. If reloading it will be set with previous postId (ie from url, cookies, sessions, ect)

  // const params = useParams(); //(see the redirect after the blogApi's delete comments query for url params)
  // if (params.postId) {  //if reloading page (ie after deleteing a comment), it will automatically show comments for selected post
  //   startingSelectedPostId = params.postId;
  // }
  const [selectedPostId, changeSelectedPost] = useState(startingSelectedPostId);
  if (!postsArr.length) {
    return (<>
      <div className={`text-center p-4 fs-1`}>No Posts</div>
    </>)};
  return (<div className={center}>
    <ul className={`list-group post d-flex flex-row flex-wrap ${center}`}>
      {postsArr.map(post => {
        return <Post post={post} selectedPostId={selectedPostId}
          changeSelectedPost={changeSelectedPost} key={`${post.id}`} />
      })}
    </ul>
  </div>
  )
}
