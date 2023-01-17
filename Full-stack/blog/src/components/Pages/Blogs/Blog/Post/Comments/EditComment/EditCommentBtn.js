import React from 'react'

export default function EditCommentBtn({ text, handleClick }) {
    return (
        <button type="button" className={`btn button m-1`} onClick={handleClick}>{text}</button>
    )
}
