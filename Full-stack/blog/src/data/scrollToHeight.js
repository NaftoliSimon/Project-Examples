//Set heights to scroll to 
const topOfPage = 0;
const blogListLocation = 940;

//blog list scroll to coordinates 
// const id = 'blogList';
// const yOffset = -100; //header height offset
// const element = document.getElementById(id);
// const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
// const scrollToBlogList = {top: y, behavior: 'smooth'}; //use with window.scrollTo()

const pageScrollTo = (height) => window.scrollTo(0, height);

export default blogListLocation;
export { topOfPage, pageScrollTo }
