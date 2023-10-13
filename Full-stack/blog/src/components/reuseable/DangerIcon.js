import React from 'react'
import { BsExclamationTriangleFill } from 'react-icons/bs'

export default function DangerIcon({size = 40}) {
  return (
    <span className='mb-5 me-1 bsAlert'><BsExclamationTriangleFill className='pb-2' size={size}/></span>
  )
}
