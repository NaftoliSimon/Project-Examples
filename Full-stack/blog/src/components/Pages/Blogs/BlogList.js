import React from 'react';
import bgColor from '../../../data/backgroundColor';
import center from '../../../data/center';

export default function BlogList({ blogsArr }) {
  return (<>
    <h4 className={`text-center text-${bgColor}`}>Please Select a Blog</h4>

    <ul className={`list-group d-flex flex-row flex-wrap ${center}`}>
      {blogsArr.map(blog => {
        const { id, name, website, company } = blog;
        const liStyle = `blog list-group-item list-group-item-action bg-${bgColor} p-3 m-2 rounded`;

        return <a className={liStyle} key={id} href={`/blogs/${id}`}> {/*links to PostList.js */}

          <span className='p-2 h4 d-block d-sm-none'>{name}</span>
          <span className='p-2 h4 d-none d-sm-inline'>{name}</span>
          <span className='p-2'>{company.name}</span>
          <span className='p-2 fst-italic'>{website}</span>

        </a>
      })}
    </ul>
  </>)
}
