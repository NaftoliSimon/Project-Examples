const handleScroll = (scrollToRef) => { //pass in the ref of element to scroll to
    if(!scrollToRef.current) {
        console.error("No valid scrollToRef parameter found in handleScroll function")
        return
    }
    const fixedHeaderHeight = 70;
    const elementTopPosition = scrollToRef.current.getBoundingClientRect().top;
    const offsetPosition = elementTopPosition + window.scrollY - fixedHeaderHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    console.log('handle scroll');
  };
  export default handleScroll;






  /* Here is an example of a useCase for the above function:
  
  import React, { useRef } from 'react';
  //import the function

    const ScrollToElement = () => {
  const scrollToRef = useRef(null);

  return (
    <div>
      <button onClick={handleScroll}>Scroll to Element</button>
      <div ref={scrollToRef}>Element to Scroll to</div>
    </div>
  );
};

export default ScrollToElement;
 */