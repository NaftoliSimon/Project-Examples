import React from 'react'
import Icon from './Icon';
import { links } from '../../../data/URLpaths';
import LinksList from './LinksList';

export default function Navbar() {
    return (
        <>
            <ul className={`col col-sm nav p-0`}>
                <Icon />
                <LinksList links={links}/>
            </ul>

        </>
    )
}
