import React, { useState } from 'react'
import AddComment from './AddComment';
import AddCommentBtn from './AddCommentBtn';
import CommentDisplay from './CommentDisplay';
import EditComment from './EditComment'

export default function Comments({ commentsArr, postId, loggedIn, setShowLogin, setLoggedIn }) {
  const [addingComment, setAddingComment] = useState(false);
  const [selectedComment, changeSelectedComment] = useState(null);

  const closeAddComment = () => setAddingComment(false);
  const openAddComment = () => setAddingComment(true);
  const unSelectComment = () => changeSelectedComment(null);

  //Either shows the button to add a comment or shows the add comment input display
    const commentsContent = addingComment ?
    <AddComment closeAddComment={closeAddComment} postId={postId} loggedIn={loggedIn}/> :
    <AddCommentBtn openAddComment={openAddComment} loggedIn={loggedIn} setShowLogin={setShowLogin}/>;
   

  if (!commentsArr.length) {
    return (<>
      <div className={`text-center p-4 fs-1`}>No Comments</div>
      {commentsContent}
    </>);
  }

  //rounded shadow border-sm
  return (<>
    <ul className='list-group border border-top-0'>
      {commentsArr.map(comment => {
        const { id, postId } = comment;
        return <li className={`bgColor-primary text-dark comment px-3`} key={`${postId}/${id}`} id={`comment-${id}`}>
          <div className='container border-top'>
            <div className="row">
              {id !== selectedComment && <CommentDisplay comment={comment} changeSelectedComment={changeSelectedComment} loggedIn={loggedIn}/>} {/* If comment is NOT selected, then show comment display */}
              {id === selectedComment && <EditComment comment={comment} unSelectComment={unSelectComment} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} {/* If comment IS selected, then show edit comment */}
            </div>
          </div>
        </li>
      })}
      {commentsContent}
    </ul>
  </>)
}