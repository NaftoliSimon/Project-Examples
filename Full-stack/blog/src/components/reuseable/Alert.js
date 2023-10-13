import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
//This alert pops up in whatever place it is located (as apposed to PopUpAlert.js which pops up lik a modal )

export default function DismissibleAlert({ heading, text, show, setShow, variant = `danger` }) {//show, setShow,
    const border = 'border border-5 p-0 m-2 rounded bsAlert'; //border and margin style is separate from alert because to fix error of it not appearing in sign up form
    return (<>
        {show && <div className={border}>
            <Alert variant={variant} onClose={() => setShow(false)} dismissible className='mb-0'>
            <Alert.Heading className='text-uppercase'>{heading}</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert></div>}
        {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>)
}
