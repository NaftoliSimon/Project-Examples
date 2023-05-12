import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import center from '../../data/Bootstrap/center';
import { linkIcons, links, socialMediaLinks } from '../../data/URLpaths';
import NavLink from './Navbar/NavLink';

const aboutUsMessage = `Designed and built with half the love in the world, without the help of any other human developers or contributors.`

export default function Footer() {
    const { facebook, linkedIn, github } = socialMediaLinks;
    const { home, blogs, about } = linkIcons;

    const justify = 'd-flex align-items-center mb-0';
    return (
        <footer className="bgColor-primary color-secondary-reverse py-5">
            <Container>
                <Row>
                    <Col lg={3}>
                        <h5 className={justify}>About Us</h5>
                        <p className={center}>{aboutUsMessage}</p>
                    </Col>
                    <Col lg={2}>
                        <h5 className={justify}>Links</h5>
                        <ul className={`list-group  mb-3`}>
                            <NavLink text={'Home'} link={links.home} icon={home} />
                            <NavLink text={"Blogs"} link={links.blogs} icon={blogs} />
                            <NavLink text={'About'} link={links.about} icon={about} />
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <h5 className={justify}>Follow Us</h5>
                        <ul className={`list-group mb-3`}>
                            <NavLink link={linkedIn} text={'LinkedIn'} icon={<BsLinkedin />} style={'w-100'} />
                            <NavLink link={github} text={'Github'} icon={<BsGithub />} style={'w-100'} />
                            {/* <NavLink link={facebook} text={'Facebook'} icon={<BsFacebook />} style={'w-100'}/> */}
                        </ul>
                    </Col>
                    <Col lg={2}>
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
