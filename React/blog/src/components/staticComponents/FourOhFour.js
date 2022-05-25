import './FourOhFour.css';
import React from 'react';
import { Link } from 'react-router-dom'

export default function FourOhFour() {
  return (
    <div className='errorMsg'>
      <div >404 - Page Not Found</div>
      <Link className='home link' to="blogs">Return Home</Link>
    </div>)
}
