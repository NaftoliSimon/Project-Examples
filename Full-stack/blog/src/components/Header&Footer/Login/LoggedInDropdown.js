/* This file uses react-bootstrap instead of regular bootstrap. */
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {  BsPencilFill, BsPersonCircle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';
import DropdownItem from '../Navbar/DropdownItem';
import logOut from '../../../functions/logOut';

function IconDropdown({ setLoggedIn, blogsArr, loggedIn, setShowLogin, loggedInBlog }) { //Logged in dropdown for larger screens (smaller screen dropdown can be found in Navbar/Dropdown/DropdownComponent.js)
    
    const [show, setShow] = useState(false); //set modal show

    const navigate = useCustomNav()
    const openAddBlog =  loggedInBlog ? () => navigate(`${links.blogs}/${loggedInBlog.userId}`) : () => setShow(true); //if logged in user has already created his blog page then navigate to that page, else show the modal to enter the new blog page info
    const addBlogText = !loggedInBlog ? 'Start Blogging' : 'Your Blog';
    return (<>
        <Dropdown className='loggedInIcon'>
            <Dropdown.Toggle as={'div'} className='rounded-circle pointer'><BsPersonCircle size={45} /></Dropdown.Toggle>
            <Dropdown.Menu>
                <DropdownItem onClick={openAddBlog} icon={<BsPencilFill />} text={addBlogText} />
                <DropdownItem onClick={() => logOut(setShowLogin, setLoggedIn)} icon={<FiLogOut />} text={'Log Out'} />
            </Dropdown.Menu>
        </Dropdown>
        {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />}
    </>);
}

export default IconDropdown;
