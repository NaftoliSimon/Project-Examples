import React, { useState } from 'react'
import { Tooltip } from 'react-bootstrap';
import { BsMoonStars, BsMoonStarsFill, BsSun, BsSunFill } from 'react-icons/bs'
import ButtonWithTooltip from '../reuseable/ButtonWithTooltip';

export default function DarkModeToggle({ switchTheme, theme }) {
    const moonSize = 25;
    const sunSize = 30;

    let darkMode = theme === 'dark';
    const [onHover, setOnHover] = useState(false);
    const switchMode = () => {
        switchTheme(); //switch dark mode to light or light to dark
        darkMode = theme === 'dark'; //switch sun and moon icons  
    }
    const tooltip = <Tooltip id="DarkModeTooltip">
    <strong>To change Dark/Light mode </strong>
    click here.
  </Tooltip>

    return (<>
        <ButtonWithTooltip button={<div className='pointer pe-2' onClick={switchMode} onMouseOver={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
        {onHover ?
            (darkMode ? <BsMoonStarsFill size={moonSize} /> : <BsSunFill size={sunSize} />) :
            (darkMode ? <BsMoonStars size={moonSize} /> : <BsSun size={sunSize} />)
        }
    </div>} tooltip={tooltip} direction='left'/>
    </>)
}
    
