import React from 'react';
import { show } from '../../data/Bootstrap/hide';
import { links } from '../../data/URLpaths';
import ButtonLink from '../reuseable/ButtonLink';
import { BsExclamationTriangleFill } from 'react-icons/bs';

export default function FourOhFour() {
  return (<div className='pb-5 mb-5'>
    <div className='text-center m-5 text-danger fw-bold fs-xxl textBorder'>
      {/* <span className='d-block'>404 Error</span> */}
      <span className='mb-5'><BsExclamationTriangleFill className='pb-2' size={70}/> </span>Page Not Found
    </div>
    <ButtonLink text="Return Home" link={links.blogs} large={true}></ButtonLink>
    <div className={`${show.lg_xl} pb-4`}></div> {/*This empty div is added to take up space so that footer appears at bottom - there are probably better ways to fix this issue */}
  </div>)

}
