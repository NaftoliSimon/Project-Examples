import React from 'react'
import center from '../../../../data/Bootstrap/center';
import { links } from '../../../../data/URLpaths';
import useCustomNav from '../../../../hooks/navigate';

export default function Icon() {
    const navigate = useCustomNav();

    //If primary background color is dark, set 'color = white' else set 'color = black' (see Colors.scss $secondary for details). 
    const color = 'white';
    // const color = 'black';

    return (
        <div onClick={() => navigate(links.Blogs, true)} className={`me-3 ${center} pointer`}>
            <img src={`../../Icons/blog-icon-${color}.png`} alt="Blog-Logo" width="50" height="50" className='img-thumbnail bgColor-primary border-0 mr-3 p-0' />
        </div>
    )
}
//