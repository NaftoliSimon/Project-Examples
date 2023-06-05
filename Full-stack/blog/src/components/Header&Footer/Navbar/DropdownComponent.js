import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { linkIcons, links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import blogListLocation from '../../../data/scrollToHeight';
import { BsPencilFill, BsPersonFillAdd, BsPersonFillUp, BsPersonLinesFill } from 'react-icons/bs';
import { IoReorderFourOutline } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi';
import CustomMenu from './CustomMenu';
import DropdownItem from './DropdownItem';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';
import logOut from '../../../functions/logOut';

const DropdownComponent = ({ loggedIn, setLoggedIn, setShowLogin, showLogin, setShowSignUp, loggedInUserBlog }) => { //TODO: add dark mode to dropdown?
  const { home, blogs, about } = links;
  const { home: homeIcon, blogs: blogsIcon, about: aboutIcon } = linkIcons;
  const navigate = useCustomNav();

  const [show, setShow] = useState(false); //set modal show

  const openAddBlog = loggedInUserBlog ? () => navigate(`${blogs}/${loggedIn.userId}`) : () => setShow(true); //if logged in user has already created his blog page then navigate to that page, else show the modal to enter the new blog page info

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button className='btn header-button' href="" ref={ref} onClick={e => { e.preventDefault(); onClick(e); }}>
      {loggedIn ? <BsPersonLinesFill size={30} /> : <IoReorderFourOutline size={30} />}
    </button>
  ));

  const yourBlog = <DropdownItem onClick={openAddBlog} icon={<BsPencilFill />} text={'Your Blog'} />
  const logOutItem = <DropdownItem onClick={() => logOut(setShowLogin, setLoggedIn)} icon={<FiLogOut />} text={'Log Out'} />
  return (<>
    <Dropdown className='smallScreenDropdown'>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" />

      <Dropdown.Menu as={CustomMenu} className='backgroundImage-primary'>
        <Dropdown.Header>Links</Dropdown.Header>
        <DropdownItem onClick={() => navigate(home)} icon={homeIcon} text={'Home'} />
        <DropdownItem onClick={() => navigate(blogs, blogListLocation)} icon={blogsIcon} text={'Blogs'} />
        <DropdownItem onClick={() => navigate(about)} icon={aboutIcon} text={'About'} />
        {loggedIn ? <Dropdown.Header>Your Account</Dropdown.Header> : <Dropdown.Header>Sign Up / Login</Dropdown.Header>} {/* <Dropdown.Header>{loggedIn ? 'Your Account' : 'Sign Up / Login'}</Dropdown.Header> */}
        {loggedIn ? yourBlog : <DropdownItem onClick={() => setShowLogin(true)} icon={<BsPersonFillUp size={20} />} text={'Log In'} />}
        {loggedIn ? logOutItem : <DropdownItem onClick={() => setShowSignUp(true)} icon={<BsPersonFillAdd size={20} />} text={'Sign Up'} />}
      </Dropdown.Menu>
    </Dropdown>
    {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />}
  </>
  );
};

export default DropdownComponent;