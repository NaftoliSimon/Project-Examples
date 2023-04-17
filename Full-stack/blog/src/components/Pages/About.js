import React from 'react'
import ButtonLink from '../ButtonLink';
import { linkedinProfile, links } from '../../data/URLpaths';

export default function About() {
    const li = `list-group-item bgColor-primaryLight dark border-0 pt-0`;
    return (
        <div className={`text-center dark`}>
            <h3>About This Website</h3>
            <div className='d-block'>
                <span className='d-block'>
                    This Project, is a full stack blog website with node.js back-end & CRUD features. I have built my own blog Api that fetches SQL data from my local machine.
                </span>
                <span className='d-block'>
                    This website is built with React, React Router, and Functional Components with hooks.
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
                <hr />
                <ul className='d-block pt-3 pb-0 list-group list-group-flush'>
                    <h5><u>FUTURE UPDATES</u></h5>
                    <li className={li}>Delete features for Blogs and Posts</li>
                    <li className={li}>Launch Website</li>
                    <li className={li}>Add joi validation, display to user limits (ie character length)</li>
                    <li className={li}>Fetch and display limited amount of data at one time</li>
                    <li className={li}>
                        Add icons (on forms, header, footer, ect) and add images, background images, to make website look nicer
                    </li>
                    {/* <li className={li}>Add comment replies?</li> */}
                    {/* <li className={li}>Automatically log user out after x time (ie remove user from localStorage if not logged in)</li> */}
                    {/* <li className={li}>Add change password (& logged in account info)</li> */}
                    {/* <li className={li}>Do all the TODOs throughout the project, or delete them if not applicable</li> */}
                    {/* <li className={li}>Add date/time to posts & comments</li> */}
                    {/* <li className={li}>Add a search bar for blogs</li> */}
                    {/* <li className={li}>Add auto load when scrolling down to (fetch and) show more blogs, posts, or comments</li> */}
                    {/*Icon's to add: 
                    header/footer: social media icons, dropdown icon: bsJustify, list icon
                    other: next and prev (arrows) for when fetching limited data at a time (if no auto-scrolling)*
                    login/logout/signup: make login icon to click with dropdown menu to dropdown option to signup or login but if logged in show sign up, instead of just seperate link with icons hover/}
                    {/*TODO: fix error where page extends with horizontal scrollbar on the 'blogs/id' page (remove scrollbar) */}
                </ul>
            </div>
            <hr />
            <ButtonLink text='Return Home' link={links.Blogs}></ButtonLink>
        </div >
    )
}
