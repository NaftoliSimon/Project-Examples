import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export default function Eye({ setVisible, visible }) {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const eyeNoSlashIcon = (
        isMobile ? 
        <BsEyeFill size={20} className={`pointer`} onClick={hide}/> : 
        <BsEyeFill size={20} className={`pointer`} onMouseDown={show} onMouseUp={hide} onMouseLeave={hide} />
    );

    const eyeSlashIcon = (
        isMobile ? 
        <BsEyeSlashFill size={20} className={`pointer`} onClick={show}/> : 
        <BsEyeSlashFill size={20} className={`pointer`} onMouseDown={show} onMouseUp={hide} onMouseLeave={hide} />
    );

    return (<>
        {/* {!isMobile &&  */}
        <div className={`eye-icon pointer`}>
            <div className={`eye-signUp bg-transparent`}>
                {visible ? eyeSlashIcon : eyeNoSlashIcon}
            </div>
        </div>
        {/* } */}
    </>);
}
