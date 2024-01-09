import React from 'react'
import DefaultCard from './Card'
import WriteABlogCard from './WriteABlogCard'
import { aboutIcon, aboutText, card1, card2, card3, readIcon, readText, scrollToBlogList, titleStyle } from '../../../data/welcomeCardConsts'
import websiteName from '../../../data/websiteName'
import center from '../../../data/Bootstrap/center'

export default function OneColLayout({ loggedIn, setShowLogin, blogsArr, goToAboutPage }) {
    const width = '24em';
    const gap = 'gap-4';
    return (
        <>
            <h2 className={titleStyle}>Welcome To {websiteName}</h2>
            <div className={`${center} flex-column ${gap}`}>
                <div className={`${center} ${gap} `}>
                    <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} width={width} cardColor={card1} icon={readIcon} onButtonClick={scrollToBlogList} />
                </div>
                <div className={`${center} ${gap} `}>
                    <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin}  width={width} blogsArr={blogsArr} cardColor={card2}/>
                </div>
                <div className={`${center} ${gap} `}>
                    <DefaultCard header={'About This Website'} text={aboutText} buttonText={'About Us'} width={width} icon={aboutIcon} cardColor={card3} onButtonClick={goToAboutPage} />
                </div>
            </div>
        </>
    )
}
