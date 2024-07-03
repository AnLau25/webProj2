import React from 'react';
import './AbtUs.css';
import GoldSep from './GoldSep';
import GoldBtn from './GoldBtn';
import { Row, Col, Container } from 'react-bootstrap';

const AbtUs = () => {
    return (
        <div className='AbtUs'>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <GoldSep />
                    </Col>
                </Row>
                <Row className='content-row'>
                    <Col xs={12} md={6} className='txt-container'>
                        <h1>About our “Capricho”</h1>
                        <p>
                            Short explanation of the café’s name and the fact that “Capricho”
                            means whim in Spanish. Some background info as to who the small group
                            of entrepreneurs is, you know the basics. This page works well because
                            it’s for a start-up and cause this place has a background story in my
                            head that deserves to be told.
                        </p>
                        <div className='times'>
                            <div>Mon-Thu : 10h00 - 12h00 am</div>
                            <div>Fri-Sun : 11h00 - 01h00 am</div>
                        </div>
                        <div className='btn-container'>
                            <GoldBtn href="#" prop='Check out the events' />
                            <GoldBtn href="#" prop='Check out the menu' />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='map'>
                        <h1>Location Map</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AbtUs;
