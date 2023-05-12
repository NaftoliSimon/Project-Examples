import React from 'react'
import focusOn from '../../../../functions/focusOn'

export default function InputIcon({ name, icon }) {

  return (
    <div className={`input-icon pointer`} onClick={() => focusOn(name)}>{icon}</div>
  )
}
