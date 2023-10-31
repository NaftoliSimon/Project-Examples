import React, { useEffect, useState } from 'react'
import center from '../../../data/Bootstrap/center';
import BlogItemLayout from './BlogItemLayout';
import AddBlogModal from './AddBlogModal';
import myFetch from '../../../functions/myFetch';
import baseUrl from '../../../data/URLpaths';

export default function AddBlog({ loggedIn, setShowLogin, blogsArr }) {
    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(null); //show add blog modal

    // const openLoginModal = () => setShowLogin('You Must Log In To View Your Blog');
    function openAddBlog() {
        setShow(true);
        //TODO: open add Blog Modal form to add blog to database (companyName, website, ect, see db for details)
    }
    // const openModal = loggedIn ? openAddBlog : openLoginModal;

    useEffect(() => {
        if (loggedIn) {
            // setLoggedInUserBlog(blogsArr.find(blog => blog.userId === loggedIn.userId));
            myFetch(`${baseUrl}/blog/${loggedIn.userId}`, setLoggedInUserBlog); //TODO: get loggedInUserBlog from parent state in App.js
        }
    }, [loggedIn, blogsArr])

    const blogDisplay = <BlogItemLayout blog={loggedInUserBlog} />;
    return (<>
        {/* <h4 className='text-center p-0 m-0 mt-2'>Log In / Sign Up to View Your Blog</h4> */}
       {loggedIn && !loggedInUserBlog && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn}/>} {/*if you are logged in but you don't have a blog yet */}
        <div className={`${center} p-3`}>
            {/* {loggedInUserBlog ?  blogDisplay : invisibleBlogDisplay} */}
            {loggedInUserBlog &&  blogDisplay }
        </div>
    </>
    )
}
