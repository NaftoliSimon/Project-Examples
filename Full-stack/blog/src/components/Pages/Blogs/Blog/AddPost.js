import React from 'react'

export default function AddPost() {
    const titleStyle = `h6 text-capitalize text-decoration-underline`;
    return (
        <div className='w-100 border bg-danger text-center'>
            <div>ADD POST GOES HERE</div>
            <span className={`d-block text-center ${titleStyle}`}>title</span>
            <span className='d-block text-center'>body</span>
            {/* <button className='btn button'>Button</button> */}
        </div>
    )
}
