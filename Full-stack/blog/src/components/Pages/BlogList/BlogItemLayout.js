import React, { useState } from 'react'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import { Card } from 'react-bootstrap';
import { BsBuildingFill, BsPersonFill } from 'react-icons/bs';
import ListIcon from './ListIcon';
import scrollToElem from '../../../functions/scrollToElem';

export default function BlogItemLayout({ blog, setShowAlert, popOut }) {
  const navigate = useCustomNav();
  const defaultShadow = `shadow-sm `;//border borderColor
  const [shadow, setShadow] = useState(defaultShadow); //state used to control shadow on hover to get bootstrap's shadow value. Easily change shadow type (see https://getbootstrap.com/docs/5.3/utilities/shadows/#examples)

  const liStyle = `list-group p-0 m-0 mb-3 pointer blogListItemLayout`;
  const { id, name, website, companyName, userId, shortSummary } = blog;
  const noBlogs = userId === 'noBlogsFound' ? true : false;
  const blogUrl = `${links.blogs}/${userId}`;
  // const defaultImage = '../../../../public/Images/noImage.png';
  // const defaultImage = 'Images/noImage.png';
  const defaultShortSummary = `${name} has not put in a blog introduction yet. 
  `;
  const onBlogDisplayClick = () => {
    if (!noBlogs) {
      navigate(blogUrl)
    } else {
      setShowAlert(true);
      scrollToElem('noBlogsAlert');
      popOut();
    }
  }
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //TODO: get user image from database, allow users to upload an image
  const randomImage = `https://i.pravatar.cc/150?img=${getRandomNumber(1, 70)}`; //see https://pravatar.cc/images 
  const randomImageSame = `https://i.pravatar.cc/150?img=68`;

  return (
    <li className={liStyle} key={id} onClick={onBlogDisplayClick}> {/*links to Blog.js */}
      <Card as={'button'} className={`m-2 text-start pointer blogListItemLayout blogDisplay popOut ${shadow}`}
        onMouseOver={() => setShadow(`shadow`)} onMouseLeave={() => setShadow(defaultShadow)}
      >
        {/* <Card.Header as="h5"> */}
        <Card.Img variant="top" src={randomImageSame || '../Images/noImage.png'} className='card-image' /> {/*TODO: get the user's image */}
        {/* </Card.Header> */}
        <Card.Body className='text-truncate-container pb-1 w-100 opacity-75'>
          <Card.Title className='text-capitalize'><ListIcon icon={<BsBuildingFill />} />{companyName}</Card.Title>
          <Card.Subtitle className="mb-2 opacity-75 text-capitalize"><ListIcon icon={<BsPersonFill />} />{name}</Card.Subtitle>
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