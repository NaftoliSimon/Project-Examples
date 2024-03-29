import React from 'react';
import useCustomNav from '../../../hooks/navigate';
import { Col, Row } from 'react-bootstrap';
import center from '../../../data/Bootstrap/center';

export default function HeaderLink({ text, link, icon, style = '' }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    if(!icon) {
        console.error(`No icon found with url "${link}". See "URLpaths.js" for links and their icons`)
    }

    // const linkStyle = `pointer nav-link text-capitalize`;


    return (
        <li className={`nav-item d-flex fs-6 fw-lighter ${style}`}>
            <div className={`container nav-link-header pointer text-capitalize px-2`} onClick={() => navigate(link, text)}>
                <Col>
                    <Row>
                        <div className={`${center} fs-5`}>
                            <span>{icon}</span>
                        </div>
                    </Row>
                    <Row className='fst-italic' style={{ fontWeight: 'lighter' }}>
                        <span>{text}</span>
                    </Row>
                </Col>
            </div>
        </li>
    )
}
