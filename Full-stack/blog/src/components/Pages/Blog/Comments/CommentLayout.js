import React from 'react'

export default function CommentLayout({body, name}) {
    /*see https://getbootstrap.com/docs/5.2/content/typography/#naming-a-source for layout info*/
    return (
        <figure>
            <h5 className='fs-bold p-0 m-0 fst-italic text-capitalize fs-6'>{name}</h5>
            <blockquote className="blockquote">
                <p className='p-0 m-0'>{body}</p>
            </blockquote>
            {/* <figcaption className="blockquote-footer">
                <cite title="Source Title">{name}</cite>
            </figcaption> */}
        </figure>
    )
}
