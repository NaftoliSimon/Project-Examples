import React from 'react'
import pathLinks from '../../data/pathLinks';
import ButtonLink from '../non-static/ButtonLink';

export default function about() {
  const { stockApi, companies } = pathLinks;
  return (
    <div className='container'>
      <h2 className='text-center'>About</h2>
      <p className='text-center fs-5'>Look up Stock info for any company
        found in this API:
        <a className='link-secondary d-block' href={stockApi}>{stockApi}</a>
        This website was made with React, React Router, and Bootstrap
      </p>
      <ButtonLink text='Search Companies' link={companies} />
    </div>
  )
}
