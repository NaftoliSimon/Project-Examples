import React from 'react'
import ButtonLink from '../reuseable/ButtonLink';
import { links, socialMediaLinks } from '../../data/URLpaths';
import { Alert, Card } from 'react-bootstrap';
import ExternalLink from '../reuseable/ExternalLink';
import AlertIcon from '../reuseable/AlertIcon';
// import LinkWithTooltip from '../reuseable/LinkWithTooltip';

export default function About() {
    //Bootstrap Styles
    const li = `list-group-item border-0 pt-0 text-start`;
    const h6 = `pb-0 mb-0 text-decoration-underline`;
    const card = `m-4 text-start`;
    const pathToAboutComponent = `/src/components/Pages/About.js`;
    const githubLink = <ExternalLink link={socialMediaLinks.github} text={'Github'} />;

    return (<>
        <div className={`container text-center dark opacity-85`}>
            <Card className={`m-4`}><Card.Body>
                <h3>About This Website</h3>
                <p className='p-0 m-0'>Welcome to my portfolio project, a dynamic full stack blog website that showcases my development skills and passion for creating engaging online experiences.</p>
            </Card.Body></Card>
            <div className='d-block'>
                <Card className={card}><Card.Body>
                    <h4>Full-Stack</h4>
                    <p>This project exemplifies my proficiency with cutting-edge technologies. The backend is powered by Node.js, leveraging its versatility and
                        performance capabilities. I've implemented comprehensive CRUD features, ensuring seamless interaction with the data.
                        I have developed a custom blog API to retrieve data from my local SQL database.</p>
                    <p>On the frontend, I've harnessed the power of React, utilizing both React Router and Functional Components with hooks.
                        To ensure a polished and visually appealing user interface, I utilized both Bootstrap (React Bootstrap) and custom CSS for styling.
                        This choice reflects my commitment to crafting efficient and maintainable code that delivers a smooth user experience.
                        Throughout the development process, I've prioritized responsiveness and compatibility, meticulously testing the website on various
                        device screen sizes, including phones and tablets.</p>
                    {/* <h4>Web Hosting</h4> */}
                    {/* <p>The launch of this website was made possible through Amazon Web Services. By leveraging services like Route 53 and EC2, I've ensured a robust and accessible online presence. The collaborative synergy between frontend and backend technologies harmoniously comes to life, offering a seamless and immersive user journey.</p> */}
                    <h4>Software Tools</h4>
                    <p>I developed this project using Visual Studio Code and uploaded it to Github, a testament to my dedication to modern and effective development environments. This website is not just the culmination of code and design; it represents a journey of exploration, learning, and creativity. {githubLink}</p>
                    <h4>Website features</h4>
                    <span>This website contains many features, including:
                        <ul>
                            <li>Light & Dark Mode</li>
                            <li>Web & Mobile compatible</li>
                            <li>Login & Sign Up Features (details below)</li>
                            {/* <hr></hr> */}
                            <li>This website also includes 6 different pages:
                                <ul>
                                    <li>A Welcome page</li>
                                    <li>A Blog List page</li>
                                    <li>A Blog page</li>
                                    <li>An About page</li>
                                    <li>A Terms & Conditions page</li>
                                    <li>A "Page Not Found" Error page</li>
                                </ul></li>
                            <li>A Header. The header has the following features:
                                <ul>
                                    {/* <li>The Header will always remain on the top of the page (if user scrolls)</li> */}
                                    {/* <li>The website logo (also doubles as a link to the home page)</li> */}
                                    <li>Links to the Welcome, Blogs List, and About pages</li>
                                    {/* <li>The website title</li> */}
                                    <li>A Light & Dark mode toggle (sun/moon icon)</li>
                                    <li>Login & Sign Up (for more details, see below)</li>
                                    <li>A smaller screen size layout, with a dropdown for the links and login features</li>
                                </ul></li>
                            <li>A Footer</li>

                            {/* <li>A welcome page (with useful links and information to get started using the website)</li>
                            <li>A list of blogs, click one and load that blog's page</li>
                            <li>A Blog's page - The selected blog's information and posts, with user comments </li>
                            <li>An About page - You are currently on this page</li>
                            <li>A Terms And Conditions page (see the sign up form, for link)</li>
                            <li>A 404 (page not found) error page</li>
                            <li>A footer at the bottom of the page, with useful links</li>
                            <li>A navigational bar at the top of the page, with useful links</li> */}
                            {/* <li>Light and Dark mode (click on the sun/moon icon in the top right of the header, to toggle between the modes. It starts as the user's default browser settings.)</li> */}
                            <li>Login/Sign Up -
                                {/* Both have pop up modal forms with, icons, password hide/show functions, Password requirements. The Sign up form has validation with success/fail Colors for the input fields.  */}
                                <ul>
                                    when logged in the user has the ability to:
                                    <li>Comment on all blog post</li>
                                    <li>Create their own blog posts</li>
                                    <li>Edit/delete their own blogs, posts, and comments</li>
                                    <li>Log out</li>
                                </ul></li>
                        </ul>
                        <Alert variant='info' className='mt-2 ms-0'>
                            <h3><AlertIcon variant={'info'} />Important Note</h3>
                            If you are not connected to the database the website will work with limited functions.
                            Limited Data will be displayed for viewing purposes only. The Login/Sign Up features,
                            and adding or manipulating any data from the website, will not be available.
                            Attempts to access these unavailable features will simply pop up error messages.
                            When loading the website, if you are not connected to the server,
                            an alert will pop up to inform you as such.
                        </Alert>
                    </span>
                    <h4>The Future of This Website</h4>
                    <p>While this website is currently under construction, it is a reflection of my dedication to growth and innovation. As I continue to enhance this platform, I'm excited to introduce exciting improvements and features. For more details see the "Future Updates" list below.</p>
                    <p>Thank you for visiting my portfolio project. I invite you to explore the evolving nature of this website as I strive to create a dynamic and impactful online presence.</p>
                    <p><span className='d-block'>Best regards,</span>
                        <span className='d-block'>
                            {/* <LinkWithTooltip linkText={`Naftoli Simon`} linkTo={socialMediaLinks.linkedIn}
                                tooltipText={`My LinkedIn Page`} externalLink={true} tooltipDirection={'right'}/> */}
                            Naftoli Simon
                        </span>
                        <span className='d-block pt-2'>
                            <ExternalLink link={socialMediaLinks.linkedIn} text={'LinkedIn'} />
                            <span className='d-block'>{githubLink}</span>
                        </span></p>
                </Card.Body></Card>

                <Card className={`${card} mb-0`}><Card.Body>
                    <ul className={`d-block pt-3 pb-0 list-group list-group-flush`}>
                        <h5 className='text-center'><u>FUTURE UPDATES</u></h5>
                        {/* <li className={li}><h6 className={h6}>Add Joi validation and display to user limits for ALL input fields</h6> - when the user fills out any form sent to the server, certain requirements (such as character length min and max) are set in the server, these requirements need to be displayed to the user</li> */}
                        <li className={li}><h6 className={h6}>Add Images </h6> Each user's blog display's a random image whenever the site loads/reloads. Replace that random image with the user's inputted image</li>
                        <li className={li}><h6 className={h6}>Launch Live </h6> - Launch a live front end only modified version of the website with Amazon Web Services (or another hosting service provider)</li>
                        <li className={li}><h6 className={h6}>Complete the Search All Posts ability</h6>
                            - Currently the user has the ability to search for blogs based on categories (when connected to the server). However the "Load More" blogs button is set to work based on the default search of all the blogs, this needs to be updated to work with other categories as well.
                            <span className='d-block'> - The searchbar can also possibly be upgraded to include searches based on things other than categories (such as company name, blogger name, etc)</span></li>
                        <li className={li}><h6 className={h6}>Fix Errors/Bugs </h6>
                            - The edit/add a user's blog info no longer works (for reasons unknown)</li> {/* See Bloglist/AddBlogModal.js */}
                        <p className='fst-italic'>There are many more internal updates and improvements not listed here. The ones listed above are the most important ones. For the full list of improvements see the <ExternalLink link={`${socialMediaLinks.github}${pathToAboutComponent}`} text={'Github code'} />.</p>
                    </ul>
                </Card.Body></Card>
            </div>
            <ButtonLink text='Return Home' link={links.blogs}></ButtonLink>
        </div >
    </>
    )
}
/*
  Coding improvements - (not everything listed below needs to be updated/improved, they are reminders and suggestions to do if time allows, & some may already have been implemented)
Do all the TODOs throughout the project, or delete them if not applicable
Improve pre-existing code (use chat GPT?)
Make code easy to read and understand 
 remove old unnecessary code (like bootstrap style & old css)
 remove unused images & background images
 Make password storage secure (also disable react dev tools for deployment, see https://youtu.be/3QaFEu-KkR8?si=HUfCwMoqssrN81kf)
 Update the use cases for the useCustomNav (navigate) hook function now with a boolean value for the second param input (see hooks/navigate.js)
 Fix sign up Modal error: No server access error displays based on if there are any saved emails in an object which we try to populate from the db. Switch to check if we have access to db directly, as the first user to sign up for the website will get this error (since there are no saved emails yet in the db). The database should be telling the front end DIRECTLY if the username is already being used.
Add landscape and portrait separate view layout (ie for phones turned sideways)
fix the top comment from list of comments on posts so that the corners are rounded properly so that the border is not being covered by the unrounded comments corner (zoom in to see)

TODO: switch data passed in to only be object in body, and pass in Method to MyFetch & myPostFetch (make method defaults?) 
Make edited comment immediately reload/change to new edited comment after submitting the edit  

 Front-end nicer display improvements:  
                    Use animations to make website look nicer
                    Add landscape and portrait separate view layout (ie for phones turned sideways)
                    Add date/time to posts & comments 
                    Add date/time to login (user logged in at x time, user created at x date, ect)?
                    Add icons to blog list item display layout card
                    Add image to blog display card 
                    Add shadow to any card, button, or box of any kind (except for modals) 
                    Add autocomplete for searches in the searchbar (see https://www.youtube.com/watch?v=Jd7s7egjt30 for e.g.)
Icon's to add: 
                    any list in the website
                    in buttons (see linkedin connect button for examples)
                    welcome card ?
    Blog list card display
                    Add aside card(see linkedin for examples)
                    Either fix smaller screen logged in dropdown searchbar to filter properly or remove searchbar completely

 Additional possible features to add(Do all the things above first): 
 Add a search all posts option
 Add a loggedIn user account info to loggedIn dropdown that will show account data that is not blog data (such as email, password change option)
Add Edit Your Info to loggedIn icon dropdown 
Add auto load when scrolling down to(fetch and) show more blogs, posts, or comments (instead of clicking a button, which is how it is at the time of writing this comment)
    Add Categories to blogs 
Add a search bar for blogs - (get a list of blogs based on categories, or get a specific blog based on unique blog characteristics ie (company name, user name, or website))
Add comment replies ?
        Add change password(& logged in account info) 
Add a go to top of page button / link at bottom of page 
Add likes to posts & comments(look at linkedin feed on home page for example) 
Make edited posts / comments say edited 
Add a conformation email that works
Make password storage secure

*/