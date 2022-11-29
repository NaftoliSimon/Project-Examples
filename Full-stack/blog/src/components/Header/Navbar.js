import React from 'react'
import Icon from './Icon';
import NavLink from './NavLink';

export default function Navbar() {
    return (
        <ul className="col-sm nav">
            <Icon/>
            <NavLink text='Blogs' link={"/blogs"} />
            <NavLink text='About' link={"/about"} />
        </ul>
    )
}
