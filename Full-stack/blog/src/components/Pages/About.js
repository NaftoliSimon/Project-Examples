import React from 'react'
import bgColor from '../../data/backgroundColor';
import ButtonLink from '../ButtonLink';

export default function About() {
    const aboutURL = 'https://jsonplaceholder.typicode.com/';
    return (
        <div className={`text-center text-${bgColor}`}>
            <h3>About This Website</h3>
            <p className='d-block'>
                <span className='d-block'>
                    This Project, is a full stack blog website with node.js back-end. I have built my own blogApi that fetches SQL data from my local machine.
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
                    FUTURE UPDATE: Node.js backend with full CRUD features and user login.
                </span>
                <span className='d-block'>
                    This project was made by Naftoli Simon.
                </span>
            </p>
            <ButtonLink text='Return to Blogs' link="/blogs"></ButtonLink>
        </div >
    )
}
