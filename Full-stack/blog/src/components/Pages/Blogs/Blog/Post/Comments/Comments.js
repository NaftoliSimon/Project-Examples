import React from 'react'
import bgColor from '../../../../../../data/backgroundColor';

export default function Comments({ commentsArr }) {
  if (!commentsArr.length) {
    return null;
  }

  return (
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
  )
}