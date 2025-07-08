import React from 'react';
import './AbtUs.css';
import GoldSep from './GoldSep';
import GoldBtn from './GoldBtn';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
/*
Create local storage/cookie or smt to hold the langua ge preference.
react-i18next goes by region pref or usual selected language
So if I want to keep another langua selection for the site, must keep that stored somewhere
*/
const AbtUsSp = () => {
    const [t, i18n] = useTranslation('global');
    return (
        <section className='AbtUs' id='abtus'>
            <GoldSep />
            <Container fluid>
                <Row className='content-row'>
                    <Col xs={12} md={6} className='txt-container'>
                        <h1>{t('abtUs.sectionTitle')}</h1>
                        <p>{t('abtUs.description')}</p>
                        <div className='times'>
                            <div>{t('abtUs.openingHours.monThu')}</div>
                            <div>{t('abtUs.openingHours.friSun')}</div>
                        </div>
                        <div className='btn-container'>
                            <GoldBtn href="/Cafe#events" prop={t('abtUs.buttons.events')} />
                            <GoldBtn href="/Cafe#menu" prop={t('abtUs.buttons.menu')} />
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

export default AbtUsSp;