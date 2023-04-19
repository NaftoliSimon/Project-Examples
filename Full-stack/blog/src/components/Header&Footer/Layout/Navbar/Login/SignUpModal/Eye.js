import React from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export default function Eye({ setVisible, visible }) {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const eyeNoSlashIcon = <BsEyeFill size={20} className={`pointer`} onMouseDown={show} onMouseUp={hide} onMouseLeave={hide} />
    const eyeSlashIcon = <BsEyeSlashFill size={20} className={`pointer`} onMouseDown={show} onMouseUp={hide} onMouseLeave={hide} />
    return (
        <div className={`eye-icon pointer`}>
            <div className={`eye-signUp bg-transparent`}>
                {visible ? eyeSlashIcon : eyeNoSlashIcon}
            </div>
        </div>
    )
}
