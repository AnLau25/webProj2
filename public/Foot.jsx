import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './Foot.css';
import GoldSep from './GoldSep';

const Foot = () => {
  return (
    <section className="footer" id='foot'>
      <div className="container">
      <GoldSep/>
        <div className="footer-content">
          <div className="left-content">
            <div className="logo-placeholder">Capricho de medianoche</div>
            <p>Copyright© Capricho de medianoche by Lupin powered by UO3525</p>
          </div>
          <div className="right-content">
            <a href='#' className="social-icon"><img src='GInsta.svg' alt='Instagram' /></a>
            <a href='#'className="social-icon"><img src='GSnap.svg' alt='Snapchat' /></a>
            <a href='#'className="social-icon"><img src='GTweet.svg' alt='Twitter' /></a>
            <a href='#'className="social-icon"><img src='GPin.svg' alt='Pinterest' /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Foot