import React, { useEffect, useState } from 'react';
import bgColor from '../../../../../data/backgroundColor';
import myFetch from '../../../../../functions/myFetch';
import Comments from './Comments/Comments';
import center from '../../../../../data/center';
import baseUrl from '../../../../../data/URLpaths';

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
    const commentsUrl = `${baseUrl}/comments/${postId}`;
    myFetch(commentsUrl, setCommentsArr);
  }

  function handleButtonClick(postId) {                           //Remember, we are mapping through every post
    const selected = (selectedPostId == postId) ? null : postId; //Sets all non selected posts to null.This will hide the comments of a previouly selected post, whether a new post is selected, or if the same post is unselected. Sets the currently selected post
    changeSelectedPost(selected);
  }

  //bootstrap style
  const liStyle = `list-group-item list-group-item-action bg-${bgColor} p-3 m-2 rounded border ${center}`;
  const titleStyle = `h6 text-capitalize text-decoration-underline`;

  return (<>
    <li className={`${liStyle}`}>
      <div>
        <span className={`d-block text-center ${titleStyle}`}>{title}</span>
        <span className='d-block text-center'>{body}</span>
        <div className={`${center} p-2`}>
          <button className={`d-block btn post-btn list-group-item-${bgColor}`} onClick={() => handleButtonClick(postId)}>{btnText}</button>
        </div>
        {postId == selectedPostId && <Comments commentsArr={commentsArr} />}
      </div>
    </li>
  </>)
}
