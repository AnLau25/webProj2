import React from 'react';
import './Events.css';
import './Bluebg.css';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';

const Events = () => {
    return (
        <section className='background-banner' id='events'>
            <Container className="tab-container">
                <Row>
                    <Tabs defaultActiveKey="rdrs" className="custom-tabs">
                        <Tab eventKey="rdrs" title="Readers">
                            <div className='tab-content'>
                                <div className='placeholder'>Readers</div>
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
