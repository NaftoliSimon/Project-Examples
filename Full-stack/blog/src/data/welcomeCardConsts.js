import blogListLocation from "./scrollToHeight";

const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.';
const aboutText = 'Do you want to know what this website is made of? You can find out by simply clicking the button below.';
const titleStyle = 'text-center py-4 text-white fs-1 fw-bolder text-uppercase textBorder';

const scrollToBlogList = () => window.scrollTo(0, blogListLocation);
export { readText, aboutText, titleStyle, scrollToBlogList }