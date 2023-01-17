import React from 'react';
import center from '../../../data/Bootstrap/center';

//TODO: For organizational consitanty move the 'blog' folder to 'pages' folder as it is a seperate page from blogslist 

export default function BlogList({ blogsArr }) {
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
  </>)
}
