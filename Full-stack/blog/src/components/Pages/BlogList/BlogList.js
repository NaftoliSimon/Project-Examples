import React from 'react';
import center from '../../../data/Bootstrap/center';
import AddBlog from './AddBlog';
import BlogItemLayout from './BlogItemLayout';
import Welcome from '../welcome/Welcome';
import { Card } from 'react-bootstrap';
import { scrollToBlogsId } from '../../../data/scrollToHeight'; //id for scrolling to (see hooks/navigate.js)

export default function BlogList({ blogsArr, loggedIn, setShowLogin }) {
  const variant = 'info'; //TODO: switch this to 'danger' once database and server are fully working on development mode, also switch card text below
  if (!blogsArr.length) {
    return (<div className='pb-5 mb-5'>
       <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
      <Card className='m-3 opacity-75 shadow' id={scrollToBlogsId} bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      >
        <div className={`text-center p-4 pb-2 fs-1`}>
          {/* <Card.Title>CONNECTION ERROR</Card.Title>
          <div className={`text-center p-4 pb-2 fs-1`}>NO BLOGS</div>
          <div className='text-center m-4 fs-1'>Server Is Not Connected</div> */}
          {/* <Card.Title>Website Under Construction</Card.Title> */}
          <h4 className={`text-center fs-1 text-decoration-underline text-uppercase`}>Website Under Construction</h4>
          <div className='text-center fs-1 text-capitalize'>There is currently no access to the server at this time</div>
          <div className='pb-5 mb-3'></div> {/*This empty div is added to take up space so that footer appears at bottom, since no data (from server) is taking up space  */}
        </div>
      </Card></div>)
  };

  return (<>
    <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />

    <div className='bg-blogsList pb-4 yourBlog' id={scrollToBlogsId}>
      <AddBlog loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
      <h4 className={`text-center dark`} id='blogList'>Please Select A Blog To Read</h4>
      <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center} pb-4`}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} />)}
      </ul>
    </div>
  </>)
}

/* {blogsArr.length <= 2 && <div className={`m-4 p-4 invisible ${show.lg_xl} color-secondary`}> .</div>}
{blogsArr.length > 2 && blogsArr.length <= 4 && <div className={` invisible ${show.lg_xl} color-secondary`}> .</div>} */
/* the 2 line above are to fill up space with content so that footer reaches bottom of page */