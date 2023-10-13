import React from 'react';
import { show } from '../../data/Bootstrap/hide';
import { links } from '../../data/URLpaths';
import ButtonLink from '../reuseable/ButtonLink';
import { BsExclamationTriangleFill } from 'react-icons/bs';
import DangerIcon from '../reuseable/DangerIcon';

export default function FourOhFour() {
  return (<div className='pb-5 mb-5'>
    <h2 className='text-center m-5 fw-bold fs-1 bsAlert '>
      {/* <span className='d-block'>404 Error</span> */}
      <DangerIcon size={50}/>Page Not Found
    </h2>
    <ButtonLink text="Return Home" link={links.blogs} variant={'danger'}></ButtonLink>
    <div className={`${show.lg_xl} pb-4`}></div> {/*This empty div is added to take up space so that footer appears at bottom - there are probably better ways to fix this issue */}
  </div>)

}
