import { BsPencilFill } from "react-icons/bs";
import { linkIcons } from "./URLpaths";
import { offset, scrollToBlogsId } from "./scrollToHeight";
import lightenOrDarkenColor from "../functions/createColor";

//The data below is used across multiple card components, used multiple times with different layouts.
const readText = 'Read one (or several) of our many blogs by other users. Simply Click the button below or scroll down the page and select a blog.';
const aboutText = 'Do you want to know what this website is made of? You can find out by simply clicking the button below.';
const titleStyle = 'text-center py-4 fs-1 fw-bolder text-uppercase';

const readIcon = linkIcons.blogs;
const writeIcon = <BsPencilFill />
const aboutIcon = linkIcons.about;

//Colors. See Styles/Colors.scss
const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue('--primary'); //gets the primary color from the colors.scss file
// console.log('primarColor:', primaryColor); // This will log the value of the primary color

const newColor = lightenOrDarkenColor(primaryColor); //newColor is either a lighter or darker version of the primary color, depending on if the primary color is a lighter or darker color
// console.log('newColor', newColor);

//Gradient color styles for each card. It is preferable that a string of 2 gradient colors is passed in (ie "blue, yellow" or "rgb(255, 48, 255), rgb(0, 183, 255)")
const card1 = `${primaryColor}, ${newColor}`;
const card2 = `${newColor}, ${primaryColor}`;
const card3 = `${primaryColor}, ${newColor}`;

// const blue = '#0d6efd';
//  const lightBlue = '#b6d1fa';
// const card1 = `${blue}, ${lightBlue}`;
// const card2 = `${lightBlue}, ${blue}`;
// const card3 = `${blue}, ${lightBlue}`;

const scrollToBlogList = () => {
    window.scrollTo({
        top: document.getElementById(scrollToBlogsId).offsetTop + offset,
        behavior: 'smooth',
    })
}//window.scrollTo(0, blogListLocation);
export { readText, aboutText, titleStyle, scrollToBlogList, readIcon, writeIcon, aboutIcon, card1, card2, card3 }