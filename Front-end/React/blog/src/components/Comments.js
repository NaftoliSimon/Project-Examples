import './list.css';
import './Comments.css'
import React from 'react'

export default function Comments({ commentsArr }) {
  if (!commentsArr.length) {
    return null;
  }

  return (
    <ul className='bulletlessList'>
      {commentsArr.map(comment => {
        const { id, postId, body, name } = comment;
        return <li className='commentsDisplay' key={`${postId}/${id}`}>
          <span className='commentBody'>{body}</span>
          <span className='commentName'>-{name}</span>
        </li>
      })}
    </ul>
  )
}