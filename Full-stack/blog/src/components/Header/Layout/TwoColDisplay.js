import React from 'react'
import Author from './Author';
import Navbar from './Navbar/Navbar'
import Title from './Title';

export default function TwoColDisplay() {
    const visible_sm_xs = 'd-inline d-md-none'; //visible only on sm and xs screen sizes
    return (
        <div className={`container ${visible_sm_xs} ps-2`}>
            <div className={`row ps-2`}>
                <Navbar />
                <Author />
            </div>
            <div className={`row`}>
                <Title />
            </div>
        </div>
    )
}
