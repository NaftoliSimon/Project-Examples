import React from 'react'

export default function CommentsBtn({ text, handleClick}) {
    return (
        <button className={`d-block btn post-btn btn-sm me-2`} onClick={handleClick}>{text}</button>
    )
}
