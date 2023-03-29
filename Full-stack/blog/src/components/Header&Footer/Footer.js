import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import center from '../../data/Bootstrap/center';
import { links, socialMediaLinks } from '../../data/URLpaths';
import LinksList from '../Header&Footer/Layout/Navbar/LinksList';
import SocialMediaLinkItem from './Layout/Navbar/SocialMediaLinkItem';

const aboutUsMessage = `Designed and built with half the love in the world, without the help of any other human developers or contributors.`

export default function Footer() {
    const { Facebook, LinkedIn } = socialMediaLinks;
    // const justify = "d-flex justify-content-start";
    const justify = 'd-flex align-items-center'
    return (
        <footer className="bgColor-primary color-secondary-reverse py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5 className={justify}>About Us</h5>
                        <p className={center}>{aboutUsMessage}</p>
                    </Col>
                    <Col md={2}>
                        <h5 className={justify}>Quick Links</h5>
                        <ul className={``}><LinksList links={links} /></ul>
                    </Col>
                    <Col md={2}>
                        <h5 className={justify}>Follow Us</h5>
                        <ul className={`list-group mb-2`}>
                            <SocialMediaLinkItem link={Facebook} name={'Facebook'} icon={<BsFacebook/>}/>
                            <SocialMediaLinkItem link={LinkedIn} name={'LinkedIn'} icon={<BsLinkedin/>}/> 
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5 className={justify}>Contact Us</h5>
                        <p className={`mb-0`}>123 Main Street</p>
                        <p className={`mb-0`}>Anytown, USA 12345</p>
                        <p className={`mb-0`}>555-555-1234</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
