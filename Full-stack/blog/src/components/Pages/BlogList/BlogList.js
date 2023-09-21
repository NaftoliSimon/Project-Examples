import React, { useState } from 'react';
import center from '../../../data/Bootstrap/center';
import AddBlog from './AddBlog';
import BlogItemLayout from './BlogItemLayout';
import Welcome from '../welcome/Welcome';
import { Card } from 'react-bootstrap';
import { scrollToBlogsId } from '../../../data/scrollToHeight'; //id for scrolling to (see hooks/navigate.js)
import DismissibleAlert from '../../reuseable/Alert';
import isMobile from '../../../data/isMobile';

export default function BlogList({ blogsArr, loggedIn, setShowLogin }) {
  const [showAlert, setShowAlert] = useState(false);
  const mxSize = isMobile ? '3' : '5';
  // const variant = 'danger'; //TODO: switch this to 'danger' once database and server are fully working on development mode, also switch card text below
  const emptyBlog = { id: 'id', name: 'Person', website: 'website.com', companyName: 'Company', userId: 'noBlogsFound', shortSummary: 'This is a placeholder. No Data Found. This is a placeholder. No Data Found. This is a placeholder. No Data Found. ' }
  const createEmptyBlogs = (numBlogs) => Array.from({ length: numBlogs }, (_, index) => ({
    ...emptyBlog,
    id: index.toString(), // Use the index as the blog ID (this removes reacts warning about duplicate IDs)
  }));
  const numberOfBlogs = 6;

  if (!blogsArr.length) {
    blogsArr = createEmptyBlogs(numberOfBlogs);
    return (<>
      <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
      
      <div className={`mx-${mxSize} mt-4`} id='noBlogsAlert'>
        <DismissibleAlert heading={'Website Under Construction'} text={'There is currently no access to the server at this time. The blogs displayed below are just placeholders.'}
      show={showAlert} setShow={setShowAlert}/>
      </div>
      <h4 className={`text-center dark`} id={scrollToBlogsId} >Please Select A Blog To Read</h4>
      <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center} pb-4`}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} setShowAlert={setShowAlert}/>)}
      </ul>
    </>)
  };

  return (<>
    <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />

    <div className='bg-blogsList pb-4 yourBlog'>
      <AddBlog loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
      <h4 className={`text-center dark`} id={scrollToBlogsId} >Please Select A Blog To Read</h4>
      <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center} pb-4`}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} />)}
      </ul>
    </div>
  </>)
}

/* {blogsArr.length <= 2 && <div className={`m-4 p-4 invisible ${show.lg_xl} color-secondary`}> .</div>}
{blogsArr.length > 2 && blogsArr.length <= 4 && <div className={` invisible ${show.lg_xl} color-secondary`}> .</div>} */
/* the 2 line above are to fill up space with content so that footer reaches bottom of page */