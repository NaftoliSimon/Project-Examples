import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedinProfile from '../data/links/linkedinUrl';

const Footer = () => (
    <footer className="bg-light text-dark py-3 mt-5">
        <Container>
            <Row>
                <Col md={3}>
                    <h5>About Us</h5>
                    <p>Designed and built with half the love in the world, without the help of any other human developers or contributors.</p>
                </Col>
                <Col md={3}>
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/blogs">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href={linkedinProfile}>Linkedin</a></li>
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
