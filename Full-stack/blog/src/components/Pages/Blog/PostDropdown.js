import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function PostDropdown({ setShowEditPost }) {
    const toggleStyle = `p-0 m-0 post-dropdown`; //see App.css for post-dropdown positioning
    return (
        <Dropdown>
            <Dropdown.Toggle variant={''} className={toggleStyle} > {/*variant="" removes default react bootstrap color (bootstrap primary) */}
                <BsThreeDotsVertical size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowEditPost(true)}>Edit</Dropdown.Item>
                <Dropdown.Item >Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
