import React from 'react'
import center from '../../../../data/Bootstrap/center'
import CommentsBtn from './CommentsBtn'

export default function AddCommentBtn({ openAddComment, loggedIn, setShowLogin }) {
  function openLoginModal() {
    setShowLogin('You Must Log In To Comment')
    // setModalTitle('Log in to comment')
  }
  const handleClick = loggedIn ? openAddComment : openLoginModal;
  return (
    <div className={`pb-3 container ${center}`}>
      <CommentsBtn text={'Add Comment'} handleClick={handleClick}></CommentsBtn>
    </div>
  )
}
