import React from 'react'
import center from '../../../data/Bootstrap/center';
import { links, navBaseUrl } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import hide, { show } from '../../../data/Bootstrap/hide';

export default function Icon({ style }) {
    const navigate = useCustomNav();

    //If primary background color is dark, set 'color = white' else set 'color = black' (see Colors.scss $secondary for details). 
    // const color = 'white';
    // const color = 'black';
    const color = 'blue';

    return (<>
        <a className={`me-3 ${center} pointer ${style} ${show.lg_xl}`} href={`${navBaseUrl}${links.blogs}`}> {/* onClick={() => navigate(`${links.blogs}`) */}
            <img src={`../Icons/blog-icon-${color}.png`} alt="Blog-Logo" width="50" height="50" className='img-thumbnail bgColor-primary border-0 mr-3 p-0' />
        </a>
        <a className={`col m-0 p-0 pointer ${hide.lg_xl}`} href={`${navBaseUrl}${links.blogs}`}>
            <img src={`../Icons/blog-icon-${color}.png`} alt="Blog-Logo" width="50" height="50" className='img-thumbnail bgColor-primary border-0 m-0 p-0' />
        </a>
    </>)
}