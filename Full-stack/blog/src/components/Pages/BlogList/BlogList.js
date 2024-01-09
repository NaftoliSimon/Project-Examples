import React, { useEffect, useState } from 'react';
import center from '../../../data/Bootstrap/center';
import AddBlog from './AddBlog';
import BlogItemLayout from './BlogItemLayout';
import Welcome from '../welcome/Welcome';
import { Alert, Button } from 'react-bootstrap';
import { scrollToBlogsId } from '../../../data/scrollToHeight'; //id for scrolling to (see hooks/navigate.js)
import DismissibleAlert from '../../reuseable/Alert';
import isMobile from '../../../data/isMobile';
// import Paginator from './Paginator';
import myFetch from '../../../functions/myFetch';
import baseUrl from '../../../data/URLpaths';
import usePopOut from '../../../hooks/popOut';

export default function BlogList({ blogsArr, loggedIn, setShowLogin, page, setPage, setBlogsArr, blogPages }) {
  //IMPORTANT NOTE - Paginator was removed from the front end (3 column) display to be consistent with the 2 and 1 column layouts which could not have the paginator do to layout constraints. It has been replaced with a Load More button at the bottom of the blogList 

  const [showAlert, setShowAlert] = useState(false);
  const [blogsPerRow, setBlogsPerRow] = useState(calculateBlogsPerRow()); // Initialize with the initial value
  // const [showSidePaginator, setShowSidePaginator] = useState(calculateShowSidePag())
  // const [prevPage, setPrevPage] = useState(page);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const { getPopClass, handlePopOut } = usePopOut();

  const mxSize = isMobile ? '3' : '5'; //TODO: switch to change mxSize based on screen size, not mobile
  const blogRows = blogsArr.length / blogsPerRow;
  const emptyBlog = { id: 'id', name: 'Person', website: 'website.com', companyName: 'Company', userId: 'noBlogsFound', shortSummary: 'This is a placeholder. No Data Found. This is a placeholder. No Data Found. This is a placeholder. No Data Found. ' }
  const createEmptyBlogs = (numBlogs) => Array.from({ length: numBlogs }, (_, index) => ({
    ...emptyBlog,
    id: index.toString(), // Use the index as the blog ID (this removes reacts warning about duplicate IDs)
  }));
  const numberOfBlogs = 6;
  const blogsFromJSON = JSON.parse(sessionStorage.getItem('blogsFromJSON'));

  useEffect(() => {
    const handleResize = () => {
      setBlogsPerRow(calculateBlogsPerRow());
      // setShowSidePaginator(calculateShowSidePag())
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   setPage(1);
  //   if (page !== 1 && (prevPage !== 1 || prevPage !== page)) {
  //     window.location.reload();
  //   }
  // }, [blogsPerRow, prevPage]);

  // function calculateShowSidePag() {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth >= 1315 && blogsPerRow === 3) {
  //     return true;
  //   }
  //   return false
  // }

  function calculateBlogsPerRow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1217) {
      return 3;
    } else if (screenWidth >= 816) {
      return 2;
    } else {
      return 1;
    }
  }

  const loadMore = () => {
    const nextPage = page < blogPages ? page + 1 : null;
    if (nextPage) {
      myFetch(`${baseUrl}/blogs?page=${nextPage}`, (newBlogs) => {
        setBlogsArr((prevBlogs) => [...prevBlogs, ...newBlogs]);
        setPage(nextPage);
        // setPrevPage(page); // Update prevPage after setting the new page
      });
    }
    if (page + 1 === blogPages) {
      setShowLoadMore(false);
    }
  };

  const popOut = () => {
    if (showAlert) {
      handlePopOut();
    }
  }
  
  if (!blogsArr.length) { //Blog list placeholder display when server is running and no blogs are found in the database (ie server is running, but no sql password). (If server isn't running it will fetch from local json file, (see myFetch.js))
    blogsArr = createEmptyBlogs(numberOfBlogs);
    return (<>
      <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />

      <div className={`mx-${mxSize} mt-4`} id='noBlogsAlert'> {/* TODO: switch id to ref */}
        <DismissibleAlert heading={'No Connection to the server'} text={'The blog you clicked on is just a placeholder'}
          show={showAlert} setShow={setShowAlert} getPopClass={getPopClass} />
      </div>
      <h4 className={`text-center text-border dark`} id={scrollToBlogsId} >Please Select A Blog To Read</h4>
      <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center} pb-4`}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} setShowAlert={setShowAlert} popOut={popOut} />)}
      </ul>
    </>)
  };

  // const pagintorRight = <Paginator page={page} setPage={setPage} setBlogsArr={setBlogsArr} blogPages={blogPages} direction={'right'} />;
  // const paginatorLeft = <Paginator page={page} setPage={setPage} setBlogsArr={setBlogsArr} blogPages={blogPages} direction={'left'} />;
  return (<>
    <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />

    <div className='bg-blogsList pb-4 yourBlog'>
      <AddBlog loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
      {/* {showSidePaginator && (<> {pagintorRight} {paginatorLeft} </>)} */}
      <h4 className={`text-center text-border dark mb-2`} >Please Select A Blog To Read</h4>
      <ul className={`list-group d-flex flex-row flex-wrap ${center} pb-2 pt-0`} id={scrollToBlogsId}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} />)}
      </ul>
      {blogRows <= 1 && blogsPerRow === 3 && <div style={{ visibility: 'hidden', marginBottom: '20px' }}><BlogItemLayout blog={emptyBlog} /></div>} {/* This line adds empty space if only one row or blogs are on display, so that the pagination is always in the same place. We add an empty blog below the current bloglist row. Then add a bottom padding to fix the offset*/}
      {/* {blogPages > 1 && blogsPerRow === 3 && <Paginator page={page} setPage={setPage} setBlogsArr={setBlogsArr} blogPages={blogPages} />} */}

      {!blogsFromJSON && (!showLoadMore ?
        <div className={center}><Alert style={{ width: '9em' }} variant={'info'}>No More Blogs</Alert></div> :
        <div className={`${center}`}><Button onClick={loadMore}>Load More</Button></div>)}
    </div>
  </>)
}