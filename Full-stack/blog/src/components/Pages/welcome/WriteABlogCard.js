import React, { useEffect, useState } from 'react'
import AddBlogModal from '../BlogList/AddBlogModal';
import DefaultCard from './Card';
import baseUrl, { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import myFetch from '../../../functions/myFetch';
import { writeIcon } from '../../../data/welcomeCardConsts';

export default function WriteABlogCard({ loggedIn, setShowLogin, blogsArr, width, cardColor }) { //default width for DefaultCard is 18em (see Card,js)
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(null); //show add blog modal
    const navigate = useCustomNav();

    const openLoginModal = () => setShowLogin('You Must Log In To Blog');
    const openAddBlog = loggedInUserBlog ? () => navigate(`${links.blogs}/${loggedInUserBlog.userId}`) : () => setShow(true);
    const handleClick = loggedIn ? openAddBlog : openLoginModal;
    useEffect(() => {
        if (loggedIn) { //TODO: get the loggedInUserBlog from the parent state in App.js, instead of fetching it again here
            setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
            if (loggedInUserBlog === -1 || !loggedInUserBlog) {
                myFetch(`${baseUrl}/blog/${loggedIn.userId}`, setLoggedInUserBlog);
            }
        }
    }, [loggedIn, blogsArr])

    const writeText = 'Write your own personal Blog for other users to read. All you need to do is simply sign up or log in to your account to begin.'
    return (<>
        {loggedIn && !loggedInUserBlog && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />} {/*if you are logged in but you don't have a blog yet */}
        <DefaultCard cardColor={cardColor} header={'Write A Blog'} text={writeText} buttonText={'Write A Blog'} icon={writeIcon} width={width} onButtonClick={handleClick} />
    </>
    )
}
