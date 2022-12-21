import React from 'react'

export default function Author() {
  const linkednProfile = 'https://www.linkedin.com/in/naftoli-simon-174b20206/';
  return (
    <a className={`col text-end nav-link pt-2`}  href={linkednProfile}>Naftoli Simon</a>
  )
}
