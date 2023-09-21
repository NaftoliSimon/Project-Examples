import React from 'react'
import ButtonLink from '../reuseable/ButtonLink';
import { linkedinProfile, links, socialMediaLinks } from '../../data/URLpaths';
import { Button, Card, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import ExternalLink from '../reuseable/ExternalLink';
// import LinkWithTooltip from '../reuseable/LinkWithTooltip';

export default function About() {
    //Bootstrap Styles
    const li = `list-group-item bg-transparent dark border-0 pt-0 text-start`;
    const h6 = `pb-0 mb-0`;
    const card = `m-4 text-start`;
    const pathToAboutComponent = `/src/components/Pages/About.js`;
    const githubLink = <ExternalLink link={socialMediaLinks.github} text={'Github'} />;

    return (<>
        <div className={`text-center dark opacity-85 about`}>
            <Card className={`m-4`}><Card.Body>
                <h3>About This Website</h3>
                <p className='p-0 m-0'>Welcome to my portfolio project, a dynamic full stack blog website that showcases my development skills and passion for creating engaging online experiences.</p>
            </Card.Body></Card>
            <div className='d-block'>
                <Card className={card}><Card.Body>
                    <h4>Full-Stack</h4>
                    <p>This project exemplifies my proficiency with cutting-edge technologies. The backend is powered by Node.js, leveraging its versatility and performance capabilities. I've implemented comprehensive CRUD features, ensuring seamless interaction with the data. Initially, I developed a custom blog API to retrieve data from my local SQL database. However, I'm currently in the process of elevating the project by migrating to an AWS server, taking advantage of the scalability and reliability it offers.</p>
                    <p>On the frontend, I've harnessed the power of React, utilizing both React Router and Functional Components with hooks. To ensure a polished and visually appealing user interface, I utilized both Bootstrap (React Bootstrap) and custom CSS for styling. This choice reflects my commitment to crafting efficient and maintainable code that delivers a smooth user experience. Throughout the development process, I've prioritized responsiveness and compatibility, meticulously testing the website on various devices including phones and tablets.</p>
                    <h4>Web Hosting</h4>
                    <p>The launch of this website was made possible through Amazon Web Services. By leveraging services like Route 53 and EC2, I've ensured a robust and accessible online presence. The collaborative synergy between frontend and backend technologies harmoniously comes to life, offering a seamless and immersive user journey.</p>
                    <h4>Software Tools</h4>
                    <p>I meticulously developed this project using Visual Studio Code and uploaded it to Github, a testament to my dedication to modern and effective development environments. This website is not just the culmination of code and design; it represents a journey of exploration, learning, and creativity. {githubLink}</p>
                    <h4>The Future of This Website</h4>
                    <p>While this website is currently under construction, it is a reflection of my dedication to growth and innovation. As I continue to enhance this platform, I'm excited to introduce exciting improvements and features. For more details see the "Future Updates" list below.</p>
                    {/* <h4></h4> */}
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

                <Card className={card}><Card.Body>
                    <ul className='d-block pt-3 pb-0 list-group list-group-flush'>
                        <h5 className='text-center'><u>FUTURE UPDATES</u></h5>
                        <li className={li}><h6 className={h6}>Delete features for Blogs and Posts</h6> - add the ability to remove/delete both blogs and posts (similar to how comments can already be deleted)</li>
                        <li className={li}><h6 className={h6}>Launch Website</h6> - launch both the domain & database for people to see the website hosted live and online </li>
                        <li className={li}><h6 className={h6}>Add joi validation and display to user limits for ALL input fields</h6> - when the user fills out any form sent to the server, certain requirements (such as character length min and max) are set in the server, these requirements need to be displayed to the user</li>
                        <li className={li}><h6 className={h6}>Fetch and display limited amount of data at one time</h6> - when loading the blogs list, instead of loading all of them, instead fetch and show only x amout at a time</li>
                        <li className={li}><h6 className={h6}>Test on other device types</h6> - make sure everything looks nice for all device types, including adding both landscape and portrait view (after launching website with server access)</li>
                        <li className={li}><h6 className={h6}>Secure Passwords</h6> - Passwords are not encrypted, and are stored as plain text in the database. This needs to change, especially when the db is upgraded from local db to aws</li>
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
  Coding improvements - (not everything listed below needs to be updated/improved, they are reminders and suggestions to do if time allows)
Do all the TODOs throughout the project, or delete them if not applicable
Improve pre-existing code (use chat GPT)
Make code easy to read and understand 
 remove old unnecessary code (like bootstrap style)
 remove unused images & background images
 Make password storage secure (also disable react dev tools for deployment, see https://youtu.be/3QaFEu-KkR8?si=HUfCwMoqssrN81kf)
 Update the use cases for the useCustomNav (navigate) hook function now with a boolean value for the second param input (see hooks/navigate.js)
 Fix sign up Modal error: No server access error displays based on if there are any saved emails in an object which we try to popylate from the db. Switch to check if we have access to db directly, as the first user to sign up for the website will get this error (since there are no saved emails yet in the db)
Add landscape and portrait separate view layout (ie for phones turned sideways)
fix the top comment from list of comments on posts so that the corners are rounded properly so that the border is not being covered by the unrounded comments corner (zoom in to see)

TODO: switch data passed in to only be object in body, and pass in Method to MyFetch & myPostFetch (make method defaults?) 
 make blog list link scroll move to exact location for all screen heights 
Make edited comment immediately reload/change to new edited comment after submitting the edit  

 Front-end nicer display improvements:  
                    Use animations to make website look nicer
                    Add landscape and portrait separate view layout (ie for phones turned sideways)
                    Add date/time to posts & comments 
                    Add date/time to login (user logged in at x time, user created at x date, ect)?
                    Add icons to blog list item display layout card
                    Add image to blog display card 
                    Add shadow to any card, button, or box of any kind (except for modals) 
                    Icons display (login & sign up forms) for small screens are slightly off
Icon's to add: 
                    any list in the website
                    in buttons (see linkedin connect button)
other: next and prev(arrows) for when fetching limited data at a time(if no auto - scrolling)
                    welcome card ?
    Blog list card display
                    Add aside card(see linkedin for examples)
                    Either fix smaller screen logged in dropdown searchbar to filter properly or remove searchbar completely
    TODO: fix error where page extends with horizontal scrollbar on the 'blogs/id' page(remove scrollbar) * /}

 Additional possible features to add(Do all the things above first): 
 Add a loggedIn user account info to loggedIn dropdown that will show account data that is not blog data (such as email, password change option)
Add Edit Your Info to loggedIn icon dropdown 
Add auto load when scrolling down to(fetch and) show more blogs, posts, or comments ?
    Add Categories to blogs 
Add a search bar for blogs 
Add comment replies ?
        Add change password(& logged in account info) 
Add a go to top of page button / link at bottom of page 
Add likes to posts & comments(look at linkedin feed on home page for example) 
Make edited posts / comments say edited 
Add a conformation email that works
Make password storage secure

*/