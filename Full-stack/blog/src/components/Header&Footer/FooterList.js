import React from 'react'
import NavLink from './Navbar/NavLink';

export default function FooterList({links, linkIcons, justify, title}) {
    // console.log('Object.entries(links):', Object.entries(links));
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
//<div key={key}>{linkIcons[key]}<a href={value}>{key}</a></div>