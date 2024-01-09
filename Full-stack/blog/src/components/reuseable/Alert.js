import React from 'react'
import { Alert } from 'react-bootstrap';
import AlertIcon from './AlertIcon';
//This alert pops up in whatever place it is located (as apposed to PopUpAlert.js which pops up as a modal )

export default function DismissibleAlert({ heading, text, show, setShow, variant, getPopClass = false }) {//getPopClass is passed in only if you want to make the alert pop out, it is a function that comes from the custom popOut hook (see hooks/popOut.js)
    if (!variant) { variant = 'danger'; } //default alert is set to 'danger' as it is most commonly used throughout the website

    const popUpClass = getPopClass ? getPopClass() : '';
    return (<>
        {show &&
            <div className={`mx-2 ${popUpClass}`}>
                <Alert variant={variant} onClose={() => setShow(false)} dismissible className='mb-0 border-4'>
                    <Alert.Heading className='text-uppercase' variant={variant}>
                        <AlertIcon variant={variant}/>
                        {heading}
                    </Alert.Heading>
                    <p>
                        {text}
                    </p>
                </Alert>
            </div>
        }
    </>)
}
