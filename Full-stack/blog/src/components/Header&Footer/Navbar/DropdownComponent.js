import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { linkIcons, links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import blogListLocation from '../../../data/scrollToHeight';
import { BsList, BsPencil, BsPencilFill, BsPersonFillAdd, BsPersonFillUp, BsPersonLinesFill } from 'react-icons/bs';
import { IoReorderFourOutline } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi';
import CustomMenu from './CustomMenu';
import DropdownItem from './DropdownItem';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';


const DropdownComponent = ({ loggedIn, setLoggedIn, setShowLogin, showLogin, setShowSignUp, loggedInUserBlog }) => {
  //TODO: add dark mode to dropdown
  const [show, setShow] = useState(false); //set modal show
  const navigate = useCustomNav();

  const { home, blogs, about } = links;
  const { home: homeIcon, blogs: blogsIcon, about: aboutIcon } = linkIcons;

  function logOut() {
    setShowLogin(false); //stops log in modal from popping up
    setLoggedIn(false);
    window.location.reload(false);//reloads page (to remove all elements that should only show when logged in) 
  }
  function openAddBlog() {
    if (loggedInUserBlog) {
      navigate(`${blogs}/${loggedIn.userId}`);
    } else {
      setShow(true)
    }
  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button className='btn header-button' href="" ref={ref} onClick={e => { e.preventDefault(); onClick(e); }}>
      {loggedIn ? <BsPersonLinesFill size={30} /> : <IoReorderFourOutline size={30} />}
    </button>
  ));

  const logOutItem = <Dropdown.Item className='dropdown' onClick={() => logOut()}>
    <span className='pe-1'><FiLogOut /></span> Log Out
  </Dropdown.Item>
  //TODO: Fix error where YourBlog doesn't work on small screen, and shows start blogging on big screens
  const yourBlog = <Dropdown.Item className='dropdown' onClick={() => openAddBlog()}>
    <span className='pe-1'><BsPencilFill /></span> Your Blog
  </Dropdown.Item>
  // const logOutItem = <DropdownItem onClick={() => logOut()} icon={<span className='pe-1'><FiLogOut /></span>} text={'Log Out'}/>
  // const yourBlog = <DropdownItem onClick={() => openAddBlog()} icon={<span className='pe-1'><BsPencilFill /></span>} text={'Your Blog'}/>

  return (<>
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" />

      <Dropdown.Menu as={CustomMenu} className='backgroundImage-primary'>
        <Dropdown.Header>Links</Dropdown.Header>
        <DropdownItem onClick={() => navigate(home)} icon={homeIcon} text={'Home'} />
        <DropdownItem onClick={() => navigate(blogs, blogListLocation)} icon={blogsIcon} text={'Blogs'} />
        <DropdownItem onClick={() => navigate(about)} icon={aboutIcon} text={'About'} />
        {loggedIn ? <Dropdown.Header>Your Account</Dropdown.Header> : <Dropdown.Header>Sign Up / Login</Dropdown.Header>}
        {loggedIn ? yourBlog : <DropdownItem onClick={() => setShowLogin(true)} icon={<BsPersonFillUp size={20} />} text={'Log In'}/>}
        {loggedIn ? logOutItem : <DropdownItem onClick={() => setShowSignUp(true)} icon={<BsPersonFillAdd size={20} />} text={'Sign Up'} />}
      </Dropdown.Menu>
    </Dropdown>
    {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />}
    </>
  );
};

export default DropdownComponent;
