import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './Home.css';

const Home = () => {
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
                <h3>Welcome Readers!</h3>
                <p>Come experience the ultimate reading experience in our cozy café, with flavorful snacks and a collection of classics that accommodates everyone’s taste. </p>
                <div className='nav-links'>
                    <a href="#about" className='nav-link'>About us</a>
                    <a href="#contact" className='nav-link'>Events & Activities</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
