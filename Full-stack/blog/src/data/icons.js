//Icons used across the entire website
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaComment, FaHome, FaInfoCircle } from "react-icons/fa";

const linkIcons = { //Keep the keys the same name as the 'links' keys, to match the icon with the url path (see URLpaths.js)
    home: <FaHome />,
    blogs: <FaComment/>,
    about: <FaInfoCircle/>,
    // Contact: ,
};
const socialMediaLinkIcons = { //Keep the keys the same name as the 'socialMediaLinks' keys, to match the icon with the url path (see URLpaths.js)
    linkedIn: <BsLinkedin />,
    github: <BsGithub />,
    facebook: <BsFacebook />
}
const iconSize = 20;
const toggleIconSize = 30;

export {linkIcons, socialMediaLinkIcons, iconSize, toggleIconSize}