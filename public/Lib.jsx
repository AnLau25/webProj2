import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';
import BCard from './BCard';
import Data from './Data';

const Lib = () => {
    console.log(Data);  // Log Data to check if it is being imported correctly

    return (
        <>
            <section className="lib" id='lib'>
                <GoldSep/>
                <h1>Browse your next page-turner</h1>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={3}>
                            <Container className='filter'>
                                <h1>Filter</h1>
                            </Container>
                        </Col>
                        <Col xs={12} md={9}>
                            <Container className='book-container' fluid>
                                <Row>
                                    {Data.map((book, index) => (
                                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                                            <BCard
                                                imgprop={book.img}
                                                titleprop={book.title}
                                                langprop={book.language}
                                                authprop={book.author}
                                                genprop={book.genre}
                                                sumprop={book.summary}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot />
        </>
    )
}

export default Lib;
