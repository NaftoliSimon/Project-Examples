import React from 'react'
import pillButton from '../../../../data/Bootstrap/pillButton'

export default function EditCommentBtn({ text, handleClick }) {
    return (
        <button type="button" className={`btn button m-1 ${pillButton}`} onClick={handleClick}>{text}</button>
    )
}
