import React from 'react'

export default function SelectedBlog({ selectedBlog }) {
    const { name, website, companyName } = selectedBlog;
    return (
        <div className={`h3 text-center block p-2 bgColor-primaryLight color-primary`}>
            <span className='d-block display-1'>{name}</span>
            <span className='d-block'>{companyName}</span>
            <span className='d-block' >
                <a className={`fst-italic bgColor-primaryLight link-color`} href={addHttps(website)}>{website}</a>
            </span>
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