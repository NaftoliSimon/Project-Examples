import React, { useState } from 'react'
import bgColor from '../../../../../../data/backgroundColor';
import AddComment from './AddComment/AddComment';
import AddCommentBtn from './AddComment/AddCommentBtn';
import CommentDisplay from './CommentDisplay/CommentDisplay';
import EditComment from './EditComment/EditComment'

export default function Comments({ commentsArr, postId }) {
  const [addingComment, setAddingComment] = useState(false);
  const [selectedComment, changeSelectedComment] = useState(null);

  const closeAddComment = () => setAddingComment(false);
  const openAddComment = () => setAddingComment(true);
  const unSelectComment = () => changeSelectedComment(null);

  //Either shows the button to add a comment or shows the add comment input display
  const commentsContent = addingComment ?
    <AddComment closeAddComment={closeAddComment} postId={postId} /> :
    <AddCommentBtn openAddComment={openAddComment} />;

  if (!commentsArr.length) {
    return (<>
      <div className={`text-center p-4 fs-1`}>No Comments</div>
      {commentsContent}
    </>);
  }

  return (<>
    <ul className='list-group'>
      {commentsArr.map(comment => {
        const { id, postId } = comment;
        return <li className={`list-group-item-${bgColor} comment p-2 m-3 rounded`} key={`${postId}/${id}`} id={`comment-${id}`}>
          <div className='container'>
            <div className="row">
              {id !== selectedComment && <CommentDisplay comment={comment} changeSelectedComment={changeSelectedComment} />} {/* If comment is NOT selected, then show comment display */}
              {id === selectedComment && <EditComment comment={comment} unSelectComment={unSelectComment} />} {/* If comment IS selected, then show edit comment */}
            </div>
          </div>
        </li>
      })}
    </ul>
    {commentsContent}
  </>)
}