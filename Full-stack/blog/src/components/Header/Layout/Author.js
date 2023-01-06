import React from 'react'
import linkedinProfile from '../../../data/linkedinUrl'

export default function Author() {
  return (
    <div className='col d-flex flex-row-reverse p-0'>
      <a className={`text-end nav-link author-link pt-2 me-2`} href={linkedinProfile}>Naftoli Simon</a>
    </div>
  )
}
