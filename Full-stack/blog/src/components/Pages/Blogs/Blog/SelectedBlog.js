import React from 'react'
import bgColor from '../../../../data/backgroundColor'

export default function SelectedBlog({ selectedBlog }) {
    const { name, website, companyName } = selectedBlog;
    return (
        <div className={`h3 text-center block p-2 text-${bgColor}`}>
            <span className='d-block display-1'>{name}</span>
            <span className='d-block'>{companyName}</span>
            <a className={`d-block fst-italic link-${bgColor}`} href={addHttps(website)}>{website}</a> 
        </div>
    )
}

function addHttps(str) {
    const h = 'https://';
    if (!str.startsWith(h)) {
      str = `${h}${str}`
    }
    return str;
  }