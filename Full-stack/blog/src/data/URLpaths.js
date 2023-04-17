//Url path for fetching data from blogApi
const baseUrl = `http://localhost:3000`; //server's base url

//Internal links for navigating the website
const navBaseUrl = `http://localhost:3001`;
const links = {
    Home: `/blogs`,
    Blogs: `/blogs`,
    About: `/about`,
    // Contact: `/fakeNonexistentLink`,
};

//External links for navigating to other websites
const linkedinProfile = 'https://www.linkedin.com/in/naftoli-simon-174b20206/';
const socialMediaLinks = {
    Facebook: '/fakeNonExistentLink',
    LinkedIn: linkedinProfile
}

export default baseUrl;
export { links, socialMediaLinks, linkedinProfile, navBaseUrl };