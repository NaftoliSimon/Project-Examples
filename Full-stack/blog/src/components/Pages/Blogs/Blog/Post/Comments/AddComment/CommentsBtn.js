import React from 'react'
import commentsBtnStyle from '../../../../../../../data/commentsBtnStyle'

export default function CommentsBtn({ text, handleClick}) {
    return (
        <button className={`${commentsBtnStyle} btn-sm me-2`} onClick={handleClick}>{text}</button>
    )
}
