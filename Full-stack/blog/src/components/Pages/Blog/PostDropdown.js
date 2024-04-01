import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './PostDropdown.scss';
import DeleteModal from '../../reuseable/DeleteModal';
import baseUrl from '../../../data/URLpaths';
import { useParams } from 'react-router-dom';

export default function PostDropdown({ setShowEditPost, postId }) {
    const toggleStyle = `p-0 m-0`; //see App.css for post-dropdown positioning
    const [modalShow, setModalShow] = useState(false); // show/hide the delete posts confirmation modal
    const { blogId } = useParams();
    const deletePostUrl = `${baseUrl}/postInfo/delete/${blogId}/${[postId]}`;

    return (<>
        <Dropdown className='d-flex flex-row-reverse post-dropdown'>
            <Dropdown.Toggle variant={''} className={toggleStyle} > {/*variant="" removes default react bootstrap color (bootstrap primary) */}
                <BsThreeDotsVertical size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu className='z'>
                <Dropdown.Item onClick={() => setShowEditPost(true)}>Edit</Dropdown.Item>
                <Dropdown.Item onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <DeleteModal type={'Post'} deleteUrl={deletePostUrl}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>)
}
