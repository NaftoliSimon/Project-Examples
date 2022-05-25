import './list.css';
import './BlogList.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ blogsArr }) {
  return (
    <>
      <h4 className='blogListTitle'>Please Select a Blog</h4>

      <ul className='bulletlessList container'>
        {blogsArr.map(blog => {
          const { id, name, website, company } = blog;
          return <li className='blogDisplay' key={id}>
            <Link className='linkToPosts' to={`${id}`} state={{ blog }}> {/*links to PostList.js */}
              <span className='blogName'>{name}</span>
              <span className='website'>{website}</span>
              <span className='company'>{company.name}</span>
            </Link>
          </li>
        })}
      </ul>
    </>
  )
}
