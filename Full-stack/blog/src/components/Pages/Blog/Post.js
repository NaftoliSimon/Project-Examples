import React, { useEffect, useState } from 'react';
import myFetch from '../../../functions/myFetch';
import Comments from './Comments/Comments';
import center from '../../../data/Bootstrap/center';
import baseUrl from '../../../data/URLpaths';
import AddPost from './AddPost';
import  { pillButtonSolid } from '../../../data/Bootstrap/pillButton';
import PostDropdown from './PostDropdown';
import bgLightOrDark from '../../../data/Bootstrap/colors';
import { Card } from 'react-bootstrap';

export default function Post({ post, selectedPostId, setSelectedPost, loggedIn, setShowLogin, setLoggedIn }) {
  const [commentsArr, setCommentsArr] = useState([]);
  const [buttonText, changeButtonText] = useState();
  const [showEditPost, setShowEditPost] = useState(false);
  const defaultShadow = 'shadow-sm';
  const [shadow, setShadow] = useState(defaultShadow);
  const { id: postId, body, title, userId } = post;

  useEffect(() => { //when selectedPostId changes
    if (selectedPostId == postId) { //postId is the id of the post from postsArr which we are mapping through
      fetchComments(selectedPostId);
      changeButtonText('Hide Comments');
    } else {
      changeButtonText('Show Comments');
    }
  }, [selectedPostId]); //when Comments button is clicked selectedPostId changes

  function fetchComments(postId) {
    const commentsUrl = loggedIn ? `${baseUrl}/comments/${postId}/${loggedIn.userId}` : `${baseUrl}/comments/${postId}/notLoggedIn`;
    myFetch(commentsUrl, setCommentsArr);
  }

  function handleButtonClick(postId) {                           //Remember, we are mapping through every post
    const selected = (selectedPostId == postId) ? null : postId; //Sets all non selected posts to null. This will hide the comments of a previously selected post, whether a new post is selected, or if the same post is unselected. Sets the currently selected post.
    // const selected = (selectedPostId == postId) ? null : postId;
    setSelectedPost(selected);
  }

  //bootstrap style
  const liStyle = `card p-3 m-2 ${center} w-100 rounded border shadow-lg`;
  const titleStyle = `h6 text-capitalize text-decoration-underline`;
  const commentsBtnStyle = `${shadow} btn btn-outline-primary`;

  const showHideBtnProps = {
    className: `${commentsBtnStyle}`, onMouseOver: () => setShadow('shadow'),
    onMouseLeave: () => setShadow(defaultShadow), onClick: () => handleButtonClick(postId)
  };
  const showHideBtn = <div className={`${center} p-2`}><button {...showHideBtnProps}>{buttonText}</button></div>;
  return (<>
    {!showEditPost && //<li className={`${liStyle} opacity-75`} id={`post-${postId}`}>
      <Card as={'li'} className={`${liStyle}`} id={`post-${postId}`}>
        {loggedIn && loggedIn.userId === userId && <PostDropdown setShowEditPost={setShowEditPost} />}
        <span className={`d-block text-center ${titleStyle}`}>{title}</span>
        <span className='d-block text-center'>{body}</span>
        {showHideBtn}
        {postId == selectedPostId && <Comments commentsArr={commentsArr} postId={postId}
          loggedIn={loggedIn} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />}
        {selectedPostId == postId && commentsArr.length > 1 && showHideBtn}
      </Card>
    //</li>
  }
    {showEditPost &&
      <AddPost show={showEditPost} setShow={setShowEditPost} savedData={post} />
    }
  </>)
}
