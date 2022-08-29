import React, { useState } from 'react';
import Post from './Post/Post';
import center from '../../../../data/center';

export default function PostsList({ postsArr }) {
  const [selectedPostId, changeSelectedPost] = useState();
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
