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
                    <Col xs={12} md={6} className='map-container'>
                        <iframe
                            className='map'
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20047.237136317344!2d-6.002739966721597!3d37.40999743042508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126956225ef4d1%3A0x3497b39c342f5615!2sEl%20Arepazo%20Sevilla!5e0!3m2!1ses!2sca!4v1719981068877!5m2!1ses!2sca`}
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AbtUs;
