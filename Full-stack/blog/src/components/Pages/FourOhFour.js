import React from 'react';
import { show } from '../../data/Bootstrap/hide';
import ButtonLink from '../ButtonLink';

export default function FourOhFour() {
  return (<div className='pb-5 mb-5'>
    <div className='text-center m-5 fs-1 text-danger'>404 - Page Not Found</div>
    <ButtonLink text="Return Home" link="/blogs" large={true}></ButtonLink>
    <div className={`${show.lg_xl} pb-4`}></div> {/*This empty div is added to take up space so that footer appears at bottom - there are probably better ways to fix this issue */}
  </div>)

}
