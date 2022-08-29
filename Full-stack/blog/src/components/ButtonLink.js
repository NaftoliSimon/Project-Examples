import React from 'react';
import bgColor from '../data/backgroundColor';
import center from '../data/center';

export default function ButtonLink({ text, link, large = false }) { //for a large button, pass in true
    let size = 'm-2'
    if(large) {
        size = 'm-3 btn-lg'
    }
    return (
        <div className={`pb-3 container ${center}`}>
            <a className={`btn btn-${bgColor} ${center} ${size}`} href={link} role="button">{text}</a>
        </div>
    )
}
