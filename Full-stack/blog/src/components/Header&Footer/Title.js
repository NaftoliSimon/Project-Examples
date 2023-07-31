import React from 'react'
import websiteName, { websiteTitle } from '../../data/websiteName'
import hide, { show } from '../../data/Bootstrap/hide'

export default function Title() {
  //TODO: make sure title is centered for all screen devices (phone, tablet, ect)
  return (<>
    <h1 className={`text-center p-1 m-0 w-75 ${hide.lg_xl}`} >{websiteTitle}</h1>
    <h1 className={` row text-center p-0 pb-1 m-0 ${show.lg_xl}`} >{websiteTitle}</h1>
  </>
  )
}
