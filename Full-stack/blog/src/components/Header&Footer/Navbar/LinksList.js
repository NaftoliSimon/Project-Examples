import React from 'react'
import { linkIcons } from '../../../data/URLpaths'
import HeaderLink from './HeaderLink'

export default function LinksList({links, style = ''}) { //style is optional (see NavLink.js)
  //Maps through an object of key value pairs, where the key is the text display of the link's name and the value is the link url path
  return (<>
    {Object.entries(links).map(([name, link]) =>  <HeaderLink key={name} text={name} link={link} style={style} icon={linkIcons[name]}/>)}
    </>)
}
