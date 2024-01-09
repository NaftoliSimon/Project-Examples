import React from 'react';
import useCustomNav from '../../../hooks/navigate';
import ThreeColLayout from './ThreeColLayout';
import TwoColLayout from './TwoColLayout';
import OneColLayout from './OneColLayout';

export default function Welcome({ loggedIn, setShowLogin, blogsArr }) {
  const navigate = useCustomNav();
  const goToAboutPage = () => navigate('/about');

  return (
    <>
      <div className={`bg-welcome vh-100 d-none d-lg-block`}> {/*This element should only show for large screen sizes and up*/}
        <ThreeColLayout loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} goToAboutPage={goToAboutPage} />
      </div>

      <div className={`bg-welcome d-none d-md-block d-sm-block d-lg-none pb-3`}> {/*This element should only show for medium screens*/}
        <TwoColLayout loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} goToAboutPage={goToAboutPage} />
      </div>

      <div className={`bg-welcome d-block d-sm-none pb-3`}> {/*This element should only show for extra small screens*/}
        <OneColLayout loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} goToAboutPage={goToAboutPage} />
      </div>
    </>
  );
}
