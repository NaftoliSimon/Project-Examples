import React from 'react'

export default function NavLink({ text, link }) {
    return (
        <li className="nav-item">
            <a className="nav-link active" href={link}>{text}</a>
        </li>
    )
}
