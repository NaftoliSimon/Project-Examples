import React, { useState } from 'react';

export default function SocialMediaLinkItem({ link, name, icon }) {
    const [style, setStyle] = useState("");
    return (
        <li className="py-1">
            <div className="d-flex align-items-center">
                <div className={style}>
                    {icon}
                </div>
                <a href={link} target="_blank" className="nav-link ml-2 mb-0 ms-2" 
                onMouseOver={() => setStyle('icon')} onMouseLeave={() => setStyle('')}> {/*See Colors.scss for 'icon' style */}
                    {name}
                </a>
            </div>
        </li>
    );
}
