import React, { useState } from 'react'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import { Card } from 'react-bootstrap';
import { BsBuildingFill, BsPersonFill } from 'react-icons/bs';
import ListIcon from './ListIcon';

export default function BlogItemLayout({ blog, bsStyle = '' }) { //bootstrap style in optional
  const navigate = useCustomNav();
  const defaultShadow = `shadow-sm `;//border borderColor
  const [shadow, setShadow] = useState(defaultShadow); //state used to control shadow on hover to get bootstrap's shadow value. Easily change shadow type (see https://getbootstrap.com/docs/5.3/utilities/shadows/#examples)

  
  const onHover = ` border borderColor backgroundColor`;
  const liStyle = `list-group bgColor-primary bg-transparent p-0 m-0  color-secondary-reverse pointer ${bsStyle}`;
  const { id, name, website, companyName, userId, shortSummary } = blog;
  const blogUrl = `${links.blogs}/${userId}`;
  // const defaultImage = '../../../../public/Images/noImage.png';
  // const defaultImage = 'Images/noImage.png';
  const defaultShortSummary = `${name} has not put in a blog introduction yet. 
  `;
  return (
    <li className={liStyle} key={id} onClick={() => navigate(blogUrl)}> {/*links to Blog.js */}
      <Card className={`m-2 bgColor-primary pointer ${shadow} blogListItemLayout`}
        onMouseOver={() => setShadow(`shadow ${onHover}`)} onMouseLeave={() => setShadow(defaultShadow)}
      >
        {/* <Card.Header as="h5">{name}</Card.Header> */}
        <Card.Body className='text-truncate-container'>
          <Card.Title className='text-capitalize'><ListIcon icon={<BsBuildingFill/>}/>{companyName}</Card.Title>
          <Card.Subtitle className="mb-2 opacity-75 text-capitalize"><ListIcon icon={<BsPersonFill/>}/>{name}</Card.Subtitle>
          <Card.Text className='text-capitalize'>
            {shortSummary || defaultShortSummary} {/*shortSummary displays in the selectedBlog in full. It displays in here with up to five lines which is about 250 character. The server as of writing this comment is set to 350 characters.*/}
          </Card.Text>
          <div variant="link" className={`color-dark`}>{website}</div>
        </Card.Body>
        {/* <Card.Img variant="bottom" style={{ height: '150px'}} src={defaultImage} /> */}
      </Card>
    </li>
  )
}