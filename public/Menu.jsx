import React, { useState, useEffect } from 'react';
import './Menu.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Menu = () => {
    const [defaultTab, setDefaultTab] = useState('first');
    const [t, i18n] = useTranslation('global');
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
        <section className='menu' id='menu'>
            <Container className='menu-tab-container'>
                <Row>
                    <Col>
                        <Tab.Container id='menu-toggle' activeKey={defaultTab} onSelect={handleTabSelect}>
                            <div className="center-align">
                                <Nav variant='pills'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" id="menu-tab-first">{t('menu.tabs.t1')}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" id="menu-tab-second">{t('menu.tabs.t2')}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="menu-tab-third">{t('menu.tabs.t3')}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <h3 className="center-align">10h00 am - 01h00 pm</h3>
                                    </Row>
                                    <Row className='menu-content'>
                                        <Col xs={12} md={4}>
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1' />
                                            <h1>{t('menu.drinks.title')}</h1>
                                            <div className='menu-items'>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>{t('menu.savory.title')}</h1>
                                            <h3>{t('menu.savory.handhelds.title')}</h3>
                                            <div className='menu-items'>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                            </div>
                                            <h3>{t('menu.savory.salads_soups.title')}</h3>
                                            <div className='menu-items'>
                                                <h3>{t('menu.savory.salads_soups.name')}</h3>
                                                <p>{t('menu.savory.salads_soups.description')}</p>
                                                <h3>{t('menu.savory.salads_soups.name')}</h3>
                                                <p>{t('menu.savory.salads_soups.description')}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>{t('menu.desserts.title')}</h1>
                                            <div className='menu-items'>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2' />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <h3 className="center-align">01h00 pm - 05h00 pm</h3>
                                    </Row>
                                    <Row className='menu-content'>
                                        <Col xs={12} md={4}>
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1' />
                                            <h1>{t('menu.drinks.title')}</h1>
                                            <div className='menu-items'>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>{t('menu.savory.title')}</h1>
                                            <h3>{t('menu.savory.handhelds.title')}</h3>
                                            <div className='menu-items'>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                            </div>
                                            <h3>{t('menu.savory.salads_soups.title')}</h3>
                                            <div className='menu-items'>
                                                <h3>{t('menu.savory.salads_soups.name')}</h3>
                                                <p>{t('menu.savory.salads_soups.description')}</p>
                                                <h3>{t('menu.savory.salads_soups.name')}</h3>
                                                <p>{t('menu.savory.salads_soups.description')}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>{t('menu.desserts.title')}</h1>
                                            <div className='menu-items'>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2' />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <h3 className="center-align">05h00 pm - 12h00 am</h3>
                                    </Row>
                                    <Row className='menu-content'>
                                        <Col xs={12} md={4}>
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1' />
                                            <h1>{t('menu.drinks.title')}</h1>
                                            <div className='menu-items'>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                                <h3>{t('menu.drinks.name')}</h3>
                                                <p>{t('menu.drinks.description')}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>{t('menu.savory.title')}</h1>
                                            <h3>{t('menu.savory.handhelds.title')}</h3>
                                            <div className='menu-items'>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                                <h3>{t('menu.savory.handhelds.name')}</h3>
                                                <p>{t('menu.savory.handhelds.description')}</p>
                                            </div>
                                            <h3>{t('menu.savory.salads_soups.title')}</h3>
                                            <div className='menu-items'>
                                                <h3>{t('menu.savory.salads_soups.name')}</h3>
                                                <p>{t('menu.savory.salads_soups.description')}</p>
                                                <h3>{t('menu.savory.salads_soups.name')}</h3>
                                                <p>{t('menu.savory.salads_soups.description')}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>{t('menu.desserts.title')}</h1>
                                            <div className='menu-items'>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                                <h3>{t('menu.desserts.name')}</h3>
                                                <p>{t('menu.desserts.description')}</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2' />
                                        </Col>
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
