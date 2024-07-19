import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';
import bCard from './bCard';

const Lib = () => {
    return (
        <>
            <section className="lib" id='lib'>
                <Container fluid>
                    <Row>
                        <Col>
                            <GoldSep />
                            <h1>Dear gentle readers, fret not, this page shall be soon written.</h1>
                            <bCard imgprop='./Tigri_1900.jpg' servprop='Entretien'/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot/>
        </>
    )
}

export default Lib;
