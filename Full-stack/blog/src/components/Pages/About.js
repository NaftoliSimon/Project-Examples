import React from 'react'
import bgColor from '../../data/backgroundColor';
import ButtonLink from '../ButtonLink';
import linkedinProfile from '../../data/links/linkedinUrl';

export default function About() {
    const li = `list-group-item text-${bgColor} border-0 pt-0`;
    return (
        <div className={`text-center text-${bgColor}`}>
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
                    This website was made by <a href={linkedinProfile}>Naftoli Simon</a>.
                </span>
                <hr />
                <ul className='d-block pt-3 pb-0 list-group list-group-flush'>
                    <h5><u>FUTURE UPDATES</u></h5>
                    <li className={li}>CRUD features for Blogs and Posts</li>
                    <li className={li}>User Login</li>
                    <li className={li}>Launch Website</li>
                    <li className={li}>Update CSS to SASS</li>
                    <li className={li}>Add joi validation</li>
                    <li className={li}>Fetch and display limited amount of data at one time</li>
                </ul>
            </div>
            <hr />
            <ButtonLink text='Return to Blogs' link="/blogs"></ButtonLink>
        </div >
    )
}
