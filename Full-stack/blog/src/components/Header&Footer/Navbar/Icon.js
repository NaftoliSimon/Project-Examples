import React from 'react'
import center from '../../../data/Bootstrap/center';
import { links, navBaseUrl } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import hide, { show } from '../../../data/Bootstrap/hide';
import { TbSquareLetterB } from "react-icons/tb";

export default function Icon({ style }) {
    const navigate = useCustomNav();

    //If primary background color is dark, set 'color = white' else set 'color = black' (see Colors.scss $secondary for details). 
    // const color = 'white';
    // const color = 'black';
    const color = 'blue';
    const size = 55;
    // const image = `../Icons/blog-icon-${color}.png`;
    const image = `../Icons/blogLogo5.png` //`../Icons/blogLogoTitle2.png`//`../Icons/blogIcon.png`
    const imgStyle = `img-thumbnail border-0 mr-3 p-0 ${center} rounded-5`; //TODO: crop image
    return (<>
        <a className={`me-3 pt-0 pointer ${style} ${show.lg_xl} ${center} logoLink`} href={`${navBaseUrl}${links.blogs}`}> {/* onClick={() => navigate(`${links.blogs}`) */}
            {/* <img src={image} alt="Blog-Spot-Logo" width={size} height={size} className={imgStyle} /> */}
            <TbSquareLetterB size={50} className={`logoStyle`}/>
        </a>
        <a className={`col m-0 p-0 pointer ${style} ${hide.lg_xl}`} href={`${navBaseUrl}${links.blogs}`}>
            {/* <img src={image} alt="Blog-Spot-Logo" width={size} height={size} className={`${imgStyle} mt-1`} /> */}
            <TbSquareLetterB size={50} className={`logoStyle pt-1`}/>
        </a>
    </>)
}