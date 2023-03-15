import React, { useEffect, useState } from 'react';
import myFetch from '../../../../../functions/myFetch';
import Comments from './Comments/Comments';
import center from '../../../../../data/Bootstrap/center';
import baseUrl from '../../../../../data/URLpaths';

export default function Post({ post, selectedPostId, changeSelectedPost, loggedIn, setShowLogin, setLoggedIn }) {
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
    const commentsUrl = `${baseUrl}/comments/${postId}/${loggedIn.userId}`;
    myFetch(commentsUrl, setCommentsArr);
  }

  function handleButtonClick(postId) {                           //Remember, we are mapping through every post
    const selected = (selectedPostId == postId) ? null : postId; //Sets all non selected posts to null. This will hide the comments of a previously selected post, whether a new post is selected, or if the same post is unselected. Sets the currently selected post.
    changeSelectedPost(selected);
  }

  //bootstrap style
  const liStyle = ` bgColor-primary color-secondary-reverse p-3 m-2 rounded border ${center}`;
  const titleStyle = `h6 text-capitalize text-decoration-underline`;
  const commentsBtnStyle = `d-block btn post-btn color-primaryLight`;

  const showHideBtn = <div className={`${center} p-2`}>
    <button className={`${commentsBtnStyle}`} onClick={() => handleButtonClick(postId)}>{btnText}</button>
  </div>

  return (<>
    <li className={`${liStyle}`} id={`post-${postId}`}>
      <div className='w-100'>
        <span className={`d-block text-center ${titleStyle}`}>{title}</span>
        <span className='d-block text-center'>{body}</span>
        {showHideBtn}
        {postId == selectedPostId && <Comments commentsArr={commentsArr} postId={postId}
          loggedIn={loggedIn} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
          }
        {selectedPostId == postId && commentsArr.length != 0 && showHideBtn} 
      </div>
    </li>
  </>)
}
