import React from 'react';
import './Events.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Events = () => {
    const [t, i18n] = useTranslation('global');

    return (
        <section className='events' id='events'>
            <Container className="tab-container">
                <Row>
                    <Tabs defaultActiveKey="rdrs" className="custom-tabs">
                        <Tab eventKey="rdrs" title={t("events.tabs.t1")}>
                            <div className='tab-content'>
                                <Row>
                                    <Col xs={12} md={4} className='txt-container'>
                                        <div className='txt'>
                                            <h1>{t("events.readersTab.libraryCollection.title")}</h1>
                                            <p>{t("events.readersTab.libraryCollection.description")}</p>
                                            <div className='stupidity-is-an-option-so-is-hardcoding'>
                                                <GoldBtn href="/Lib" prop={t("events.readersTab.libraryCollection.buttonText")} />
                                            </div>
                                        </div>
                                        <div className='txt'>
                                            <h1>{t("events.readersTab.cafeAndMenu.title")}</h1>
                                            <p>{t("events.readersTab.cafeAndMenu.description")}</p>
                                            <div className='stupidity-is-an-option-so-is-hardcoding'>
                                                <GoldBtn href="/Cafe#menu" prop={t("events.readersTab.cafeAndMenu.buttonText")} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={8} className='events-card'>
                                        <h1>{t("events.readersTab.eventsHeader")}</h1>
                                        <Container className='accord-container'>
                                            <Accordion defaultActiveKey="0" flush className='accord'>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>{t("events.readersTab.accordion.au1.author")}</span>{t("events.readersTab.accordion.au1.days")}</div>
                                                        <div>{t("events.readersTab.accordion.au1.title")}</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        {t("events.readersTab.accordion.au1.description")}</Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>{t("events.readersTab.accordion.au2.author")}</span>{t("events.readersTab.accordion.au2.days")}</div>
                                                        <div>{t("events.readersTab.accordion.au2.title")}</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        {t("events.readersTab.accordion.au2.description")}</Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>{t("events.readersTab.accordion.au3.author")}</span>{t("events.readersTab.accordion.au3.days")}</div>
                                                        <div>{t("events.readersTab.accordion.au3.title")}</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        {t("events.readersTab.accordion.au3.description")}</Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>{t("events.readersTab.accordion.au4.author")}</span>{t("events.readersTab.accordion.au1.days")}</div>
                                                        <div>{t("events.readersTab.accordion.au4.title")}</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        {t("events.readersTab.accordion.au4.description")}</Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                        <Tab eventKey="wrtrs" title={t("events.tabs.t2")}>
                            <div className='tab-content'>
                                <Row>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>{t("events.pagesTab.schedule.title")}</h1>
                                            <p>{t("events.pagesTab.schedule.description")}</p>
                                            <div className='stupidity-is-an-option-so-is-hardcoding'>
                                                <GoldBtn href="/#clndr" prop={t("events.pagesTab.schedule.buttonText")} />
                                            </div>
                                        </div>
                                        <div className='txt'>
                                            <h1>{t("events.pagesTab.clubs.title")}</h1>
                                            <p>{t("events.pagesTab.clubs.description")}</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>{t("events.pagesTab.paidEvents.title")}</h1>
                                            <p>{t("events.pagesTab.paidEvents.description")}</p>
                                            <div className='stupidity-is-an-option-so-is-hardcoding'>
                                                <GoldBtn href="/Cafe#pay" prop={t("events.pagesTab.paidEvents.buttonText")} />
                                            </div>
                                        </div>
                                        <div className='txt'>
                                            <h1>{t("events.pagesTab.damagedBooks.title")}</h1>
                                            <p>{t("events.pagesTab.damagedBooks.description")}</p>
                                            <div className='stupidity-is-an-option-so-is-hardcoding'>
                                                <GoldBtn href="/Lib" prop={t("events.pagesTab.damagedBooks.buttonText")} />
                                            </div>
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

//Spin in praxtice
//Terrible start from 3rd to 4th
//10s penalty
//Ese p3 sabia a gloria

//Fix size change
//edit re-size for phone