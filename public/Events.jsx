import React from 'react';
import './Events.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Accordion } from 'react-bootstrap';

const Events = () => {
    return (
        <section className='events' id='events'>
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
                                            <GoldBtn href="/Lib" prop='Browse our Collection' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Café and Menu</h1>
                                            <p>Specs about the menu, the time at which each menu happens, maybe talk about the chef.</p>
                                            <GoldBtn href="/Cafe#menu" prop='Check out the menu' />
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
                        <Tab eventKey="wrtrs" title="Pages">
                            <div className='tab-content'>
                            <Row>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>Schedule</h1>
                                            <p>The longuer secription about hao the schedule works,probably more content abouyt the clubs, actually, it'll probably mainly6 be an introduction to the clubs and whatnot.</p>
                                            <GoldBtn href="/#clndr" prop='Our Schedule' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Clubs</h1>
                                            <p>Will be explaining the requirements of a club, it'll discus thenujber of members, how they will deal with the catering and so on and so forth, the are more informal than events.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>Paid Events</h1>
                                            <p>The more serious stuff since it involves authors reaching out to them or viceversa for events regarding the author's book's marketing and whanot. A brief explenation as to why these are paid.</p>
                                            <GoldBtn href="/Cafe#pay" prop='Register for an event' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Damaged book policie</h1>
                                            <p>Yes, they do lend the books and yes you an read and eat but the place has very old books that can be easly damages and require costly repairs.</p>
                                            <GoldBtn href="/Lib" prop='Our Collection' />
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    );
}

export default Events;
