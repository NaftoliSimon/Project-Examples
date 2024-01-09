import React, { useEffect, useState } from 'react'
import center from '../../../data/Bootstrap/center';
import BlogItemLayout from './BlogItemLayout';
import AddBlogModal from './AddBlogModal';
import myFetch from '../../../functions/myFetch';
import baseUrl from '../../../data/URLpaths';

export default function AddBlog({ loggedIn, setShowLogin, blogsArr }) {
    //If the user is logged in and has created a blog, this component will render a display of that blog before the blog list

    const [loggedInUserBlog, setLoggedInUserBlog] = useState(null);
    const [show, setShow] = useState(null); //show add blog modal

    useEffect(() => {
        if (loggedIn) {
            const found = blogsArr.find(blog => blog.userId === loggedIn.userId); //Search through all the current blogs in the blogs list (this will usual be 6 blogs, as that is what the default)
            if (!found) {
                myFetch(`${baseUrl}/blog/${loggedIn.userId}`, setLoggedInUserBlog);
                // console.log('data base fetch done');
            } else {
                setLoggedInUserBlog(found);
                // console.log('linear search done');
            }
        }
    }, [loggedIn, blogsArr])

    const blogDisplay = <BlogItemLayout blog={loggedInUserBlog} />;
    return (<>
        {loggedIn && !loggedInUserBlog && <AddBlogModal show={show} setShow={setShow} loggedIn={loggedIn} />} {/*if you are logged in but you don't have a blog yet */}
        <div className={`${center} p-3`}>
            {loggedInUserBlog && blogDisplay}
        </div>
    </>
    )
}
