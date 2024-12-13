import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [t, i18n] = useTranslation('global');
    const handleNavLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -120; // Adjust offset to account for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
   
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
                    <a as={Link} to="/#abtus" onClick={() => handleNavLinkClick('abtus')} className='nav-link'>{t('home.a1')}</a>
                    <a as={Link} to="/Cafe#events" onClick={() => handleNavLinkClick('events')} className='nav-link'>{t('home.a2')}</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
