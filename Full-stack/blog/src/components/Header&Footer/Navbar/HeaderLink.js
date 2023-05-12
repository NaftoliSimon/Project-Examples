import React from 'react';
import useCustomNav from '../../../hooks/navigate';
import blogListLocation from '../../../data/scrollToHeight';
import { Col, Row } from 'react-bootstrap';
import center from '../../../data/Bootstrap/center';

export default function HeaderLink({ text, link, icon, style = '' }) { //style is for any additional bootstrap styling to add to the class
    const navigate = useCustomNav();
    const scrollToHeight = text.toLowerCase() === 'blogs' ? blogListLocation : null; //null defaults to top of page
    // const scrollToElem = text.toLowerCase() === 'blogs' ? scrollToBlogList : null;

    return (
        <li className={`nav-item d-flex fs-6 fw-lighter ${style}`}>
            <div className="nav-link-header text-capitalize px-2" onClick={() => navigate(link, scrollToHeight)}>
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
