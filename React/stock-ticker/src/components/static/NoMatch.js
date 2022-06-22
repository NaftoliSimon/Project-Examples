import React from 'react'
import pathLinks from '../../data/pathLinks'

export default function NoMatch() {
  const { companies } = pathLinks;
  return (
    <>
      <div className='text-center m-4 fs-1 text-danger'>404 - Page Not Found</div>
      <div className='d-flex justify-content-center'>
        <a className='text-center btn btn-primary' role="button" href={companies}>Return Home</a>
      </div>
    </>
  )
}
