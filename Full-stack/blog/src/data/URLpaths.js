//Url paths for fetching data from blogApi
//easy to change the base URL url from 1 place
const baseUrl = `http://localhost:3000`; //server's base url

//Internal links for navigating the website
const navBaseUrl = `http://localhost:3001`;
const blogs = `/blogs`;
const about = `/about`;

const links = {
    Blogs: blogs,
    About: about,
    Contact: `/fakeNonexistentLink`
};

export default baseUrl;
export {links, blogs, about, navBaseUrl};