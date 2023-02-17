import React from 'react'
import Icon from './Icon';
import NavLink from './NavLink';
import DropdownComponent from './DropdownComponent'
import hide, {show} from '../../../../data/Bootstrap/hide';
import center from '../../../../data/Bootstrap/center';
import { links } from '../../../../data/URLpaths';

export default function Navbar() {
    const hideSize = show.lg_xl;
    return (
        <>
            <ul className={`col col-sm nav p-0`}>
                <Icon />
                {Object.entries(links).map(([name, link]) => <NavLink key={name} text={name} link={link} style={hideSize}/>)}
                <div className={`${center} ${hide.lg_xl}`}>
                <DropdownComponent/>
                </div>
            </ul>
            
        </>
    )
}
