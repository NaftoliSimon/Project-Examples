import './SelectedBlog.css'
import React from 'react'

export default function SelectedBlog({ blog }) {
    const { name, website, company } = blog;
    return (
        <div className='selectedBlog'>
            <span className='selectedBlogName'>{name}</span>
            <span className='website'>{website}</span>
            <span className='company'>{company.name}</span>
        </div>
    )
}
