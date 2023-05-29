import React, { useState } from 'react';
import center from '../data/Bootstrap/center';
import useCustomNav from '../hooks/navigate';
import blogListLocation from '../data/scrollToHeight';
import pillButton from '../data/Bootstrap/pillButton';

export default function ButtonLink({ text, link, large = false }) { //for a large button, pass in true
    const defaultShadow = 'shadow-sm';
    const [shadow, setShadow] = useState(defaultShadow);
    const navigate = useCustomNav();
    let size = 'm-2'
    // if (large) {
    //     size = 'm-3 btn-lg'
    // }
    const scrollToHeight = text === 'Return to Blogs' ? blogListLocation : null; //null defaults to top of page
    return (
        <div className={`pb-3 container ${center}`}>
            <div className={`btn button ${shadow} ${center} ${size} ${pillButton}`}
                onMouseOver={() => setShadow('shadow')}
                onMouseLeave={() => setShadow(defaultShadow)}
                onClick={() => navigate(link, scrollToHeight)} role="button">{text}</div>
        </div>
    )
}
