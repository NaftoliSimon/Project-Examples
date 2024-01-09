import React from 'react'
import pillButton from '../../../../data/Bootstrap/pillButton'

export default function EditCommentBtn({ text, handleClick }) {
    return (
        <button type="button" className={`btn btn-primary me-1`} onClick={handleClick}>{text}</button>
    )
}
