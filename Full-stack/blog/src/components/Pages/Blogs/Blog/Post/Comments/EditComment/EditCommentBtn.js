import React from 'react'
import bgColor from '../../../../../../../data/backgroundColor'

export default function EditCommentBtn({ text, handleClick }) {
    return (
        <button type="button" className={`btn btn-${bgColor} btn-sm m-1`} onClick={handleClick}>{text}</button>
    )
}
