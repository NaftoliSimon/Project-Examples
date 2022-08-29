import React from 'react'
import NavLink from './NavLink';

export default function Navbar() {
    return (
        <ul className="col-sm text-start nav">
            <NavLink text='Blogs' link={"/blogs"} />
            <NavLink text='About' link={"/about"} />
        </ul>
    )
}
