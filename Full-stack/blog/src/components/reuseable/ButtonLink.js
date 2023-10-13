import React, { useState } from 'react';
import center from '../../data/Bootstrap/center';
import useCustomNav from '../../hooks/navigate';
import pillButton from '../../data/Bootstrap/pillButton';

export default function ButtonLink({ text, link, variant = 'primary'}) {
    const danger = variant === 'danger' ? 'pillBtnDanger' : '';
    const defaultShadow = 'shadow-sm';
    const [shadow, setShadow] = useState(defaultShadow);
    const navigate = useCustomNav();
    let size = 'm-2'
    return (
        <div className={`pb-3 container ${center}`}>
            <div className={`btn button ${shadow} ${center} ${size} ${pillButton} ${danger}`}
                onMouseOver={() => setShadow('shadow')}
                onMouseLeave={() => setShadow(defaultShadow)}
                onClick={() => navigate(link, text)} role="button">{text}</div>
        </div>
    )
}
