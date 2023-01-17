import React from 'react'
import center from '../../../../../../../data/Bootstrap/center'
import CommentsBtn from './CommentsBtn'

export default function AddCommentBtn({ openAddComment }) {
  return (
    <div className={`pb-3 container ${center}`}>
      <CommentsBtn text={'Add Comment'} handleClick={openAddComment}></CommentsBtn>
    </div>
  )
}
