import React, { useState } from 'react';

export default function SocialMediaLinkItem({ link, name, icon }) {
    const [style, setStyle] = useState("");
    const lightenBackground = () => setStyle('icon');
    const unLightenBackground = () => setStyle('');
    return (
        <li className="py-1">
            <div className="d-flex align-items-center">
                <div className={style}>
                {/* <a className={`${style} pointer`} onMouseOver={lightenBackground} onMouseLeave={unLightenBackground} href={link} target="_blank"> */}
                    {icon}
                </div>
                <a href={link} target="_blank" className={`nav-link ml-2 mb-0 ms-2 ${style}`} 
                onMouseOver={lightenBackground} onMouseLeave={unLightenBackground}> {/*See Colors.scss for 'icon' style */}
                    {name}
                </a>
            </div>
        </li>
    );
}
