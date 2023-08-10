import React from 'react';
import useCustomNav from '../../../hooks/navigate';
import blogListLocation from '../../../data/scrollToHeight';

export default function NavLink2({ key, text, link, icon }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    const scrollToHeight = text.toLowerCase() === 'blogs' ? blogListLocation : null; //null defaults to top of page

    const textDisplay = <span>{text}</span>
    const iconDisplay = <span className='pe-2'>{icon}</span>
    const display = icon ? <>{iconDisplay}{textDisplay}</> : textDisplay;
    const goTo = () => navigate(link);

    const linkToBlogsPage = <div className="pointer nav-link text-capitalize" onClick={() => navigate(link, blogListLocation)}>
        {display}
    </div>

    const linkToOtherPage = <div className="nav-link text-capitalize" onClick={goTo}>{display}</div>;

    const internalLink = scrollToHeight ? linkToBlogsPage : linkToOtherPage;
    const externalLink = <a className="nav-link text-capitalize" href={link} target="_blank" rel="noreferrer">{display}</a>;
    return (
        <li className={`nav-item d-flex pt-1`} key={key}>
            {link.startsWith('https://') ? externalLink : internalLink}
            {/* {link.startsWith(navBaseUrl) ? internalLink : externalLink} */} {/* TODO: switch out the above line for this line after the website is launched with 'https://' */}
        </li>
    )
}
