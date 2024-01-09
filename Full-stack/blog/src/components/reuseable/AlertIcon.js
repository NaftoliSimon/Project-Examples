import React from 'react'
import { BsCheckCircleFill, BsExclamationTriangleFill } from 'react-icons/bs'
import { RiErrorWarningLine } from 'react-icons/ri';

export default function AlertIcon({ variant, size = 40 }) {
  let icon;

  switch (variant) {
    case 'info':
      icon = <RiErrorWarningLine className='pb-1' size={size} />
      break;
    case 'success':
      icon = <BsCheckCircleFill className='pb-1' size={size - 5}/>
      break;
    case 'danger':
    default:
      icon = <BsExclamationTriangleFill className='pb-2' size={size} />
  }

  return (
    <span className='mb-5 me-1'>{icon}</span>
  )
}
