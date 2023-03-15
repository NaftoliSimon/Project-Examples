import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import AddBlogModal from '../AddBlogModal';

export default function SelectedBlog({ selectedBlog, loggedIn }) {
    //TODO: add the ability to edit blog info if logged in and it is your blog
    const [show, setShow] = useState(null); //show update blog modal
    const { name, website, companyName, userId } = selectedBlog;
    // const savedUpdateData = {website, companyName}
    const linkStyle = `fst-italic bgColor-primaryLight link-color`;
    const editInfoModal = <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} savedUpdateData={{website, companyName}}/>;
    const editInfoToggle = <Button className='button m-2' onClick={() => setShow(true)} >Edit Your Info</Button>
    return (<>
        <div className={`h3 text-center block p-2 bgColor-primaryLight color-primary`}>
            <span className='d-block display-1'>{name}</span>
            <span className='d-block'>{companyName}</span>
            <span className='d-block' >
                <a target='_blank' rel="noreferrer" className={linkStyle} href={addHttps(website)}>{website}</a>
            </span>
            {userId === loggedIn.userId && editInfoToggle}
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