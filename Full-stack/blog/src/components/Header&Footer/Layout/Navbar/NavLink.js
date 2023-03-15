import React from 'react';
import useCustomNav from '../../../../hooks/navigate';

export default function NavLink({ text, link, style = '' }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    return (
        <li className={`nav-item  d-flex pt-1 ${style}`}>
            <div className="nav-link" onClick={() => navigate(link, true)} href={link}>{text}</div>
        </li>
    )
}
