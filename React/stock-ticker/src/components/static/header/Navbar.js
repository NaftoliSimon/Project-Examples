import React from 'react'
import pathLinks from '../../../data/pathLinks'
import NavLink from './NavLink';

export default function Navbar() {
    const { companies, about } = pathLinks;
    return (
        <ul className="col-sm text-start nav">
            <NavLink text='Companies' link={companies} />
            <NavLink text='About' link={about} />
        </ul>
    )
}
