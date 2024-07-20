import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';
import BCard from './BCar';

const Lib = () => {
    return (
        <>
            <section className="lib" id='lib'>
                <Container fluid>
                    <Row>
                        <Col>
                            <GoldSep />
                            <BCard imgprop='./Tigri_1900.jpg' titleprop='Sandokan' langprop='It' sumprop='Il pirata Sandokan viene ferito durante una battaglia contro gli inglesi. Aiutato da Lord Guillonk, che lo cura in casa sua, conosce la sua bellissima nipote Marianna. Tra i due nasce un amore che sembra impossibile. Ma niente è impossibile per Sandokan!' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot />
        </>
    )
}

export default Lib;
