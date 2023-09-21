//Set heights to scroll to 

const topOfPage = 0;
// const blogListLocation = 940; //height of blogs list component on laptop. This was updated to scroll to the element itself
const scrollToBlogsId = 'ListOfBlogs'; //id for the blogs list element to scroll to
const offset = -70; //offset is the (approximate) height of the fixed header

const pageScrollTo = (height) => window.scrollTo(0, height);

const scrollToBlogList = text => text.toLowerCase().includes('blogs') ? true : false; //false defaults to top of page

export default scrollToBlogList;
export { topOfPage, pageScrollTo, scrollToBlogsId, offset }
