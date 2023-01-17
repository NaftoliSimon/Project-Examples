import React from 'react';
import center from '../data/Bootstrap/center';

export default function ButtonLink({ text, link, large = false }) { //for a large button, pass in true
    let size = 'm-2'
    if (large) {
        size = 'm-3 btn-lg'
    }
    return (
        <div className={`pb-3 container ${center}`}>
            <a className={`btn button  ${center} ${size}`} href={link} role="button">{text}</a>
        </div>
    )
}
