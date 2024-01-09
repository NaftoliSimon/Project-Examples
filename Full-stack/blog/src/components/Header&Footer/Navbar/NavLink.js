import React from 'react';
import useCustomNav from '../../../hooks/navigate';

export default function NavLink({ text, link, icon }) {
    const navigate = useCustomNav();
    const linkStyle = `pointer nav-link text-capitalize`;

    const textDisplay = <span>{text}</span>
    const iconDisplay = <span className='pe-2'>{icon}</span>
    const display = icon ? <>{iconDisplay}{textDisplay}</> : textDisplay;

    const internalLink = <button className={`${linkStyle} internal-link`} onClick={() => navigate(link, text)}>{display}</button>;
    const externalLink = <a className={linkStyle} href={link} target="_blank" rel="noreferrer">{display}</a>;
    
    return (
        <li className={`nav-item d-flex pt-1`} key={text}>
            {link.startsWith('https://') ? externalLink : internalLink}
            {/* {link.startsWith(navBaseUrl) ? internalLink : externalLink} */} {/* TODO: switch out the above line for this line after the website is launched with 'https://' */}
        </li>
    )
}
