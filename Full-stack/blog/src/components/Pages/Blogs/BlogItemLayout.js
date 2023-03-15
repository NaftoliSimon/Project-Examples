import React from 'react'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';

export default function BlogItemLayout({ blog }) {

  const navigate = useCustomNav();

  const liStyle = `blog list-group-item  bgColor-primary p-3 m-2 rounded color-secondary-reverse pointer`;
  const { id, name, website, companyName, userId } = blog;
  const blogUrl = `${links.Blogs}/${userId}`;

  return (
    <li className={liStyle} key={id} onClick={() => navigate(blogUrl, true)}> {/*links to Blog.js */}
      <span className='p-2 h4 d-block d-sm-none'>{name}</span>
      <span className='p-2 h4 d-none d-sm-inline'>{name}</span>
      <span className='p-2'>{companyName}</span>
      <span className='p-2 fst-italic'>{website}</span>
    </li>
  )
}
