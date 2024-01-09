import React from 'react'
import DefaultCard from './Card'
import WriteABlogCard from './WriteABlogCard'
import { aboutIcon, aboutText, card1, card2, card3, readIcon, readText, scrollToBlogList, titleStyle } from '../../../data/welcomeCardConsts'
import websiteName from '../../../data/websiteName'
import center from '../../../data/Bootstrap/center'

export default function TwoColLayout({ loggedIn, setShowLogin, blogsArr, goToAboutPage }) {
  return (
    <>
      <h2 className={titleStyle}>Welcome To {websiteName}</h2>
      <div className={`${center} flex-column gap-4`}>
        <div className={`${center} gap-4 `}>
          <DefaultCard cardColor={card1} header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} icon={readIcon} onButtonClick={scrollToBlogList} />
          <WriteABlogCard cardColor={card2} loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
        </div>
        <DefaultCard cardColor={card3} header={'About This Website'} text={aboutText} icon={aboutIcon} buttonText={'About Us'} onButtonClick={goToAboutPage} />
      </div>
    </>
  )
}
