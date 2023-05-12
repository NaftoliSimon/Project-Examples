import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

export default function DismissibleAlert({ heading, text, show, setShow, variant = `danger` }) {//show, setShow,
    
    return (<>
        {show && <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{heading}</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert>}
        {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>)
}
