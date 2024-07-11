import React, { useState, useRef } from 'react';
import './Pay.css';
import './Bluebg.css';
import GoldBtnBase from './GoldBtnBase';
import GoldCard from './GoldCard';
import GoldSep from './GoldSep';
import Select from 'react-select';
import { Row, Col, Container, ToastContainer, Toast } from 'react-bootstrap';

const Pay = () => {
    const [site, setSite] = useState('');
    const [days, setDays] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const formRef = useRef(null);

    const handleSiteChange = (event) => {
        const selectedSite = event.target.value;
        setSite(selectedSite);
        setSelectedDay('');
        if (selectedSite === 'Maurice Leblanc') {
            setDays(['Mon', 'Tue']);
        } else if (selectedSite === 'Agatha Christie') {
            setDays(['Wed', 'Fri']);
        } else if (selectedSite === 'Jane Austen') {
            setDays(['Thu']);
        } else if (selectedSite === 'Nicolás Maquiavelo') {
            setDays(['Sat']);
        } else {
            setDays([]);
        }
    };

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleServiceChange = (selectedOptions) => {
        setSelectedServices(selectedOptions);
    };

    const handleClearForm = (event) => {
        event.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
            setShowToast(true);
            setSite('');
            setDays([]);
            setSelectedDay('');
            setSelectedServices([]);
        }
    };

    return (
        <section className='pay' id='pay'>
            <Container className='h-100 form-container'>
                <Row className='h-100 align-items-center justify-content-center'>
                    <Col md={7} className='form-section'>
                        <div className="inner-container">
                            <form ref={formRef}>
                                <Row>
                                    <h1>We’ll save you a chair</h1>
                                    <GoldSep/>
                                    <h3>Event info</h3>
                                    <Col sm={6} className='px-1 form-element'>
                                        <select className="form-control custom-select" value={site} onChange={handleSiteChange}>
                                            <option value="" disabled>EVENT</option>
                                            <option value="Maurice Leblanc">Maurice Leblanc</option>
                                            <option value="Agatha Christie">Agatha Christie</option>
                                            <option value="Jane Austen">Jane Austen</option>
                                            <option value="Nicolás Maquiavelo">Nicolás Maquiavelo</option>
                                        </select>
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <select className="form-control custom-select" value={selectedDay} onChange={handleDayChange}>
                                            <option value="" disabled>DAY</option>
                                            {days.map((day, index) => (
                                                <option key={index} value={day}>{day}</option>
                                            ))}
                                        </select>
                                    </Col>
                                    <h3>Payment info</h3>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="text" className="form-control" placeholder="CARD HOLDER NAME" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="email" className="form-control" placeholder="EXPIRATION DATE" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="tel" className="form-control" placeholder="CARD NUMBER" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="text" className="form-control" placeholder="CVV" />
                                    </Col>
                                    <Col sm={12} className='px-1 form-element'>
                                        <GoldBtnBase prop="Prendre rendez-vous" onClick={handleClearForm} href="#" />
                                    </Col>
                                </Row>
                            </form>
                            <GoldCard />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer position="middle-center" className="p-3 custom-toast-container">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={10000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Spot booked, see you soon!</strong>
                    </Toast.Header>
                    <Toast.Body>For any modifications or cancellations, please do not hesitate to contact us.</Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    );
}

export default Pay;
