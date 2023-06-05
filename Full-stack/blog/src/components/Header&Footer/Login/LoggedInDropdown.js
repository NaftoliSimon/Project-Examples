/* This file uses react-bootstrap instead of regular bootstrap. */
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPencil, BsPencilFill, BsPersonCircle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';
import DropdownItem from '../Navbar/DropdownItem';
import logOut from '../../../functions/logOut';

function IconDropdown({ setLoggedIn, blogsArr, loggedIn, setShowLogin }) { //Logged in dropdown for larger screens (smaller screen dropdown can be found in Navbar/Dropdown/DropdownComponent.js)
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(false); //set modal show
    useEffect(() => {
        if (loggedIn) {
            setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
        }
    }, [loggedIn, blogsArr]);

    const navigate = useCustomNav()
    const openAddBlog =  loggedInUserBlog ? () => navigate(`${links.blogs}/${loggedInUserBlog.userId}`) : () => setShow(true); //if logged in user has already created his blog page then navigate to that page, else show the modal to enter the new blog page info
    const addBlogText = !loggedInUserBlog ? 'Start Blogging' : 'Your Blog';
    return (<>
        <Dropdown className='loggedInIcon'>
            <Dropdown.Toggle as={'div'} className='rounded-circle pointer'><BsPersonCircle size={35} /></Dropdown.Toggle>
            <Dropdown.Menu className='backgroundImage-primary'>
                <DropdownItem onClick={openAddBlog} icon={<BsPencilFill />} text={addBlogText} />
                <DropdownItem onClick={() => logOut(setShowLogin, setLoggedIn)} icon={<FiLogOut />} text={'Log Out'} />
            </Dropdown.Menu>
        </Dropdown>
        {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />}
    </>);
}

export default IconDropdown;
