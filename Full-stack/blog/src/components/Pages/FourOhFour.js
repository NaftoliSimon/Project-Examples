import React from 'react';
import { show } from '../../data/Bootstrap/hide';
import { links } from '../../data/URLpaths';
import ButtonLink from '../reuseable/ButtonLink';
import DangerIcon from '../reuseable/AlertIcon';
import { Alert } from 'react-bootstrap';
import center from '../../data/Bootstrap/center';

export default function FourOhFour() {
  return (
    <div className={`${center} my-5`}>
      <Alert variant='danger' className={`p-0 m-3 alert-danger`} style={{ opacity: '90%', width: '30em' }}>
        <h2 className='text-center m-3 fw-bold fs-1'>
          {/* <span className='d-block'>404 Error</span> */}
          <DangerIcon size={50} />Page Not Found
        </h2>
        <ButtonLink text="Return Home" link={links.blogs} variant={'danger'}></ButtonLink>
      </Alert>
    </div>)
}