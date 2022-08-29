import React from 'react'
import Navbar from './Navbar'
import bgColor from '../../data/backgroundColor';
export default function Header() {
  return (<>
    <header className={`sticky-top p-3 mb-2 bg-${bgColor} border-bottom`}>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
          <h1 className='col text-center'>My Blog Website</h1>
          <div className='col text-end d-none d-sm-block'>Naftoli Simon</div>
        </div>
      </div>
    </header>
  </>)
}
