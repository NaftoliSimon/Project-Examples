import React from 'react';
import useCustomNav from '../../../hooks/navigate';

export default function NavLink({ text, link, icon }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    const linkStyle = `pointer nav-link text-capitalize`;
    const scrollToBlogs = text.toLowerCase() === 'blogs' ? true : false;

    const textDisplay = <span>{text}</span>
    const iconDisplay = <span className='pe-2'>{icon}</span>
    const display = icon ? <>{iconDisplay}{textDisplay}</> : textDisplay;

    const internalLink = <div className={linkStyle} onClick={() => navigate(link, scrollToBlogs)}>{display}</div>;
    const externalLink = <a className={linkStyle} href={link} target="_blank" rel="noreferrer">{display}</a>;
    
    return (
        <li className={`nav-item d-flex pt-1`} key={text}>
            {link.startsWith('https://') ? externalLink : internalLink}
            {/* {link.startsWith(navBaseUrl) ? internalLink : externalLink} */} {/* TODO: switch out the above line for this line after the website is launched with 'https://' */}
        </li>
    )
}
