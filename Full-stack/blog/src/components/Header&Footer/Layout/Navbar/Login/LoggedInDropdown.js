/* This file uses react-bootstrap instead of regular bootstrap. */
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPencil, BsPersonCircle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'
import { Navigate, useNavigate } from 'react-router-dom';
import { links } from '../../../../../data/URLpaths';
import useCustomNav from '../../../../../hooks/navigate';
import AddBlogModal from '../../../../Pages/Blogs/AddBlogModal';

function IconDropdown({ setLoggedIn, blogsArr, loggedIn }) {
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(false); //set modal show
    useEffect(() => {
        if (loggedIn) {
            setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
        }
    }, [loggedIn]);
    const icon = <Dropdown.Toggle className='bg-secondary rounded-circle'><BsPersonCircle size={30} /></Dropdown.Toggle>
    function logOut() {
        localStorage.removeItem('loggedInUser');
        setLoggedIn(false);
        window.location.reload(false);//reloads page (to remove all elements that should only show when logged in) 
    }
    const navigate = useCustomNav()
    function openAddBlog() {
        if (loggedInUserBlog) {
            navigate(`${links.Blogs}/${loggedInUserBlog.id}`);
        } else {
            setShow(true)
        }
    }
    //TODO: if the user is logged in but has no blogs yet the 'Your Blog' dropdown item doesn't do anything. This should pop up the modal to start blogging (see welcome or blog page buttons)
    return (<>
        <Dropdown>
            <Dropdown.Toggle as={'div'} className='bg-secondary rounded-circle pointer'><BsPersonCircle size={30} /></Dropdown.Toggle>
            <Dropdown.Menu className='backgroundImage-primary'>
                <Dropdown.Item className='dropdown' onClick={() => openAddBlog()}>
                    <BsPencil /> <span className='ps-1'> {!loggedInUserBlog ? 'Start Blogging' : 'Your Blog'}</span>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown' onClick={logOut}>
                    <FiLogOut /> <span className='ps-1'> Log Out</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn}/>}
    </>);
}

export default IconDropdown;
