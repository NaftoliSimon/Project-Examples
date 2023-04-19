import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import center from '../../../../data/Bootstrap/center';
import BlogItemLayout from '../BlogItemLayout';
import AddBlogModal from '../AddBlogModal';
import DefaultCard from './Card';
import { links } from '../../../../data/URLpaths';
import { Navigate, useNavigate } from 'react-router-dom';

export default function WriteABlogCard({ loggedIn, setShowLogin, blogsArr}) {
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(null); //show add blog modal
    const navigate = useNavigate();

    const openLoginModal = () => setShowLogin('You Must Log In To Blog');
    function openAddBlog() {
        if(loggedInUserBlog) {
            navigate(`${links.Blogs}/${loggedInUserBlog.id}`);
        } else {
            setShow(true);
        }
        
        //TODO: open add Blog Modal form to add blog to database (companyName, website, ect, see db for details)
    }
    const handleClick = loggedIn ? openAddBlog : openLoginModal;
    useEffect(() => {
        if (loggedIn) {
            setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
        }
    }, [loggedIn])

    const addBlogButton = <Button className='button text-uppercase fs-1' onClick={handleClick}>Your Blog</Button>
    const blogDisplay = <BlogItemLayout blog={loggedInUserBlog} />
    //TODO: Add ability to edit logged in user's blog details (ie website, ect)

    const writeText = 'Write your own personal Blog for other users to read. All you need to do is simply sign up or log in to your account to begin.'
    return (<>
       {loggedIn && !loggedInUserBlog && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn}/>} {/*if you are logged in but you don't have a blog yet */}
        {/* <div className={`${center} m-3 `}>
            {loggedInUserBlog ? blogDisplay : addBlogButton}
        </div> */}
        <DefaultCard header={'Write A Blog'} text={writeText} buttonText={'Write A Blog'} onButtonClick={handleClick}/>
    </>
    )
}
