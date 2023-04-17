import React from 'react';
import useCustomNav from '../../../../hooks/navigate';
import blogListLocation, { topOfPage } from '../../../../data/scrollToHeight';

export default function NavLink({ text, link, style = '' }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    const scrollToHeight = text === 'Blogs' ? blogListLocation : null; //null defaults to top of page
    return (
        <li className={`nav-item  d-flex pt-1 ${style}`}>
            <div className="nav-link" onClick={() => navigate(link, scrollToHeight)} href={link}>{text}</div>
        </li>
    )
}
