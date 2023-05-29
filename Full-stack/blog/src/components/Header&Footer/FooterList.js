import React from 'react'
import NavLink from './Navbar/NavLink'

export default function FooterList({links, linkIcons, justify, title}) {
    return (
        <>
            <h5 className={justify}>{title}</h5>
            <ul className={`list-group  mb-3`}>
                {Object.entries(links).map(([key, value]) => (
                    <NavLink key={key} text={key} link={value} icon={linkIcons[key]} />
                ))}
            </ul>
        </>
    )
}
