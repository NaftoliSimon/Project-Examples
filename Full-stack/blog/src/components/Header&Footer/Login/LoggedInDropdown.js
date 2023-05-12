/* This file uses react-bootstrap instead of regular bootstrap. */
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPencil, BsPencilFill, BsPersonCircle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';
import DropdownItem from '../Navbar/DropdownItem';

function IconDropdown({ setLoggedIn, blogsArr, loggedIn, setShowLogin }) { //Logged in dropdown for larger screens (smaller screen dropdown can be found in Navbar/Dropdown/DropdownComponent.js)
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(false); //set modal show
    useEffect(() => {
        if (loggedIn) {
            // console.log('reset logged in user blog');
            setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
        }
    }, [loggedIn, blogsArr]);
    function logOut() {
        setShowLogin(false); //stops log in modal from popping up
        sessionStorage.removeItem('loggedInUser');
        // sessionStorage.removeItem('SelectedPostId');
        setLoggedIn(false);
        window.location.reload(false);//reloads page (to remove all elements that should only show when logged in) 
    }
    const navigate = useCustomNav()
    function openAddBlog() {
        if (loggedInUserBlog) {
            navigate(`${links.blogs}/${loggedInUserBlog.userId}`);
        } else {
            setShow(true)
        }
    }
    const addBlogText = !loggedInUserBlog ? 'Start Blogging' : 'Your Blog';
    return (<>
        <Dropdown className='loggedInIcon'>
            <Dropdown.Toggle as={'div'} className='rounded-circle pointer'><BsPersonCircle size={35} /></Dropdown.Toggle>
            <Dropdown.Menu className='backgroundImage-primary'>
                <DropdownItem onClick={() => openAddBlog()} icon={<BsPencilFill />} text={addBlogText} />
                <DropdownItem onClick={() => logOut()} icon={<FiLogOut />} text={'Log Out'} />
            </Dropdown.Menu>
        </Dropdown>
        {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />}
    </>);
}

export default IconDropdown;
