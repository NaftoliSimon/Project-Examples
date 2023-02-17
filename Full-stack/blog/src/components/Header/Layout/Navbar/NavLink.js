import React from 'react';
import hide from '../../../../data/Bootstrap/hide';

export default function NavLink({ text, link, style = ''}) { //style is for any additional bootstrap styling to add to the class
    return (
        <li className={`nav-item  d-flex pt-1 ${style}`}>
            <a className="nav-link" href={link}>{text}</a>
        </li>
    )
}
