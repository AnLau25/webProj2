import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [t, i18n] = useTranslation('global');
   
    return (
        <section className='slideshow' id='home'>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img className='d-block w-100' src='../JULES VERNE (c)Pop Films et 13 Prods 1.svg' alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src='../La-Edad-de-Oro-fotos-Kaloian-9.svg' alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src='../image_1.svg' alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='text-container'>
                <h3>{t('home.h3')}</h3>
                <p>{t('home.p')}</p>
                <div className='nav-links'>
                    <a as={Link} to="/#abtus" className='nav-link'>{t('home.a1')}</a>
                    <a as={Link} to="/Cafe#events" className='nav-link'>{t('home.a2')}</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
