import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

export default function DismissibleAlert({ heading, text, show, setShow, variant = `danger` }) {//show, setShow,
    const border = 'border border-5 p-0 m-2 rounded bsAlert'; //border and margin style is separate from alert because to fix error of it not appearing in sign up form
    return (<>
        {show && <div className={border}>
            <Alert variant={variant} onClose={() => setShow(false)} dismissible className='mb-0'>
            <Alert.Heading>{heading}</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert></div>}
        {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>)
}
