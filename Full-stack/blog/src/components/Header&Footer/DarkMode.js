import React, { useState } from 'react'
import { BsMoonStars, BsMoonStarsFill, BsSun, BsSunFill } from 'react-icons/bs'

export default function DarkModeToggle({ switchTheme, theme }) {
    const moonSize = 25;
    const sunSize = 30;

    let darkMode = theme === 'dark';
    const [onHover, setOnHover] = useState(false);
    const switchMode = () => {
        switchTheme(); //switch dark mode to light or light to dark
        darkMode = theme === 'dark';//switch sun and moon icons  
    }
    return (
        <div className='pointer pe-2' onClick={switchMode} onMouseOver={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            {onHover ?
                (darkMode ? <BsMoonStarsFill size={moonSize} /> : <BsSunFill size={sunSize} />) :
                (darkMode ? <BsMoonStars size={moonSize} /> : <BsSun size={sunSize} />)
            }
        </div>
    )
}
