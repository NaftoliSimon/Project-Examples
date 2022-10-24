import React, { useState } from 'react'
import bgColor from '../../../../../../data/backgroundColor';
import AddComment from './AddComment';
import AddCommentBtn from './AddCommentBtn';

export default function Comments({ commentsArr, postId }) {
  const [addingComment, setAddingComment] = useState(false);
  
  const closeAddComment = () => setAddingComment(false);
  const openAddComment = () => setAddingComment(true);

  //Either show the button to add a comment or show the add comment input
  const commentsContent = addingComment ? 
  <AddComment closeAddComment={closeAddComment} postId={postId}/> : 
  <AddCommentBtn openAddComment={openAddComment}/>;

  if (!commentsArr.length) {
    return (<>
      <div className={`text-center p-4 fs-1`}>No Comments</div>
      {commentsContent}
    </>);
  }

  return (<>
    <ul className='list-group'>
      {commentsArr.map(comment => {
        const { id, postId, body, name } = comment;
        return <li className={`list-group-item-${bgColor} comment p-2 m-3 rounded`} key={`${postId}/${id}`}>
          <figure>
            <blockquote className="blockquote">
              <p>{body}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title">{name}</cite>
            </figcaption>
          </figure>
          {/*see https://getbootstrap.com/docs/5.2/content/typography/#naming-a-source */}
        </li>
      })}
    </ul>
    {commentsContent}
  </>)
}