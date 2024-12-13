import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Foot.css';
import GoldSep from './GoldSep';

const Foot = () => {
  const handleNavLinkClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="footer" id="foot">
      <Container fluid className="footer-container">
        <Row>
          <Col xs={12}>
            <GoldSep />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="footer-content">
              <Col xs={12} md={6}>
                <div className="left-content">
                  <Link to="/#home" className="logo" onClick={() => handleNavLinkClick('home')}>
                    <img src="./Tuntun_Logo1.svg" alt="Logo" className="navbar-brand" />
                  </Link>
                  <p>Copyright© Capricho de medianoche by Lupin powered by UO3525</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div align="end" className="right-content" >
                  <a href="#" className="social-icon"><img src="GInsta.svg" alt="Instagram" /></a>
                  <a href="#" className="social-icon"><img src="GSnap.svg" alt="Snapchat" /></a>
                  <a href="#" className="social-icon"><img src="GTweet.svg" alt="Twitter" /></a>
                  <a href="#" className="social-icon"><img src="GPin.svg" alt="Pinterest" /></a>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Foot;
