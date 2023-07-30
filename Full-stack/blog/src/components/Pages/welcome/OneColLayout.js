import React from 'react'
import DefaultCard from './Card'
import WriteABlogCard from './WriteABlogCard'
import { aboutText, readText, scrollToBlogList, titleStyle } from '../../../data/welcomeCardConsts'
import websiteName from '../../../data/websiteName'
import center from '../../../data/Bootstrap/center'

export default function OneColLayout({ loggedIn, setShowLogin, blogsArr, goToAboutPage }) {
    const width = '24em'
    return (
        <>
            <h2 className={titleStyle}>Welcome To {websiteName}</h2>
            <div className={`${center} flex-column gap-2`}>
                <div className={`${center} gap-2 `}>
                    <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} width={width} onButtonClick={scrollToBlogList} />
                </div>
                <div className={`${center} gap-2 `}>
                    <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin}  width={width} blogsArr={blogsArr} />
                </div>
                <div className={`${center} gap-2 `}>
                    <DefaultCard header={'About This Website'} text={aboutText} buttonText={'About Us'} width={width} onButtonClick={goToAboutPage} />
                </div>
            </div>
        </>
    )
}
