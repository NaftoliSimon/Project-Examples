import './About.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    const aboutURL = 'https://jsonplaceholder.typicode.com/';
    return (<>
        <h3 className='aboutTitle'>About This Website</h3>
        <p className='about'>
            <span>
                This Project is a small, simple, front-end blog website that displays fake data from
                <a className='link' href={aboutURL} target="_blank" rel="noreferrer">
                    {aboutURL}
                </a>
                The fake data fetched from the Api gives 10 blogs, 10 posts per blog, and 6 comments per post.
            </span>
            <span>
                This site is built with React, React Router (v6), and Functional Components with hooks.
                There are no class components in this project.
            </span>
            <span>
                Was built using Visual Studio Code.
            </span>
            <strong>THIS PROJECT IS FOR VIEWING PURPOSES ONLY</strong>
            <span>
                This project was made entirely by Naftoli Simon.
            </span>
            <Link className='link' to={'/blogs'}>Click Here To Go To Blogs</Link>
        </p>
    </>
    )
}
