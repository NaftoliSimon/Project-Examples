import React, { useState, useEffect } from 'react'
import { links } from '../../../data/URLpaths';
import useCustomNav from '../../../hooks/navigate';
import { Card } from 'react-bootstrap';
import { BsBuildingFill, BsPersonFill } from 'react-icons/bs';
import ListIcon from './ListIcon';
import scrollToElem from '../../../functions/scrollToElem';

export default function BlogItemLayout({ blog, setShowAlert, popOut, theme }) {
  const navigate = useCustomNav();
  const defaultShadow = `shadow`;//border borderColor
  const [shadow, setShadow] = useState(defaultShadow); //state used to control shadow on hover to get bootstrap's shadow value. Easily change shadow type (see https://getbootstrap.com/docs/5.3/utilities/shadows/#examples)
  const [image, setImage] = useState(); //TODO: replace this state with the user's uploaded image from the database

  const liStyle = `list-group p-0 m-2 mb-3 pointer blogListItemLayout`;
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
  // const randomImageSame = `https://i.pravatar.cc/150?img=68`;
  useEffect(() => {
    setImage(randomImage); //random image is used only until the website is update to get the user's image from the database
  }, [])

  const noImage = theme === 'dark' ? '../Images/noImageBlack.png' : '../Images/noImage.png';

  return (
    <li className={liStyle} key={id} onClick={onBlogDisplayClick}> {/*links to Blog.js */}
      <Card as={'button'} className={`m-2 text-start pointer border-0 blogListItemLayout p-0 popOut ${shadow}`}
        onMouseOver={() => setShadow(`shadow-lg`)} onMouseLeave={() => setShadow(defaultShadow)}
      >
        <Card.Img variant="top" src={image || noImage} className='card-image' /> {/*TODO: get the user's image */}
        <Card.Body className='text-truncate-container pb-1 w-100 opacity-75'>
          <Card.Title className='text-capitalize'><ListIcon icon={<BsBuildingFill />} />{companyName}</Card.Title>
          <Card.Subtitle className="mb-2 opacity-75 text-capitalize"><ListIcon icon={<BsPersonFill />} />{name}</Card.Subtitle>
          <Card.Text className='text-capitalize'>
            {shortSummary || defaultShortSummary} {/*shortSummary displays in the selectedBlog in full. It displays in here with up to five lines which is about 250 character. The server as of writing this comment is set to 350 characters.*/}
          </Card.Text>
          <div variant="link" className={`color-dark`}>{website}</div>
        </Card.Body>
      </Card>
    </li>
  )
}