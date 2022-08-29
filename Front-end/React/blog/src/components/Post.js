import React, { useEffect, useState } from 'react'
import myFetch from '../functions/myFetch';
import Comments from './Comments';

export default function Post({ post, selectedPostId, changeSelectedPost }) {
  const [commentsArr, setCommentsArr] = useState([]);
  const [btnText, changebtnText] = useState();
  const { id: postId, body, title } = post;

  useEffect(() => { //when selectedPostId changes
    if (selectedPostId == postId) { //postId is the id of the post from postsArr which we are mapping through
      fetchComments(selectedPostId);
      changebtnText('Hide Comments');
    }
    else {
      changebtnText('Show Comments');
    }
  }, [selectedPostId]); //when Comments button is clicked selectedPostId changes

  function fetchComments(postId) {
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    myFetch(commentsUrl, setCommentsArr);
  }

  function handleButtonClick(postId) {
    const selected = (selectedPostId == postId) ? null : postId;
    changeSelectedPost(selected);
  }

  return (
    <li className='postsDisplay'>
      <span className='blogName'>{title}</span>
      <span className='website'>{body}</span>
      <button className='commentsButton' onClick={() => handleButtonClick(postId)}>{btnText}</button>

      {postId == selectedPostId && <Comments commentsArr={commentsArr} />}
    </li>
  )
}
