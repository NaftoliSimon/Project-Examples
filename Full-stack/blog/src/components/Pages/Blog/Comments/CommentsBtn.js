import React, { useState } from 'react'
import pillButton, { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';

export default function CommentsBtn({ text, handleClick }) {
    const defaultShadow = 'shadow-sm';
    const [shadow, setShadow] = useState(defaultShadow);
    return (
        <button className={`d-block btn button post-btn btn-sm m-1 ${shadow} ${pillButton}`}
            onClick={handleClick}
            onMouseOver={() => setShadow('shadow')}
            onMouseLeave={() => setShadow(defaultShadow)}
        >{text}</button>
    )
}
