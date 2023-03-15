import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../../../data/URLpaths';
import myFetch from '../../../../../functions/myFetch';
import { useNavigate } from 'react-router-dom';
import useCustomNav from '../../../../../hooks/navigate';

export default function LoginModal(params) {
    const { show, setShow, setShowSignUp, loggedIn, setLoggedIn, showLogin: title } = params;
    const modalTitle = typeof title === 'string' ? title : "Account Log In"; //showLogin (or title) is either true or a string

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [savedUser, setSavedUser] = useState({});
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    //TODO: Add show hide password icon/button
    //TODO: Add icons by inputs to make it look nicer

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOpenSignUp = () => {
        handleClose();
        setShowSignUp(true);
    }
    const navigate = useCustomNav();
    const url = `${baseUrl}/signUp`
    useEffect(() => {
        myFetch(url, setSavedUser); //combine this with Sign up's fetch?
    }, [])
    function handleLogin() {
        const validUser = savedUser.find(obj => obj.email === email);
        if (validUser) {
            setInvalidEmail(false);
            if (validUser.password === password) {
                setLoggedIn(validUser);
                setInvalidPassword(false);
                // history.push('/');
                // navigate('#');
                // window.location.reload(false);
            } else {
                setInvalidPassword(<span className='text-danger ps-3 '> Password Is Incorrect</span>)
            }
        } else {
            setInvalidEmail(<span className='text-danger ps-3 '> Invalid Email</span>)
        }
    }
    const onKeyDown = ({ key }) => {
        if (key === 'Enter') {
            handleLogin();
        }
    };
    return (
        <>
            <Button variant="" className='color-secondary-reverse nav-link' onClick={handleShow}>
                Log In
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bgColor-primaryLight'>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bgColor-primaryLight'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address {invalidEmail}</Form.Label>
                            <Form.Control
                                type="email"
                                // placeholder="name@example.com"
                                placeholder="Enter Your Email"
                                required
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password {invalidPassword}</Form.Label>
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter Your Password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onKeyDown={onKeyDown}
                            />
                            <i className='fa fa-eye fa-fw'></i>
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