import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';

const Lib = () => {
    return (
        <>
            <section className="abt-blank" id='lib'>
                <Row>
                    <GoldSep/>
                    <div className='placeholder'>Dear gentle readers, fret not, this page shall be soon written.</div>
                </Row>
            </section>

        </>
    )
}

export default Lib