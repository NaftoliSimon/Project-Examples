import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (<>
    <header id='header'>
      <nav id='navbar'>
        <Link className='link' to="/blogs">Blogs</Link> | <Link className='link' to="/about">About</Link>
      </nav>
      <h1 className='center'> My Mock Blog Site</h1>
      <div className='author'>Naftoli Simon</div>
    </header>
  </>
  )
}
