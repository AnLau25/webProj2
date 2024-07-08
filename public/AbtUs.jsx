import React from 'react';
import './AbtUs.css';
import GoldSep from './GoldSep';
import GoldBtn from './GoldBtn';
import { Row, Col, Container } from 'react-bootstrap';

const AbtUs = () => {
    return (
        <section className='AbtUs' id='abtus'>
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
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.145284844184!2d-5.98513802426236!3d37.41004077207962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12695622594341%3A0x4e3db2dfd4d3d37!2zQy4gT3Rvw7FvLCAxLCA0MTAwOSBTZXZpbGxhLCBFc3Bhw7Fh!5e0!3m2!1ses!2sca!4v1719981251292!5m2!1ses!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AbtUs;
