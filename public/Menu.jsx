import React, { useState, useEffect } from 'react';
import './Menu.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Nav } from 'react-bootstrap';

const Menu = () => {
    const [defaultTab, setDefaultTab] = useState('first');

    useEffect(() => {
        const hash = window.location.hash;
        if (hash.includes('?')) {
            const queryParams = new URLSearchParams(hash.split('?')[1]);
            const tab = queryParams.get('tab');
            if (tab) {
                setDefaultTab(tab);
            }
        }
    }, []);

    const handleTabSelect = (key) => {
        setDefaultTab(key);
    };

    return (
        <section className='background-banner' id='menu'>
            <Container className='menu-tab-container'>
                <Row>
                    <Col>
                        <Tab.Container id='menu-toggle' activeKey={defaultTab} onSelect={handleTabSelect}>
                            <div className="center-align">
                                <Nav variant='pills'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" id="menu-tab-first">Brunch</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" id="menu-tab-second">Lunch</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="menu-tab-third">Munch</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <h3 className="center-align">10h00 - 01h00 pm</h3>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={3}>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <h3 className="center-placeholder">To be defined</h3>
                                    </Row>
                                    <Row>
                                        <div className='placeholder center-placeholder'>Dear gentle readers, fret not, this page shall be soon written.</div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <h3 className="center-placeholder">To be defined</h3>
                                    </Row>
                                    <Row>
                                        <div className='placeholder center-placeholder'>Dear gentle readers, fret not, this page shall be soon written.</div>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Menu;
