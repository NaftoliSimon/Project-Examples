import React from 'react'
import websiteName, { websiteTitle } from '../../data/websiteName'
import hide, { show } from '../../data/Bootstrap/hide'

export default function Title() {
  const h1 = 'text-center m-0'
  return (<>
    {/* <h1 className={`${h1} p-1 w-75 ${hide.lg_xl}`}>{websiteTitle}</h1> */}
    <h1 className={`${h1} row p-0 pb-1 fs-2 ${show.lg_xl}`}>{websiteTitle}</h1>
  </>
  )
}
