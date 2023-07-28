import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export default function Eye({ setVisible, visible }) {
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const eyeNoSlashIcon = (
    <BsEyeFill
      size={20}
      className={`pointer`}
      onMouseDown={show}
      onMouseUp={hide}
      onMouseLeave={hide}
      onClick={isMobile ? () => setVisible(!visible) : undefined}
    />
  );

  const eyeSlashIcon = (
    <BsEyeSlashFill
      size={20}
      className={`pointer`}
      onMouseDown={show}
      onMouseUp={hide}
      onMouseLeave={hide}
      onClick={isMobile ? () => setVisible(!visible) : undefined}
    />
  );

  return (
    <div className={`eye-icon pointer`}>
      <div className={`eye-signUp bg-transparent`}>
        {visible ? eyeSlashIcon : eyeNoSlashIcon}
      </div>
    </div>
  );
}
