import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { links, socialMediaLinks } from '../../data/URLpaths';
import LinksList from '../Header&Footer/Layout/Navbar/LinksList';

const aboutUsMessage = `Designed and built with half the love in the world, without the help of any other human developers or contributors.`

export default function Footer() {
    return (
        <footer className="bgColor-primary color-secondary-reverse py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>About Us</h5>
                        <p>{aboutUsMessage}</p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul><LinksList links={links} /></ul>
                    </Col>
                    <Col md={3}>
                        <h5>Follow Us</h5>
                        <ul>{Object.entries(socialMediaLinks).map(([name, link]) =>  
                        <a href={link} target="_blank" className='nav-link p-1' key={link}>{name}</a>
                        )}</ul>
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
}
