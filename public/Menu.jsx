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
        <section className='background-banner menu' id='menu'>
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
                                    <Row className='menu-content'>
                                        <Col xs={12} md={4} className='menu-list'>
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1'/>
                                            <h1>Drink up!</h1>
                                            <div className='menu-items'>
                                                <h3>Drink 1</h3>
                                                <p>Drink 1 : Short description</p>
                                                <h3>Drink 2</h3>
                                                <p>Drink 2 : Short description</p>
                                                <h3>Drink 3</h3>
                                                <p>Drink 3 : Short description</p>
                                                <h3>Drink 4</h3>
                                                <p>Drink 4 : Short description</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>Savory of mind</h1>
                                            <h3>Handhelds</h3>
                                            <div className='menu-items'>
                                                <h3>Salty dish  1</h3>
                                                <p>Salty dish 1 : Short description</p>
                                                <h3>Salty dish  2</h3>
                                                <p>Salty dish 2 : Short description</p>
                                                <h3>Salty dish  3</h3>
                                                <p>Salty dish 3 : Short description</p>
                                            </div>
                                            <h3>Salads & Soups</h3>
                                            <div className='menu-items'>
                                                <h3>Salty dish  1</h3>
                                                <p>Salty dish 1 : Short description</p>
                                                <h3>Salty dish  2</h3>
                                                <p>Salty dish 2 : Short description</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>For the sweet tooth!</h1>
                                            <div className='menu-items'>
                                                <h3>Dessert  1</h3>
                                                <p>Dessert 1 : Short description</p>
                                                <h3>Dessert  2</h3>
                                                <p>Dessert 2 : Short description</p>
                                                <h3>Dessert  3</h3>
                                                <p>Dessert 3 : Short description</p>
                                                <h3>Dessert  4</h3>
                                                <p>Dessert 4 : Short description</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2'/>
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
