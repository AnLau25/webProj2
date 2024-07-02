import React from 'react'
import './AbtUs.css';
import GoldSep from './GoldSep';
import GoldBtn from './GoldBtn';
import { Row, Col, Container } from 'react-bootstrap';

const AbtUs = () => {
    return (
        <div className='AbtUs'>
            <Row>
                <Col sx={12}>
                    <GoldSep />
                </Col>
            </Row>
            <Row>
                <Col sx={6} className='txt-container'>
                    <h1>About our “Capricho”</h1>
                    <p>
                        Short explanation of the café’s name and the fact that “Capricho” 
                        means whim in Spanish. Some background info as to who the small group 
                        of entrepreneurs is, you know the basics. This page works well because 
                        it’s for a start-up and cause this place has a background story in my 
                        head that deserves to be told.
                    </p>
                    <div className='times'>Mon-Thu : 10h00 - 12h00 am</div>
                    <div className='times'>Fri-Sun : 11h00 - 01h00 am</div>
                    <div className='btn-container'>
                        <GoldBtn href="#" prop='Check out the events'/>
                        <GoldBtn href="#" prop='Check out the menu'/>
                    </div>
                </Col>
                <Col sx={6}>
                </Col>
            </Row>


        </div>
    )
}

export default AbtUs