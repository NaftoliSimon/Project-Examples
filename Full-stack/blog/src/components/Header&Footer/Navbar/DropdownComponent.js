import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { linkIcons, links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import { BsPencilFill, BsPersonFillAdd, BsPersonFillUp, BsPersonLinesFill } from 'react-icons/bs';
import { IoReorderFourOutline } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi';
import CustomMenu from './CustomMenu';
import DropdownItem from './DropdownItem';
import AddBlogModal from '../../Pages/BlogList/AddBlogModal';
import logOut from '../../../functions/logOut';
import bgLightOrDark from '../../../data/Bootstrap/colors';

const DropdownComponent = ({ loggedIn, setLoggedIn, setShowLogin, showLogin, setShowSignUp, loggedInBlog }) => { //TODO: add dark mode to dropdown?
  const { home, blogs, about } = links;
  const { home: homeIcon, blogs: blogsIcon, about: aboutIcon } = linkIcons;
  const navigate = useCustomNav();

  const [show, setShow] = useState(false); //set modal show

  const openAddBlog = loggedInBlog ? () => navigate(`${blogs}/${loggedIn.userId}`) : () => setShow(true); //if logged in user has already created his blog page then navigate to that page, else show the modal to enter the new blog page info
  const iconSize = 20;
  const toggleIconSize = 30;

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button className={`btn `} ref={ref} onClick={e => { e.preventDefault(); onClick(e); }}>
      {loggedIn ? <BsPersonLinesFill size={toggleIconSize} /> : <IoReorderFourOutline size={toggleIconSize} />}
    </button>
  ));

  const blogsText = 'Blogs';
  const yourBlog = <DropdownItem onClick={openAddBlog} icon={<BsPencilFill />} text={'Your Blog'} />
  const logOutItem = <DropdownItem onClick={() => logOut(setShowLogin, setLoggedIn)} icon={<FiLogOut />} text={'Log Out'} />
  return (<>
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} />

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Header>Links</Dropdown.Header>
        <DropdownItem onClick={() => navigate(home)} icon={homeIcon} text={'Home'} />
        <DropdownItem onClick={() => navigate(blogs, blogsText)} icon={blogsIcon} text={blogsText} />
        <DropdownItem onClick={() => navigate(about)} icon={aboutIcon} text={'About'} />
        {loggedIn ? <Dropdown.Header>Your Account</Dropdown.Header> : <Dropdown.Header>Sign Up / Login</Dropdown.Header>} {/* <Dropdown.Header>{loggedIn ? 'Your Account' : 'Sign Up / Login'}</Dropdown.Header> */}
        {loggedIn ? yourBlog : <DropdownItem onClick={() => setShowLogin(true)} icon={<BsPersonFillUp size={iconSize} />} text={'Log In'} />}
        {loggedIn ? logOutItem : <DropdownItem onClick={() => setShowSignUp(true)} icon={<BsPersonFillAdd size={iconSize} />} text={'Sign Up'} />}
      </Dropdown.Menu>
    </Dropdown>
    {show && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />}
  </>
  );
};

export default DropdownComponent;