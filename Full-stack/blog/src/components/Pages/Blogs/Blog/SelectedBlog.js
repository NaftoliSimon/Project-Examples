import React from 'react'
import bgColor from '../../../../data/backgroundColor'

export default function SelectedBlog({ selectedBlog }) {
    const { name, website, company } = selectedBlog;
    return (
        <div className={`h3 text-center block p-2 text-${bgColor}`}>
            <span className='d-block display-1'>{name}</span>
            <span className='d-block'>{company.name}</span>
            <a className={`d-block fst-italic link-${bgColor}`} href={addHttpsWWW(website)}>{website}</a> 
            {/* more data is available to display see https://jsonplaceholder.typicode.com/users */}
        </div>
    )
}

function addHttpsWWW(str) {
    const w = 'www.';
    const h = 'https://';
    if (!str.startsWith(w) && !str.startsWith(h)) {
      str = `${h}${w}${str}`
    }
    else if (str.startsWith(w)) {
        str = `${h}${str}`
    }
    return str;
  }