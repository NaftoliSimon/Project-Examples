import { BsPencilFill } from "react-icons/bs";
import { linkIcons } from "./URLpaths";
import { offset, scrollToBlogsId } from "./scrollToHeight";

//The data below is used across multiple card components, used multiple times with different layouts.
const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.';
const aboutText = 'Do you want to know what this website is made of? You can find out by simply clicking the button below.';
const titleStyle = 'text-center py-4 fs-1 fw-bolder text-uppercase';

const readIcon = linkIcons.blogs;
const writeIcon = <BsPencilFill />
const aboutIcon = linkIcons.about;

//color styles for each card
const card1 = 'green';
const card2 = 'yellow';
const card3 = 'red';

const scrollToBlogList = () => {
    window.scrollTo({
        top: document.getElementById(scrollToBlogsId).offsetTop + offset,
        behavior: 'smooth',
    })
}//window.scrollTo(0, blogListLocation);
export { readText, aboutText, titleStyle, scrollToBlogList, readIcon, writeIcon, aboutIcon, card1, card2, card3 }