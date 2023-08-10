//Set heights to scroll to 
const topOfPage = 0;
const blogListLocation = 940; //height of blogs list component on laptop. This was updated to scroll to the element itself
const scrollToBlogsId = 'ListOfBlogs'; //id for the blogs list element to scroll to

const pageScrollTo = (height) => window.scrollTo(0, height);

export default blogListLocation;
export { topOfPage, pageScrollTo, scrollToBlogsId }
