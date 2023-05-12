import React, { useState } from 'react';
import AddBlogModal from '../BlogList/AddBlogModal';
import { Card } from 'react-bootstrap';
import ListIcon from '../BlogList/ListIcon';
import { BsBuilding, BsBuildingFill, BsBuildingsFill } from 'react-icons/bs';

export default function SelectedBlog({ selectedBlog, loggedIn }) {
    const [show, setShow] = useState(null); //show update blog modal
    const { name, website, companyName, shortSummary, userId } = selectedBlog;

    let visibility = loggedIn && userId === loggedIn.userId ? 'visible' : 'invisible';
    const linkStyle = `fst-italic bgColor-primaryLight color-primary-reverse link-color bg-transparent`;
    const editInfoToggleStyle = `text-decoration-none link-color fs-6 pointer p-0 m-0 ${visibility}`
    const editInfoModal = <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} savedUpdateData={{ website, companyName, shortSummary }} />;
    const editInfoToggle = <a className={editInfoToggleStyle} onClick={() => setShow(true)} >Edit Your Info</a>
    return (<>
        <Card className='m-5 shadow'>
            <Card.Body>
                <div className={`h3 text-center block p-2 bgColor-primaryLight color-primary-reverse bg-transparent`}>
                    {editInfoToggle}
                    <span className='d-block display-1'>{name}</span>
                    <span className='d-block p-1'>{companyName}</span>
                    <span className='d-block' >
                        <a target='_blank' rel="noreferrer" className={linkStyle} href={addHttps(website)}>{website}</a>
                    </span>
                    <p className='mt-1'>{shortSummary}</p> {/*shortSummary displays here in full. It displays in the bloglist Card with up to five lines which is about 250 character. The server as of writing this comment is set to 350 characters.*/}

                    {editInfoModal}
                </div>
            </Card.Body>
        </Card>
    </>)
}

function addHttps(str) {
    const h = 'https://';
    if (!str.startsWith(h)) {
        str = `${h}${str}`
    }
    return str;
}