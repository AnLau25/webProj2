import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './Home.css';

const HomeSp = () => {
    return (
        <section className='slideshow' id='homesp'>
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
                <h3>¡Bienvenidos lectores!</h3>
                <p>Ven y experimenta la máxima experiencia de lectura en nuestro acogedor café, con sabrosos bocados y una colección de clásicos que satisfacen todos los gustos.</p>
                <div className='nav-links'>
                    <a as={Link} to="/#abtus" className='nav-link'>El Café</a>
                    <a as={Link} to="/Cafe#events" className='nav-link'>Eventos</a>
                </div>
            </div>
        </section>
    );
};

export default HomeSp;
