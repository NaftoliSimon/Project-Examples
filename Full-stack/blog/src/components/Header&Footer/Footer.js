import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import center from '../../data/Bootstrap/center';
import { linkIcons, links, socialMediaLinks, socialMediaLinkIcons } from '../../data/URLpaths';
import NavLink from './Navbar/NavLink';
import FooterList from './FooterList';

export default function Footer() {
    const aboutUsMessage = `Designed and built with half the love in the world, without the help of any other human developers or contributors.`
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
                        <FooterList links={links} linkIcons={linkIcons} justify={justify} title={'Links'} />
                    </Col>
                    <Col lg={2}>
                        <FooterList links={socialMediaLinks} linkIcons={socialMediaLinkIcons} justify={justify} title={'Follow Us'} />
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
