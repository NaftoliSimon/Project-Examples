import React from 'react';
import WriteABlogCard from './WriteABlogCard';
import center from '../../../data/Bootstrap/center';
import websiteName from '../../../data/websiteName';
import { aboutIcon, aboutText, card1, card2, card3, readIcon, readText, scrollToBlogList, titleStyle } from '../../../data/welcomeCardConsts';
import styles from './ColLayout.module.scss'; // Import your module for styling
import Card from './Card';

export default function ThreeColLayout({ loggedIn, setShowLogin, blogsArr, goToAboutPage }) {
  const width = undefined; //'22em';

  return (
    <>
      <h2 className={titleStyle}>Welcome To {websiteName}</h2>
      <div className={`${center} ${styles.slideContainer} gap-5`}>
        <Card cardColor={card1} header={'Read A Blog'} text={readText} buttonText={'Read A Blog'} icon={readIcon} onButtonClick={scrollToBlogList} width={width} />
        <WriteABlogCard cardColor={card2} loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} width={width} />
        <Card cardColor={card3} header={'About This Website'} text={aboutText} icon={aboutIcon} buttonText={'About Us'} onButtonClick={goToAboutPage} width={width} />
      </div>
    </>
  );
}
