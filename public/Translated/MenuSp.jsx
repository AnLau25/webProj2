import React, { useState, useEffect } from 'react';
import './Menu.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Nav } from 'react-bootstrap';

const MenuSp = () => {
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
        <section className='menu' id='menusp'>
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
                                        <Nav.Link eventKey="second" id="menu-tab-second">Almuerzo</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="menu-tab-third">Cena</Nav.Link>
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
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1'/>
                                            <h1>¡Bebe!</h1>
                                            <div className='menu-items'>
                                                <h3>Bebida 1</h3>
                                                <p>Bebida 1: Descripción corta</p>
                                                <h3>Bebida 2</h3>
                                                <p>Bebida 2: Descripción corta</p>
                                                <h3>Bebida 3</h3>
                                                <p>Bebida 3: Descripción corta</p>
                                                <h3>Bebida 4</h3>
                                                <p>Bebida 4: Descripción corta</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>Sabores de la mente</h1>
                                            <h3>Platillos de Mano</h3>
                                            <div className='menu-items'>
                                                <h3>Plato salado 1</h3>
                                                <p>Plato salado 1: Descripción corta</p>
                                                <h3>Plato salado 2</h3>
                                                <p>Plato salado 2: Descripción corta</p>
                                                <h3>Plato salado 3</h3>
                                                <p>Plato salado 3: Descripción corta</p>
                                            </div>
                                            <h3>Ensaladas y Sopas</h3>
                                            <div className='menu-items'>
                                                <h3>Plato salado 1</h3>
                                                <p>Plato salado 1: Descripción corta</p>
                                                <h3>Plato salado 2</h3>
                                                <p>Plato salado 2: Descripción corta</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>¡Para el goloso!</h1>
                                            <div className='menu-items'>
                                                <h3>Postre 1</h3>
                                                <p>Postre 1: Descripción corta</p>
                                                <h3>Postre 2</h3>
                                                <p>Postre 2: Descripción corta</p>
                                                <h3>Postre 3</h3>
                                                <p>Postre 3: Descripción corta</p>
                                                <h3>Postre 4</h3>
                                                <p>Postre 4: Descripción corta</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2'/>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <h3 className="center-align">01h00 pm - 05h00 pm</h3>
                                    </Row>
                                    <Row className='menu-content'>
                                        <Col xs={12} md={4}>
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1'/>
                                            <h1>¡Bebe!</h1>
                                            <div className='menu-items'>
                                                <h3>Bebida 1</h3>
                                                <p>Bebida 1: Descripción corta</p>
                                                <h3>Bebida 2</h3>
                                                <p>Bebida 2: Descripción corta</p>
                                                <h3>Bebida 3</h3>
                                                <p>Bebida 3: Descripción corta</p>
                                                <h3>Bebida 4</h3>
                                                <p>Bebida 4: Descripción corta</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>Sabores de la mente</h1>
                                            <h3>Platillos de Mano</h3>
                                            <div className='menu-items'>
                                                <h3>Plato salado 1</h3>
                                                <p>Plato salado 1: Descripción corta</p>
                                                <h3>Plato salado 2</h3>
                                                <p>Plato salado 2: Descripción corta</p>
                                                <h3>Plato salado 3</h3>
                                                <p>Plato salado 3: Descripción corta</p>
                                            </div>
                                            <h3>Ensaladas y Sopas</h3>
                                            <div className='menu-items'>
                                                <h3>Plato salado 1</h3>
                                                <p>Plato salado 1: Descripción corta</p>
                                                <h3>Plato salado 2</h3>
                                                <p>Plato salado 2: Descripción corta</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>¡Para el goloso!</h1>
                                            <div className='menu-items'>
                                                <h3>Postre 1</h3>
                                                <p>Postre 1: Descripción corta</p>
                                                <h3>Postre 2</h3>
                                                <p>Postre 2: Descripción corta</p>
                                                <h3>Postre 3</h3>
                                                <p>Postre 3: Descripción corta</p>
                                                <h3>Postre 4</h3>
                                                <p>Postre 4: Descripción corta</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2'/>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <h3 className="center-align">05h00 pm - 12h00 am</h3>
                                    </Row>
                                    <Row className='menu-content'>
                                        <Col xs={12} md={4}>
                                            <img src='../Component 1BookMug.png' alt='menuDeco' className='img1'/>
                                            <h1>¡Bebe!</h1>
                                            <div className='menu-items'>
                                                <h3>Bebida 1</h3>
                                                <p>Bebida 1: Descripción corta</p>
                                                <h3>Bebida 2</h3>
                                                <p>Bebida 2: Descripción corta</p>
                                                <h3>Bebida 3</h3>
                                                <p>Bebida 3: Descripción corta</p>
                                                <h3>Bebida 4</h3>
                                                <p>Bebida 4: Descripción corta</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>Sabores de la mente</h1>
                                            <h3>Platillos de Mano</h3>
                                            <div className='menu-items'>
                                                <h3>Plato salado 1</h3>
                                                <p>Plato salado 1: Descripción corta</p>
                                                <h3>Plato salado 2</h3>
                                                <p>Plato salado 2: Descripción corta</p>
                                                <h3>Plato salado 3</h3>
                                                <p>Plato salado 3: Descripción corta</p>
                                            </div>
                                            <h3>Ensaladas y Sopas</h3>
                                            <div className='menu-items'>
                                                <h3>Plato salado 1</h3>
                                                <p>Plato salado 1: Descripción corta</p>
                                                <h3>Plato salado 2</h3>
                                                <p>Plato salado 2: Descripción corta</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <h1>¡Para el goloso!</h1>
                                            <div className='menu-items'>
                                                <h3>Postre 1</h3>
                                                <p>Postre 1: Descripción corta</p>
                                                <h3>Postre 2</h3>
                                                <p>Postre 2: Descripción corta</p>
                                                <h3>Postre 3</h3>
                                                <p>Postre 3: Descripción corta</p>
                                                <h3>Postre 4</h3>
                                                <p>Postre 4: Descripción corta</p>
                                            </div>
                                            <img src='../Component 2CakeDough.png' alt='menuDeco' className='img2'/>
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

export default MenuSp;
