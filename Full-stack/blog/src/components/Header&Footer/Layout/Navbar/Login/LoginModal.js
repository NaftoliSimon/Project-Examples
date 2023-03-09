import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../../../data/URLpaths';
import myFetch from '../../../../../functions/myFetch';

export default function LoginModal({ show, setShow, setShowSignUp, loggedIn, setLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [savedUser, setSavedUser] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOpenSignUp = () => {
        handleClose();
        setShowSignUp(true);
    }
    const url = `${baseUrl}/signUp`
    useEffect(() => {
        myFetch(url, setSavedUser); //combine this with Sign up's fetch?
    }, [])
    function handleLogin() {

        const validUser = savedUser.find(obj => obj.email === email);
        console.log('validUser:', validUser);
        console.log('email:', email);
        console.log('password:', password);
        if(validUser) {
            if (validUser.password === password) {
                console.log('log in');
                setLoggedIn(true);
            } else {
                alert('Incorrect Password');
            }
        } else {
            alert('Invalid Email. Does not have an account associated with it.')
        }
        // if (!validEmail.email) {
        //     alert('Invalid Email. Does not have an account associated with it.')
        // } else {
        //     console.log('password:', password);
            // myFetch(`${baseUrl}/login/${email}`, setSavedPassword)
            // console.log('savedPassword:', savedPassword);
            // if (savedPassword === password) {
            //     console.log('log in');
            //     alert('Password is Incorrect');
            // }

        //     //  myPostFetch(url, headers);
        //     //close sign up modal
        //     //  handleClose();
        //     //log in to user account
        // }
        console.log('');
    }

    return (
        <>
            <Button variant="" className='color-secondary-reverse nav-link' onClick={handleShow}>
                Log In
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bgColor-primaryLight'>
                    <Modal.Title>Account Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bgColor-primaryLight'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                required
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bgColor-primaryLight d-flex flex-row-reverse'>
                    <Button className={'button order-3'} onClick={handleLogin}>
                        Log In
                    </Button>
                    <Button className='button order-2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <div className='ps-5 order-1'>Don't have an account? <a className='link' href='#' onClick={handleOpenSignUp}>Sign Up</a></div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<Example />);