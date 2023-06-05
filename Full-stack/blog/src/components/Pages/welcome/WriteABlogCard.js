import React, { useEffect, useState } from 'react'
import AddBlogModal from '../BlogList/AddBlogModal';
import DefaultCard from './Card';
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';

export default function WriteABlogCard({ loggedIn, setShowLogin, blogsArr }) {
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(null); //show add blog modal
    const navigate = useCustomNav();

    const openLoginModal = () => setShowLogin('You Must Log In To Blog');
    const openAddBlog = loggedInUserBlog ? () => navigate(`${links.blogs}/${loggedInUserBlog.userId}`) : () =>  setShow(true);
    const handleClick = loggedIn ? openAddBlog : openLoginModal;
    useEffect(() => {
        if (loggedIn) {
            setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
        }
    }, [loggedIn, blogsArr])

    const writeText = 'Write your own personal Blog for other users to read. All you need to do is simply sign up or log in to your account to begin.'
    return (<>
        {loggedIn && !loggedInUserBlog && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />} {/*if you are logged in but you don't have a blog yet */}
        <DefaultCard header={'Write A Blog'} text={writeText} buttonText={'Write A Blog'} onButtonClick={handleClick} />
    </>
    )
}
