import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';

const Lib = () => {
    return (
        <>
            <section className="lib" id='lib'>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <GoldSep />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot/>
        </>
    )
}

export default Lib;
