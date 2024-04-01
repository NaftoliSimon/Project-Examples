import React from 'react';
import DefaultCard from './Card';
import WriteABlogCard from './WriteABlogCard';
import { aboutIcon, aboutText, card1, card2, card3, readIcon, readText, scrollToBlogList, titleStyle } from '../../../data/welcomeCardConsts';
import websiteName from '../../../data/websiteName';
import center from '../../../data/Bootstrap/center';
import Card2 from './Card2';
import styles from './ColLayout.module.scss';
import Card from './Card';

export default function TwoColLayout({ loggedIn, setShowLogin, blogsArr, goToAboutPage }) {
  let card2Local = card2;
  let card3Local = card3;
  const swap = card1 === card3 && card2 !== card1; // if card 1 & 3 are the same, but 2 is different, then swap cards 2 and 3
  if (swap) {
    [card2Local, card3Local] = [card3Local, card2Local];
  }

  return (
    <>
      <h2 className={titleStyle}>Welcome To {websiteName}</h2>
      <div className={`${center} flex-column gap-4 ${styles.slideFromBottom}`}>
        <div className={`${center} ${styles.slideContainer2Col} gap-4 `}>
          <Card cardColor={card1} header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} icon={readIcon} onButtonClick={scrollToBlogList} />
          <WriteABlogCard cardColor={card2Local} loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
        </div>
        <Card cardColor={card3Local} header={'About This Website'} text={aboutText} icon={aboutIcon} buttonText={'About Us'} onButtonClick={goToAboutPage} />
      </div>
    </>
  );
}
