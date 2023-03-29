import React from 'react'
import { Button } from 'react-bootstrap'

export default function LogOut({ setLoggedIn, setShow, setShowLogOutPerson }) {
    function logOut() {
        localStorage.removeItem('loggedInUser');
        setLoggedIn(false);
        setShow(false); //stops log in modal from popping up on log out
        window.location.reload(false);//reloads page (to remove all elements that should only show when logged in) 
    }
    return (
        <Button variant=''
            className='color-secondary-reverse nav-link'
            onClick={logOut}
            onMouseOver={() => setShowLogOutPerson(true)}
            onMouseLeave={() => setShowLogOutPerson(false)}
        >
            Log Out
        </Button>
    )
}
