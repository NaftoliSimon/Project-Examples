import React from 'react'
import focusOn from '../../../../../../functions/focusOn'

export default function InputIcon({name, icon, validated = false}) {
    let invalid = '';
    // if( validated && (name === 'retypePassword')) {
    //     invalid = 'invalid'
    // }
  return (
    <div className={` input-icon ${invalid}`} onClick={() => focusOn(name)}>{icon}</div>
  )
}
