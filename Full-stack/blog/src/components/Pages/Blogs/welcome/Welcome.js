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
  const doNothing = () => console.log();
  const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.'
  const blankText = 'This Card that you are currently reading does not do anything just yet. If you click the button below nothing will happen.';
  return (
    <div className={` py-2 bg-welcome vh-100`}>
      <h2 className='text-center text-dark p-4 fs-1'>Welcome To {websiteName}</h2>
      <div className={`${center}`}>
        <DefaultCard header={'Read A Blog'} text={readText} buttonText={'Find A Blog'} onButtonClick={scrollToBlogList} />
        <WriteABlogCard loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />
        <DefaultCard header={'Blank Header'} text={blankText} buttonText={'Useless Button'} onButtonClick={() => doNothing()} />
      </div>
    </div>
  )
}
