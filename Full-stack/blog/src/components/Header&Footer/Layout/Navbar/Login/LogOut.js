import React from 'react'
import { Button } from 'react-bootstrap'

export default function LogOut({ setLoggedIn, setShow }) {
    function logOut() {
        setLoggedIn(false);
        setShow(false); //stops log in modal from popping up on log out
    }
    return (
        <Button variant='' className='color-secondary-reverse nav-link' onClick={logOut}>
            Log Out
        </Button>
    )
}
