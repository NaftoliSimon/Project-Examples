import React from 'react'

export default function ExternalLink({link, text}) {
    const linkStyle = `fst-italic`;
  return (
    <a className={linkStyle} href={link} target="_blank" rel="noreferrer">{text}</a>
  )
}
