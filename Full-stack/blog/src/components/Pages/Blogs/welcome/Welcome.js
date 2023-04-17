import React from 'react'
import center from '../../../../data/Bootstrap/center'
import websiteName from '../../../../data/websiteName'
import DefaultCard from './Card'
import navigate from '../../../../hooks/navigate'
import links from '../../../../data/URLpaths'
import blogListLocation from '../../../../data/scrollToHeight'
import WriteABlogCard from './WriteABlogCard'

export default function Welcome({ loggedIn, setShowLogin, blogsArr }) {
  const scrollToBlogList = () => window.scrollTo(0, blogListLocation);
  const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.'
  return (
    <div className={` p-2 pt-0 bg-image vh-100`}>
      <h2 className='text-center text-white p-4 fs-1'>Welcome To {websiteName}</h2>
      <div className={`${center}`}>
        <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} onButtonClick={scrollToBlogList}/>
        {/* <DefaultCard header={'Write A Blog'} text={writeText} buttonText={'Write A Blog'} onButtonClick={scrollToBlogList}/> */}
        <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr}/>
      </div>
    </div>
  )
}
