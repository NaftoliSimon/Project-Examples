import React from 'react';
import center from '../../data/Bootstrap/center';
import useCustomNav from '../../hooks/navigate';

export default function ButtonLink({ text, link, variant = 'primary' }) {
    const navigate = useCustomNav();
    return (
        <div className={`my-4 container ${center}`}>
            <button className={`btn btn-${variant}`}
                onClick={() => navigate(link, text)}>{text}</button>
        </div>
    )
}
