import React, { useEffect, useState } from 'react';
import myFetch from '../../../functions/myFetch';
import Comments from './Comments/Comments';
import center from '../../../data/Bootstrap/center';
import baseUrl from '../../../data/URLpaths';
import { Dropdown } from 'react-bootstrap';
import AddPost from './AddPost';
import { BsThreeDotsVertical } from 'react-icons/bs';
import pillButton, { pillButtonSolid } from '../../../data/Bootstrap/pillButton';
import PostDropdown from './PostDropdown';

export default function Post({ post, selectedPostId, changeSelectedPost, loggedIn, setShowLogin, setLoggedIn }) {
  const [commentsArr, setCommentsArr] = useState([]);
  const [btnText, changebtnText] = useState();
  const [showEditPost, setShowEditPost] = useState(false);
  const defaultShadow = 'shadow-sm';
  const [shadow, setShadow] = useState(defaultShadow);
  const { id: postId, body, title, userId } = post;

  useEffect(() => { //when selectedPostId changes
    if (selectedPostId == postId) { //postId is the id of the post from postsArr which we are mapping through
      fetchComments(selectedPostId);
      changebtnText('Hide Comments');
    } else {
      changebtnText('Show Comments');
    }
  }, [selectedPostId]); //when Comments button is clicked selectedPostId changes

  function fetchComments(postId) {
    const commentsUrl = loggedIn ? `${baseUrl}/comments/${postId}/${loggedIn.userId}` : `${baseUrl}/comments/${postId}/notLoggedIn`;
    myFetch(commentsUrl, setCommentsArr);
  }

  function handleButtonClick(postId) {                           //Remember, we are mapping through every post
    const selected = (selectedPostId == postId) ? null : postId; //Sets all non selected posts to null. This will hide the comments of a previously selected post, whether a new post is selected, or if the same post is unselected. Sets the currently selected post.
    changeSelectedPost(selected);
  }

  //bootstrap style
  const liStyle = ` bgColor-primary color-secondary-reverse p-3 m-2 rounded border ${center} w-100 shadow-lg`;
  const titleStyle = `h6 text-capitalize text-decoration-underline`;
  const commentsBtnStyle = `d-block btn post-btn color-primaryLight border ${shadow} ${pillButtonSolid}`;

  const showHideBtnProps = {
    className: `${commentsBtnStyle}`, onMouseOver: () => setShadow('shadow'),
    onMouseLeave: () => setShadow(defaultShadow), onClick: () => handleButtonClick(postId)
  };
  const showHideBtn = <div className={`${center} p-2`}><button {...showHideBtnProps}>{btnText}</button></div>;
  return (<>
    {!showEditPost && <li className={`${liStyle}`} id={`post-${postId}`}>
      <div className='w-100'>
        {loggedIn && loggedIn.userId === userId && <PostDropdown setShowEditPost={setShowEditPost} />}
        <span className={`d-block text-center ${titleStyle}`}>{title}</span>
        <span className='d-block text-center'>{body}</span>
        {showHideBtn}
        {postId == selectedPostId && <Comments commentsArr={commentsArr} postId={postId}
          loggedIn={loggedIn} setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />}
        {selectedPostId == postId && commentsArr.length > 1 && showHideBtn}
      </div>
    </li>}
    {showEditPost &&
      <AddPost show={showEditPost} setShow={setShowEditPost} savedData={post} />
    }
  </>)
}
