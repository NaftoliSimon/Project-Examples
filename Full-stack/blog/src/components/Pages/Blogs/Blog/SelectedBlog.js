import React, { useState } from 'react';
import AddBlogModal from '../AddBlogModal';

export default function SelectedBlog({ selectedBlog, loggedIn }) {
    //TODO: add the ability to edit blog info if logged in and it is your blog
    const [show, setShow] = useState(null); //show update blog modal
    const { name, website, companyName, userId } = selectedBlog;

    let visibility = loggedIn && userId === loggedIn.userId ? 'visible' : 'invisible';
    const linkStyle = `fst-italic bgColor-primaryLight link-color bg-transparent`;
    const editInfoToggleStyle = `text-decoration-none link-color fs-6 pointer p-0 m-0 ${visibility}`
    const editInfoModal = <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} savedUpdateData={{website, companyName}}/>;
    const editInfoToggle = <a className={editInfoToggleStyle} onClick={() => setShow(true)} >Edit Your Info</a>
    return (<>
        <div className={`h3 text-center block p-2 bgColor-primaryLight color-primary bg-transparent`}>
        {editInfoToggle}
        {/* {userId !== loggedIn.userId && <div className='p-2'></div>} */}
            <span className='d-block display-1'>{name}</span>
            <span className='d-block p-1'>{companyName}</span>
            <span className='d-block' >
                <a target='_blank' rel="noreferrer" className={linkStyle} href={addHttps(website)}>{website}</a>
            </span>
            
            {editInfoModal}
        </div>
    </>)
}

function addHttps(str) {
    const h = 'https://';
    if (!str.startsWith(h)) {
        str = `${h}${str}`
    }
    return str;
}