import React from 'react';
import useCustomNav from '../../../hooks/navigate';
import blogListLocation from '../../../data/scrollToHeight';

export default function NavLink({ text, link, icon, style = '' }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    const scrollToHeight = text.toLowerCase() === 'blogs' ? blogListLocation : null; //null defaults to top of page
    
    const textDisplay = <span>{text}</span>
    const iconDisplay = <span className='pe-2'>{icon}</span>
    const display = icon ? <>{iconDisplay}{textDisplay}</> : textDisplay;
    
    const internalLink = <div className="nav-link text-capitalize" onClick={() => navigate(link, scrollToHeight)}>{display}</div>;
    const externalLink = <a className="nav-link text-capitalize" href={link} target="_blank" rel="noreferrer">{display}</a>;
    return (
        <li className={`nav-item d-flex pt-1 ${style}`}>
            {link.startsWith('https://') ? externalLink : internalLink}
        </li>
    )
}
