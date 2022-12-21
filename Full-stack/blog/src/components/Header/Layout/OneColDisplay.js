import React from 'react'
import Author from './Author';
import Navbar from './Navbar/Navbar'
import Title from './Title';

export default function OneColDisplay() {
  const hidden_sm_xs = 'd-none d-md-inline'; //hidden only on sm and xs screen sizes
  return (
    <div className={`container ${hidden_sm_xs} pt-0 pb-0 pe-4`}>
        <div className={`row ps-2 pe-2`}>
          <Navbar />
          <Title/>
          <Author/>
        </div>
      </div>
  )
}
