import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaComment, FaHome, FaInfoCircle } from "react-icons/fa";

//Url path for fetching data from blogApi
const baseUrl = `http://localhost:3000`; //server's base url

//Internal links for navigating the website

const runLocally = process.env.NODE_ENV === 'development';
const developmentUrl = `http://localhost:3001`;
const deploymentUrl = `http://blogspotstl.com`; //domain name
const navBaseUrl = runLocally ? developmentUrl : deploymentUrl; 

const links = {
    home: `/blogs`, 
    blogs: `/blogs`,
    about: `/about`,
    // Contact: `/fakeNonexistentLink`,
};
const linkIcons = { //Keep the keys the same name as the 'links' keys, to match the icon with the url path
    home: <FaHome />,
    blogs: <FaComment/>,
    about: <FaInfoCircle/>,
    // Contact: ,
};

//External links for navigating to other websites
const linkedinProfile = 'https://www.linkedin.com/in/naftoli-simon-174b20206/';
const socialMediaLinks = {
    linkedIn: linkedinProfile,
    github:    `https://github.com/NaftoliSimon/Project-Examples/tree/main/Full-stack/blog`,
    // facebook: '/fakeNonExistentLink'
}
const socialMediaLinkIcons = {
    linkedIn: <BsLinkedin />,
    github: <BsGithub />,
    facebook: <BsFacebook />
}

export default baseUrl;
export { links, socialMediaLinks, linkedinProfile, navBaseUrl, linkIcons, socialMediaLinkIcons };