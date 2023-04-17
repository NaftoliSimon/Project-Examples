import React from 'react';
import center from '../data/Bootstrap/center';
import useCustomNav from '../hooks/navigate';
import blogListLocation from '../data/scrollToHeight';

export default function ButtonLink({ text, link, large = false }) { //for a large button, pass in true
    const navigate = useCustomNav();
    let size = 'm-2'
    if (large) {
        size = 'm-3 btn-lg'
    }
    const scrollToHeight = text === 'Return to Blogs' ? blogListLocation : null; //null defaults to top of page
    return (
        <div className={`pb-3 container ${center}`}>
            <div className={`btn button  ${center} ${size}`} onClick={() => navigate(link, scrollToHeight)} role="button">{text}</div>
        </div>
    )
}
