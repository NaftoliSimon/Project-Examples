import React from 'react'
import linkedinProfile from '../../../data/external-links/linkedinUrl'

export default function Author() {
  return (
    <div className='col d-flex flex-row-reverse p-0'>
      <a className={`text-end nav-link pt-2 me-2`} href={linkedinProfile}>Naftoli Simon</a>
    </div>
  )
}
