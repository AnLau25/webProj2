import React from 'react';
import './Events.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Accordion } from 'react-bootstrap';

const Events = () => {
    return (
        <section className='background-banner' id='events'>
            <Container className="tab-container">
                <Row>
                    <Tabs defaultActiveKey="rdrs" className="custom-tabs">
                        <Tab eventKey="rdrs" title="Readers">
                            <div className='tab-content'>
                                <Row>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>Library Collection</h1>
                                            <p>Short description of the way the library system works. A lil talk about the classics maybe talk abt the booking system.</p>
                                            <GoldBtn href="#" prop='Browse our Collection' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Café and Menu</h1>
                                            <p>Specs about the menu, the time at which each menu happens, maybe talk about the chef.</p>
                                            <GoldBtn href="#" prop='Check out the menu' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} className='bCard'>
                                        <h1>QUESTIONS & RÉPONSES</h1>
                                        <Container className='Acord-container'>
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Mettre une première question ici ?</Accordion.Header>
                                                    <Accordion.Body>
                                                        La réponse irait ici, l'engrenage fonctionne comme un toggle.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Mettre une deuxième question ici ?</Accordion.Header>
                                                    <Accordion.Body>
                                                        La réponse irait ici, l'engrenage fonctionne comme un toggle.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Mettre une troisième question ici ?</Accordion.Header>
                                                    <Accordion.Body>
                                                        La réponse irait ici, l'engrenage fonctionne comme un toggle.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Mettre une quatrième question ici ?</Accordion.Header>
                                                    <Accordion.Body>
                                                        La réponse irait ici, l'engrenage fonctionne comme un toggle.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                        <Tab eventKey="wrtrs" title="Writers">
                            <div className='tab-content'>
                                <div className='placeholder'>Dear gentle authors, fret not, this page shall be soon written.</div>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    );
}

export default Events;
