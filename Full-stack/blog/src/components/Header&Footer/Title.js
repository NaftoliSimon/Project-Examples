import React from 'react'
import websiteName from '../../data/websiteName'
import hide, { show } from '../../data/Bootstrap/hide'

export default function Title() {
  //TODO: get rid of title display on two separate lines for all screen sizes?
  return (<>
    <h1 className={`text-center p-1 m-0 w-75 ${hide.lg_xl}`} >{websiteName}</h1>
    <h1 className={` row text-center p-0 pb-1 m-0 ${show.lg_xl}`} >{websiteName}</h1>
  </>
  )
}
