import React from 'react'

export default function NoData({ selectedBlog }) {
    const message = !selectedBlog ? 'No Blog Found' : 'No Posts';
    return (
        <>
            {!selectedBlog && <div className='p-4 m-4 mb-3'></div>}
            <div className={`text-center p-4 m-4 fs-1`}>{message}</div>
        </>
    )
}
