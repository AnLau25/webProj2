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
                                    <h3>10h00 - 01h00 pm</h3>
                                    <Row>
                                        {/*Brunch*/}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h3>To be defined</h3>
                                    <Row>
                                        <div className='placeholder'>Dear gentle readers, fret not, this page shall be soon written.</div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h3>To be defined</h3>
                                    <Row>
                                        <div className='placeholder'>Dear gentle readers, fret not, this page shall be soon written.</div>
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
