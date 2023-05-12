import React from 'react'
import center from '../../../data/Bootstrap/center'
import websiteName from '../../../data/websiteName'
import DefaultCard from './Card'
import blogListLocation from '../../../data/scrollToHeight'
import WriteABlogCard from './WriteABlogCard'
import hide, { show } from '../../../data/Bootstrap/hide'
import useCustomNav from '../../../hooks/navigate'

export default function Welcome({ loggedIn, setShowLogin, blogsArr }) {
  const navigate = useCustomNav()
  const scrollToBlogList = () => window.scrollTo(0, blogListLocation);
  // const doNothing = () => console.log();
  const goToAboutPage = () => navigate('/about');
  const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.'
  const aboutText = 'Do you want to know what this website is made of? You can find out by simply clicking the button below.';
  return (<>
    <div className={`bg-welcome vh-100 ${show.lg_xl}`}>
      <h2 className='text-center py-4'>Welcome To {websiteName}</h2>
      <div className={`${center} gap-4`}>
        <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Read A Blog'} onButtonClick={scrollToBlogList} />
        <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
        <DefaultCard header={'About This Website'} text={aboutText} buttonText={'About Us'} onButtonClick={goToAboutPage} />
      </div>
    </div>

    <div className={` bg-welcome vh-100 ${hide.lg_xl}`}>
      <h2 className='text-center pt-4'>Welcome To {websiteName}</h2>
      <div className={`${center} flex-column gap-2`}>
        <div className={`${center} gap-2 `}>
        <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} onButtonClick={scrollToBlogList} />
        <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
        </div>
        <DefaultCard header={'About This Website'} text={aboutText} buttonText={'About Us'} onButtonClick={goToAboutPage} />
      </div>
    </div>
    </>)
}
