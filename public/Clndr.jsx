import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './Clndr.css';
import GoldSep from './GoldSep';

const Clndr = () => {
  return (
    <>
      <section className="abt-blank" id='clndr'>
        <Row>
          <GoldSep/>
          <div className='placeholder'>Dear gentle readers, fret not, this page shall be soon written.</div>
        </Row>
      </section>
    </>
  )
}

export default Clndr