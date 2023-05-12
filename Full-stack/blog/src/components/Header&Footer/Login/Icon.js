import React from 'react'
import center from '../../../data/Bootstrap/center';

export default function Icon({icon}) {
    return (
        <div className='row ps-0 ms-0'>
            <div className={`col ${center} ps-0 ms-0`}>{icon}</div>
        </div>
    )
}
