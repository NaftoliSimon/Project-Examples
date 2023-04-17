import React from 'react'
import websiteName from '../../../data/websiteName'

export default function Title() {
  //TODO: get rid of title display on two separate lines for all screen sizes?
  return (
    <h1 className='col text-center p-0 m-0'>{websiteName}</h1>
  )
}
