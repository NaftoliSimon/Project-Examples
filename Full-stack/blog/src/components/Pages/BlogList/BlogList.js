import React, { useState } from 'react';
import center from '../../../data/Bootstrap/center';
import AddBlog from './AddBlog';
import BlogItemLayout from './BlogItemLayout';
import Welcome from '../welcome/Welcome';
import { Card } from 'react-bootstrap';
import { scrollToBlogsId } from '../../../data/scrollToHeight'; //id for scrolling to (see hooks/navigate.js)
import DismissibleAlert from '../../reuseable/Alert';
import isMobile from '../../../data/isMobile';
import Paginator from './Paginator';

export default function BlogList({ blogsArr, loggedIn, setShowLogin, page, setPage, setBlogsArr, blogPages }) {
  const [showAlert, setShowAlert] = useState(false);
  const mxSize = isMobile ? '3' : '5';
  const blogsPerRow = 3; //Three blogs are displayed per row
  const blogRows = blogsArr.length / blogsPerRow;
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
        <DismissibleAlert heading={'No Connection to the server'} text={'The blog you clicked on is just a placeholder'}
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
      <h4 className={`text-center dark mb-0`} id={scrollToBlogsId} >Please Select A Blog To Read</h4>
      {blogPages > 1 && <Paginator page={page} setPage={setPage} setBlogsArr={setBlogsArr} blogPages={blogPages}/>}
      <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center} pb-0`}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} />)}
      </ul>
      {blogRows <= 1 && <div style={{ visibility: 'hidden' }}><BlogItemLayout blog={emptyBlog}/></div>} {/* This line adds empty space if only one row or blogs are on display, so that the pagination is always in the same place*/}
     {blogPages > 1 && <Paginator page={page} setPage={setPage} setBlogsArr={setBlogsArr} blogPages={blogPages}/>}
    </div>
  </>)
}