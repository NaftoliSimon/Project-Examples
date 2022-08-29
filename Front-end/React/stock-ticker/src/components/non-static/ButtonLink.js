import React from 'react'

export default function ButtonLink({ text, link }) {
    const center = 'd-flex align-items-center justify-content-center';
    return (
        <div className={`pb-3 container ${center}`}>
            <a className={`btn btn-primary ${center}`} href={link} role="button">{text}</a>
        </div>
    )
}
