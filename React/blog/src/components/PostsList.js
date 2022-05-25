import './list.css';
import React, { useState } from 'react';
import Post from './Post';

export default function PostsList({ postsArr }) {
  const [selectedPostId, changeSelectedPost] = useState();

  return (
    <ul className='bulletlessList'>
      {postsArr.map(post => {
        return <Post post={post} selectedPostId={selectedPostId}
          changeSelectedPost={changeSelectedPost} key={`${post.id}`} />
      })}
    </ul>
  )
}
