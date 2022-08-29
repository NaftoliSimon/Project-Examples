import React from 'react';
import ButtonLink from '../ButtonLink';

export default function FourOhFour() {
  return (<>
    <div className='text-center m-4 fs-1 text-danger'>404 - Page Not Found</div>
    <ButtonLink text="Return Home" link="/blogs" large={true}></ButtonLink>
  </>)

}
