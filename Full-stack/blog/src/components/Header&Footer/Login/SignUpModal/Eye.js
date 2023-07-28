import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import isMobile from '../../../../data/isMobile';

export default function Eye({ setVisible, visible }) {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const eyeNoSlashIcon = (
        isMobile ? //if device doesn't have a mouse (is mobile)... 
            <BsEyeFill size={20} className={`pointer`} onClick={show} /> : //make eye icon show/hide password on click...
            <BsEyeFill size={20} className={`pointer`} onMouseDown={show} onMouseUp={hide} onMouseLeave={hide} /> //else make eye icon show password when icon is being held down
    );

    const eyeSlashIcon = (
        isMobile ?
            <BsEyeSlashFill size={20} className={`pointer`} onClick={hide} /> :
            <BsEyeSlashFill size={20} className={`pointer`} onMouseDown={show} onMouseUp={hide} onMouseLeave={hide} />
    );

    return (
        <div className={`eye-icon pointer`}>
            <div className={`eye-signUp bg-transparent`}>
                {visible ? eyeSlashIcon : eyeNoSlashIcon}
            </div>
        </div>
    );
}
