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
                                    <Col xs={12} md={4} className='txt-container'>
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
                                    <Col xs={12} md={8} className='events-card'>
                                        <h1>Events of the week</h1>
                                        <Container className='accord-container'>
                                            <Accordion defaultActiveKey="0" flush className='accord'>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Maurice Leblanc</span>Mon Tue</div>
                                                        <div>On how to write a classy burglar</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Join renowned creator of Arsène Lupin, Maurice Leblanc, for a workshop on creating a character with dubious morals but plenty of finesse. Discover the art of crafting a sophisticated and charming thief, master the elements of suspense and intrigue, and learn how to weave captivating plots that keep readers hooked. Unleash your imagination and bring your own elegant rogue to life.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Agatha Christie </span>Wed Fri</div>
                                                        <div>Send chills down your readers spines</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Join the legendary queen of mystery, Agatha Christie, for an immersive workshop on crafting suspenseful narratives that will leave your readers on the edge of their seats. Learn the secrets of building tension, developing unforgettable characters, and creating twists that will keep your audience guessing until the very end.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Jane Austen </span>Thu</div>
                                                        <div>Write your own, prideful Lover Boy</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Step into the elegant world of Jane Austen and discover how to create charming and complex characters with a touch of pride. In this workshop, you'll learn from the master of romantic fiction how to develop intriguing plots, witty dialogue, and captivating love interests that resonate with readers. Unleash your creativity and craft a timeless story filled with romance and social commentary.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Nicolás Maquiavelo</span>Sat</div>
                                                        <div>Book reading of “The Prince”</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Join us for a captivating book reading of "The Prince" by Nicolás Maquiavelo, where you'll delve into the intricate world of political strategy and leadership. Experience the timeless wisdom of Machiavelli as we explore his profound insights on power, governance, and human nature. This event promises to be an enlightening journey through one of history's most influential works on political philosophy.
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
