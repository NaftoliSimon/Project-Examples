import React from 'react'
import { links } from '../../../../../data/URLpaths'
import ButtonLink from '../../../../ButtonLink'

export default function NoData({selectedBlog}) {
    const message = !selectedBlog ? 'No Blog Found' : 'No Posts';
    return (
        <>
            <div className={`text-center p-4 m-4 fs-1`}>{message}</div>
            <div className='p-4 m-4 mt-0 pt-0 mb-3'>
                <div className='p-4 m-4 mt-0 pt-0 mb-3'> {/* extra divs to take up space for footer to appear at bottom of page */}
                    <ButtonLink text='Return to Blogs' link={links.Blogs} large={true}></ButtonLink>
                </div>
            </div>
        </>
    )
}
