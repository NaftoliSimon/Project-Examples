import React from 'react'

export default function CommentLayout({body, name}) {
    /*see https://getbootstrap.com/docs/5.2/content/typography/#naming-a-source for layout info*/
    return (
        <figure>
            <blockquote className="blockquote">
                <p className='p-0 m-0'>{body}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                <cite title="Source Title">{name}</cite>
            </figcaption>
        </figure>
    )
}
