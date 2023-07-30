import React from 'react';
import blogListLocation from '../../../data/scrollToHeight';
import useCustomNav from '../../../hooks/navigate';
import ThreeColLayout from './ThreeColLayout';
import TwoColLayout from './TwoColLayout';
import OneColLayout from './OneColLayout';

export default function Welcome({ loggedIn, setShowLogin, blogsArr }) {
  const navigate = useCustomNav();
  // const scrollToBlogList = () => window.scrollTo(0, blogListLocation);
  const goToAboutPage = () => navigate('/about');
  // const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.';
  // const aboutText = 'Do you want to know what this website is made of? You can find out by simply clicking the button below.';
  // const titleStyle = 'text-center py-4 text-white fs-1 fw-bolder text-uppercase textBorder';

  return (
    <>
      <div className={`bg-welcome vh-100 d-none d-lg-block`}> {/*This element should only show for large screen sizes and up*/}
        <ThreeColLayout loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} goToAboutPage={goToAboutPage} />
      </div>

      <div className={`bg-welcome  vh-100 d-none d-md-block d-sm-block d-lg-none`}> {/*This element should only show for medium screens*/}
        <TwoColLayout loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} goToAboutPage={goToAboutPage} />
      </div>

      <div className={`bg-welcome vh-100 d-block d-sm-none`}> {/*This element should only show for extra small screens*/}
        <OneColLayout loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} goToAboutPage={goToAboutPage} />
      </div>
    </>
  );
}
