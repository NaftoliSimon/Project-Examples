import React from 'react';
import center from '../../../data/Bootstrap/center';
import AddBlog from './AddBlog';
import BlogItemLayout from './BlogItemLayout';
import Welcome from '../welcome/Welcome'; 

export default function BlogList({ blogsArr, loggedIn, setShowLogin }) {
  // const [yourBlog, setYourBlog] = useState();
  if (!blogsArr.length) {
    return (<div className='pb-5 mb-5'>
      <div className={`text-center p-4 pb-2 fs-1`}>NO BLOGS</div>
      <div className='text-center m-4 fs-1'>Make Sure Server Is Connected</div>
      <div className='pb-5 mb-3'></div> {/*This empty div is added to take up space so that footer appears at bottom, since no data (from server) is taking up space  */}
    </div>)
  };

  return (<>
    <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
    
    <div className='bg-blogsList pb-4'>
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