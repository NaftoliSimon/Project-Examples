import React, { useState } from 'react'
import pillButton, { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';

export default function CommentsBtn({ text, handleClick }) {
    const defaultShadow = 'shadow-sm';
    const [shadow, setShadow] = useState(defaultShadow);
    return (
        <button className={`btn btn-primary d-block btn-sm m-1 ${shadow}`}
            onClick={handleClick}
            onMouseOver={() => setShadow('shadow')}
            onMouseLeave={() => setShadow(defaultShadow)}
        >{text}</button>
    )
}
