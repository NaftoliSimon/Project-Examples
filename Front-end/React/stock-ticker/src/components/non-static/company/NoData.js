import React from 'react'
import pathLinks from '../../../data/pathLinks';
import ButtonLink from '../ButtonLink';

export default function NoData() {
  const { companies } = pathLinks;
  return (
    <div className='container'>
      <div className='text-center fs-1 p-3 '>No Data Found</div>
      <ButtonLink text='Return to Search' link={companies} />
    </div>
  )
}
