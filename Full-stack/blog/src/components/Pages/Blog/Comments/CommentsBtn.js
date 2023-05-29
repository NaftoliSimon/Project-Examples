import React, { useState } from 'react'
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';

export default function CommentsBtn({ text, handleClick }) {
    const defaultShadow = 'shadow-sm';
    const [shadow, setShadow] = useState(defaultShadow);
    return (
        <button className={`d-block btn post-btn btn-sm me-2 ${shadow} ${pillButtonSolid}`}
            onClick={handleClick}
            onMouseOver={() => setShadow('shadow')}
            onMouseLeave={() => setShadow(defaultShadow)}
        >{text}</button>
    )
}
