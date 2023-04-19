import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import center from '../../data/Bootstrap/center';
import { links, socialMediaLinks } from '../../data/URLpaths';
import { FaHome, FaInfoCircle, FaReadme } from 'react-icons/fa';
import NavLink from './Layout/Navbar/NavLink';

const aboutUsMessage = `Designed and built with half the love in the world, without the help of any other human developers or contributors.`

export default function Footer() {
    const { Facebook, LinkedIn } = socialMediaLinks;
    const justify = 'd-flex align-items-center mb-0'
    return (
        <footer className="bgColor-primary color-secondary-reverse py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5 className={justify}>About Us</h5>
                        <p className={center}>{aboutUsMessage}</p>
                    </Col>
                    <Col md={2}>
                        <h5 className={justify}>Links</h5>
                        <ul className={`list-group  mb-3`}>
                            {/* <LinksList links={links} /> */}
                            <NavLink text={'Home'} link={links.Home} icon={<FaHome/>} />
                            <NavLink text={"Blogs"} link={links.Blogs} icon={<FaReadme/>}/>
                            <NavLink text={'About'} link={links.About} icon={<FaInfoCircle/>}/>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5 className={justify}>Follow Us</h5>
                        <ul className={`list-group mb-3`}>
                            <NavLink link={LinkedIn} text={'LinkedIn'} icon={<BsLinkedin />} />
                            <NavLink link={Facebook} text={'Facebook'} icon={<BsFacebook />} />
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
