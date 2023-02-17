import React from 'react';
import center from '../../../data/Bootstrap/center';
import hide, { show } from '../../../data/Bootstrap/hide';

//TODO: For organizational consitanty move the 'blog' folder to 'pages' folder as it is a seperate page from blogslist 

export default function BlogList({ blogsArr }) {
  if (!blogsArr.length) {
    return (<div className='pb-5 mb-5'>
      <div className={`text-center p-4 pb-2 fs-1`}>NO BLOGS</div>
      <div className='text-center m-4 fs-1'>Make Sure Server Is Connected</div>
      <div className='pb-3'></div> {/*This empty div is added to take up space so that footer appears at bottom - there are probably better ways to fix this issue */}
    </div>)
  };

  return (<>
    <h4 className={`text-center dark`}>Please Select a Blog</h4>

    <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center}`}>
      {blogsArr.map(blog => {
        const { id, name, website, companyName } = blog;
        const liStyle = `blog list-group-item  bgColor-primary p-3 m-2 rounded color-secondary-reverse`;

        return <a className={liStyle} key={id} href={`/blogs/${id}`}> {/*links to PostList.js */}
          <span className='p-2 h4 d-block d-sm-none'>{name}</span>
          <span className='p-2 h4 d-none d-sm-inline'>{name}</span>
          <span className='p-2'>{companyName}</span>
          <span className='p-2 fst-italic'>{website}</span>
        </a>
      })}
    </ul>
    {blogsArr.length <= 6 && <div className={`m-1 pb-1 invisible ${show.lg_xl} color-secondary`}> .</div>} 
    {/* the line above is to fill up space with content so that footer reaches bottom of page */}
  </>)
}
