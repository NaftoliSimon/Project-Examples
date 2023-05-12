import React from 'react'
import ButtonLink from '../ButtonLink';
import { linkedinProfile, links, socialMediaLinks } from '../../data/URLpaths';
import { Card } from 'react-bootstrap';

export default function About() {
    const li = `list-group-item bg-transparent dark border-0 pt-0`;
    const card = `m-4`;
    return (<>
        <div className={`text-center dark`}>
            <Card className={card}><Card.Body>
                <h3>About This Website</h3>
            </Card.Body></Card>
            <div className='d-block'>
                <Card className={card}><Card.Body>
                    <span className='d-block'>
                        This Project, is a full stack blog website with node.js back-end & CRUD features. I have built my own blog Api that fetches SQL data from my local machine.
                    </span>
                    <span className='d-block'>
                        This website is built with React, React Router, and Functional Components with hooks.
                    </span>
                    <span className='d-block'>
                        Was built with a PC & Google Chrome (not yet tested on other device types).
                    </span>
                    <span className='d-block'>
                        Was built using Visual Studio Code.
                    </span>
                    <strong className='d-block text-uppercase'>
                        This website is currently under construction.
                    </strong>
                    <span className='d-block'>
                        This website was made by <a className="link-color fst-italic" href={linkedinProfile} target="_blank">Naftoli Simon</a>.
                    </span>
                    <span className='d-block'>
                        Check out the <a className="link-color fst-italic pointer" href={socialMediaLinks.github} target="_blank">Github</a>.
                    </span>
                </Card.Body></Card>
                <Card className={card}><Card.Body>
                    <ul className='d-block pt-3 pb-0 list-group list-group-flush'>
                        <h5><u>FUTURE UPDATES</u></h5>
                        <li className={li}>Delete features for Blogs and Posts</li>
                        <li className={li}>Launch Website - (use aws or azure for database) </li>
                        <li className={li}>Add joi validation, display to user limits (ie character length) for ALL input fields</li>
                        <li className={li}>Fetch and display limited amount of data at one time</li>
                        {/* <li className={li}>Test on other device types (after launching website)</li> */}

                        {/* Coding improvements */}
                        {/* Do all the TODOs throughout the project, or delete them if not applicable */}
                        {/*Improve pre-existing code (use chat GPT)*/}
                        {/*Make code easy to read and understand */}
                        {/* remove old unnecessary code (like bootstrap style) */}
                        {/*TODO: switch data passed in to only be object in body, and pass in Method to MyFetch & myPostFetch (make method defaults?) */}
                        {/* make blog list link scroll move to exact location for all screen heights */}
                        {/*Make edited comment immediately reload/change to new edited comment after submitting the edit  */}

                        {/* Front-end nicer display improvements:  
                    Use animations to make website look nicer
                    Add date/time to posts & comments 
                    Add date/time to login (user logged in at x time, user created at x date, ect)?
                    Add icons to blog list item display layout card
                    Add image to blog display card 
                    Add shadow to any card, button, or box of any kind (except for modals) 
                    */}
                        {/*Icon's to add: 
                    any list in the website
                    other: next and prev (arrows) for when fetching limited data at a time (if no auto-scrolling)
                    welcome card?
                    Blog list card display
                    Add aside card (see linkedin for examples)
                    {/*TODO: fix error where page extends with horizontal scrollbar on the 'blogs/id' page (remove scrollbar) */}

                        {/* Additional possible features to add (Do all the things above first): */}
                        {/*Add Edit Your Info to loggedIn icon dropdown */}
                        {/*Add auto load when scrolling down to (fetch and) show more blogs, posts, or comments? */}
                        {/*Add Categories to blogs */}
                        {/*Add a search bar for blogs */}
                        {/*Add comment replies? */}
                        {/*Add change password (& logged in account info) */}
                        {/*Add a go to top of page button/link at bottom of page */}
                        {/*Add likes to posts & comments (look at linkedin feed on home page for example) */}
                        {/*Make edited posts/comments say edited  */}
                    </ul>
                </Card.Body></Card>
            </div>
            <ButtonLink text='Return Home' link={links.blogs}></ButtonLink>
        </div >
    </>
    )
}
