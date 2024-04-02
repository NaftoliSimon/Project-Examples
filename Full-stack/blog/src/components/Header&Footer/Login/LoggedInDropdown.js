/* This file uses react-bootstrap instead of regular bootstrap. */
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPencilFill, BsPersonCircle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';
import DropdownItem from '../Navbar/DropdownItem';
import logOut from '../../../functions/logOut';
import { useLocation, useParams } from 'react-router-dom';

function IconDropdown({ setLoggedIn, blogsArr, loggedIn, setShowLogin, loggedInBlog }) { //Logged in dropdown for larger screens (smaller screen dropdown can be found in Navbar/Dropdown/DropdownComponent.js)

    const [show, setShow] = useState(false); //set modal show
    // const { blogId } = useParams()
    // console.log('params:', blogId);
    const { pathname } = useLocation();
    const isBlogPage = pathname.startsWith(links.blogs) && pathname !== links.blogs; // Check if the current page is a blog page (and not the home/blogs page which is links.blogs)

    const navigate = useCustomNav()
    const openAddBlog = loggedInBlog ? () => {
        const loggedInUrl = `${links.blogs}/${loggedInBlog.userId}`;
        if (pathname !== loggedInUrl) { //if the current url is not the same as the logged in user's url, then navigate to the users url. (If the current url is the same as the logged in user's url, then there is no reason to navigate, since the user is already there. Plus this stops potential unnecessary reloads. See 2 lines below this line)
            navigate(loggedInUrl)
            if (isBlogPage) { window.location.reload() } //Only reload the page if the user is currently on another user's blog page. (This is necessary to fix a bug, where without the reload, the posts from the other user's blogs would be visible underneath the logged in users blog info)
        }
    } : () => setShow(true); //If the logged in user has already created his blog page then navigate to that page, else show the modal to enter the new blog page info as if they were from the loggedIn user's blog

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
