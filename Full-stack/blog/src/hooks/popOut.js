import { useState } from 'react';

const usePopOut = () => { //Use this hook to add a temporary "pop out" class to an element's class to make it pop out for 3 seconds (see App.scss for .pop & .out classes)
  const [isPopped, setIsPopped] = useState(false);

  const getPopClass = () => (isPopped ? 'pop out' : 'pop'); //pop always needs to be there, otherwise there is no smooth transition in, when pop is removed to make it return to it's original size (see App.scss)

  const handlePopOut = () => {
    setIsPopped(true);

    // Reset the pop state after the transition duration (300ms in this case)
    setTimeout(() => {
      setIsPopped(false);
    }, 300); //3 seconds, this is consistent with the css which is set to transition 3 seconds. (can be updated to take x seconds in the future)
  };

  return {
    getPopClass,
    handlePopOut,
  };
};

export default usePopOut;

/*
Use case example:

import React from 'react';
import usePopOut from './usePopOut';
import './YourComponent.css'; // Make sure to import your CSS file

const YourComponent = () => {
  const { getPopClass, handlePopOut } = usePopOut();

  return (
    <div className={`your-element ${getPopClass()}`}>
      <button onClick={handlePopOut}>Pop Out</button>
    </div>
  );
};

export default YourComponent;

*/
