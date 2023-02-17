import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedinProfile from '../data/external-links/linkedinUrl';
import { links } from '../data/URLpaths';
import NavLink from './Header/Layout/Navbar/NavLink';

const Footer = () => (
    <footer className="bgColor-primary color-secondary-reverse py-5 mt-5">
        <Container>
            <Row>
                <Col md={3}>
                    <h5>About Us</h5>
                    <p>Designed and built with half the love in the world, without the help of any other human developers or contributors.</p>
                </Col>
                <Col md={3}>
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        {Object.entries(links).map(([name, link]) =>  <NavLink key={name} text={name} link={link}/>)}
                        {/* <NavLink text='Home' link='/blogs'/>
                        <NavLink text='About' link='/about'/>
                        <NavLink text='Contact' link="/fakeNonExistantLink"/> */}
                    </ul>
                </Col>
                <Col md={3}>
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <NavLink text={'Facebook'} link="/fakeNonExistantLink"/>
                        <NavLink text={'Instagram'} link="/fakeNonExistantLink"/>
                        <NavLink text={'LinkedIn'} link={linkedinProfile}/>
                    </ul>
                </Col>
                <Col md={3}>
                    <h5>Contact Us</h5>
                    <p className="mb-0">123 Main Street</p>
                    <p className="mb-0">Anytown, USA 12345</p>
                    <p className="mb-0">555-555-1234</p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;

//The footer's text takes a few extra seconds to show on the about page