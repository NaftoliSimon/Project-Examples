import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import baseUrl from '../../../data/URLpaths';
import DeleteModal from '../../reuseable/DeleteModal';

export default function BlogDropdown({visibility, setShowEditBlog}) {
    const toggleStyle = `p-0 m-0`; //see App.css for post-dropdown positioning
    const [modalShow, setModalShow] = useState(false); // show/hide the delete blog confirmation modal
    const { blogId } = useParams();
    const deleteBlogUrl = `${baseUrl}/blogs/delete/${blogId}`;

  return (<>
        <Dropdown className={`d-flex flex-row-reverse post-dropdown ${visibility}`}>
            <Dropdown.Toggle variant={''} className={toggleStyle} > {/*variant="" removes default react bootstrap color (bootstrap primary) */}
                <BsThreeDotsVertical size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu className='z'>
                <Dropdown.Item onClick={() => setShowEditBlog(true)}>Edit</Dropdown.Item>
                <Dropdown.Item onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <DeleteModal type={'Blog'} deleteUrl={deleteBlogUrl}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>)
}
