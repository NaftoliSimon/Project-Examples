import React from 'react'
import Icon from './Icon';
import DropdownComponent from './DropdownComponent'
import hide, { show } from '../../../../data/Bootstrap/hide';
import center from '../../../../data/Bootstrap/center';
import { links } from '../../../../data/URLpaths';
import LinksList from './LinksList';

export default function Navbar() {
    return (
        <>
            <ul className={`col col-sm nav p-0`}>
                <Icon />
                <LinksList links={links} style={show.lg_xl}/>
                <div className={`${center} ${hide.lg_xl}`}>
                    <DropdownComponent />
                </div>
            </ul>

        </>
    )
}
