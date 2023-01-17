import React from 'react'
import TwoColDisplay from './Layout/TwoColDisplay';
import OneColDisplay from './Layout/OneColDisplay';
export default function Header() {

  //TODO: get rid of title display on two seperate lines for all screen sizes

  return (<>
    <header className={`sticky-top ps-3 pe-3 mb-2 bgColor-primary color-secondary-reverse border-bottom`}>

      <TwoColDisplay /> {/* Two column layout for smaller screens */}
      <OneColDisplay /> {/* One column layout for bigger screens */}

    </header>
  </>)
}
