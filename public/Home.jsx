import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
    return (
        <section className='slideshow' id='home'>
            <div className='Carrousel'>
                <Carousel>
                    <Carousel.Item>
                        <img src='../JULES VERNE (c)Pop Films et 13 Prods.jpg' text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='../69309ab082550bebe755a7094c28e507 2.svg'text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='../69309ab082550bebe755a7094c28e507 2.svg'text="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Home;
