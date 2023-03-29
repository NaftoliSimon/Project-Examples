import React from 'react'
import { BsPerson } from 'react-icons/bs';
import center from '../../../../../data/Bootstrap/center';

export default function Icon({icon}) {
    return (
        <div className='row ps-0 ms-0'>
            <div className={`col ${center} ps-0 ms-0`}>{icon}</div>
        </div>
    )
}
