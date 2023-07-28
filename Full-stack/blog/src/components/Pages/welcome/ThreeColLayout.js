import React from 'react'
import DefaultCard from './Card'
import WriteABlogCard from './WriteABlogCard'
import center from '../../../data/Bootstrap/center'
import websiteName from '../../../data/websiteName'
import { aboutText, readText, scrollToBlogList, titleStyle } from '../../../data/welcomeCardConsts'

export default function ThreeColLayout({loggedIn, setShowLogin, blogsArr,goToAboutPage }) {
    return (
        <>
            <h2 className={titleStyle}>Welcome To {websiteName}</h2>
            <div className={`${center} gap-4`}>
                <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Read A Blog'} onButtonClick={scrollToBlogList} />
                <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
                <DefaultCard header={'About This Website'} text={aboutText} buttonText={'About Us'} onButtonClick={goToAboutPage} />
            </div>
        </>
    )
}
