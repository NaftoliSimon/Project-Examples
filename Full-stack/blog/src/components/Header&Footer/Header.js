import React from 'react'
import Author from '../Header&Footer/Layout/Author';
import Navbar from '../Header&Footer/Layout/Navbar/Navbar';
import Title from '../Header&Footer/Layout/Title';
export default function Header() {

  //TODO: get rid of title display on two separate lines for all screen sizes

  return (<>
    <header className={`sticky-top ps-3 pe-3 mb-2 bgColor-primary color-secondary-reverse border-bottom`}>
      <div className={`row pb-1 ps-2 pe-2`}>
        <Navbar />
        <Title />
        <Author />
      </div>
    </header>
  </>)
}
