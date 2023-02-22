import React from 'react'
import center from '../../../data/Bootstrap/center'
import { linkedinProfile } from '../../../data/URLpaths'

export default function Author() {
  return (
    <div className={`col d-flex flex-row-reverse p-0`}>
      <a className={`text-end nav-link ${center}`} href={linkedinProfile}>Naftoli Simon</a>
    </div>
  )
}
