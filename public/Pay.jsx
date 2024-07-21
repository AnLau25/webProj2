import React, { useState, useRef } from 'react';
import './Pay.css';
import './Bluebg.css';
import GoldBtnBase from './GoldBtnBase';
import GoldCard from './GoldCard';
import GoldSep from './GoldSep';
import { Row, Col, Container, ToastContainer, Toast, Form, Button } from 'react-bootstrap';

const Pay = () => {
    const [event, setEvent] = useState('');
    const [days, setDays] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [ussEmail, setUssEmail] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showConfirmationToast, setShowConfirmationToast] = useState(false);
    const [confirmationToastMessage, setConfirmationToastMessage] = useState('');
    const [validation, setValidation] = useState({
        event: true,
        selectedDay: true,
        ussEmail: true,
        cardHolderName: true,
        expirationDate: true,
        cardNumber: true,
        cvv: true
    });
    const formRef = useRef(null);

    const handleEventChange = (event) => {
        const selectedEvent = event.target.value;
        setEvent(selectedEvent);
        setSelectedDay('');
        if (selectedEvent === 'Maurice Leblanc') {
            setDays(['Mon', 'Tue']);
        } else if (selectedEvent === 'Agatha Christie') {
            setDays(['Wed', 'Fri']);
        } else if (selectedEvent === 'Jane Austen') {
            setDays(['Thu']);
        } else if (selectedEvent === 'Nicolás Maquiavelo') {
            setDays(['Sat']);
        } else {
            setDays([]);
        }
    };

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleClearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
            setEvent('');
            setDays([]);
            setUssEmail('');
            setSelectedDay('');
            setCardHolderName('');
            setExpirationDate('');
            setCardNumber('');
            setCvv('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isEventValid = event.trim() !== '';
        const isSelectedDayValid = selectedDay.trim() !== '';
        const isEmailValid = ussEmail.trim() !== '';
        const isCardHolderNameValid = cardHolderName.trim() !== '';
        const isExpirationDateValid = expirationDate.trim() !== '';
        const isCardNumberValid = cardNumber.trim() !== '';
        const isCvvValid = cvv.trim() !== '';

        setValidation({
            event: isEventValid,
            selectedDay: isSelectedDayValid,
            ussEmail: isEmailValid,
            cardHolderName: isCardHolderNameValid,
            expirationDate: isExpirationDateValid,
            cardNumber: isCardNumberValid,
            cvv: isCvvValid
        });

        if (!isEventValid || !isSelectedDayValid || !isEmailValid ||!isCardHolderNameValid || !isExpirationDateValid || !isCardNumberValid || !isCvvValid) {
            return;
        }

        setConfirmationToastMessage('Are you sure you want to proceed with the transaction?');
        setShowConfirmationToast(true);
    };

    const handleConfirmYes = () => {
        handleClearForm();
        setConfirmationToastMessage('');
        setShowConfirmationToast(false);
        setToastMessage('Transaction accomplished');
        setShowToast(true);
    };

    const handleConfirmNo = () => {
        setConfirmationToastMessage('');
        setShowConfirmationToast(false);
    };

    return (
        <section className='pay' id='pay'>
            <Container className='h-100 form-container'>
                <Row className='h-100 align-items-center justify-content-center'>
                    <Col md={7} className='form-section'>
                        <div className="inner-container">
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Row>
                                    <h1>We’ll save you a chair</h1>
                                    <GoldSep />
                                    <h3>Event info</h3>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            as="select"
                                            className={`form-control custom-select ${!validation.event ? 'is-invalid' : ''}`}
                                            value={event}
                                            onChange={handleEventChange}
                                        >
                                            <option value="" disabled>EVENT</option>
                                            <option value="Maurice Leblanc">Maurice Leblanc</option>
                                            <option value="Agatha Christie">Agatha Christie</option>
                                            <option value="Jane Austen">Jane Austen</option>
                                            <option value="Nicolás Maquiavelo">Nicolás Maquiavelo</option>
                                        </Form.Control>
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            as="select"
                                            className={`form-control custom-select ${!validation.selectedDay ? 'is-invalid' : ''}`}
                                            value={selectedDay}
                                            onChange={handleDayChange}
                                        >
                                            <option value="" disabled>DAY</option>
                                            {days.map((day, index) => (
                                                <option key={index} value={day}>{day}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <h3>Payment info</h3>
                                    <Col sm={12} className='px-1 form-element'>
                                        <Form.Control
                                            type="email"
                                            className={`form-control ${!validation.ussEmail ? 'is-invalid' : ''}`}
                                            placeholder="E-MAIL"
                                            value={ussEmail}
                                            onChange={(e) => setUssEmail(e.target.value)}
                                        />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            type="text"
                                            className={`form-control ${!validation.cardHolderName ? 'is-invalid' : ''}`}
                                            placeholder="CARD HOLDER NAME"
                                            value={cardHolderName}
                                            onChange={(e) => setCardHolderName(e.target.value)}
                                        />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            type="text"
                                            className={`form-control ${!validation.expirationDate ? 'is-invalid' : ''}`}
                                            placeholder="EXPIRATION DATE"
                                            value={expirationDate}
                                            onChange={(e) => setExpirationDate(e.target.value)}
                                        />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            type="tel"
                                            className={`form-control ${!validation.cardNumber ? 'is-invalid' : ''}`}
                                            placeholder="CARD NUMBER"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                        />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            type="text"
                                            className={`form-control ${!validation.cvv ? 'is-invalid' : ''}`}
                                            placeholder="CVV"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
                                    </Col>
                                    <Col sm={12} className='px-1 form-element'>
                                        <GoldBtnBase prop="Book my spot" type="submit" />
                                    </Col>
                                </Row>
                            </Form>
                            <GoldCard />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer position="middle-center" className="p-3 custom-toast-container">
                <Toast onClose={() => setShowToast(false)} show={showToast}>
                    <Toast.Header>
                        <strong className="me-auto">{toastMessage}</strong>
                    </Toast.Header>
                    <Toast.Body>For any modifications or cancellations, please do not hesitate to contact us.</Toast.Body>
                </Toast>
                <Toast onClose={() => setShowConfirmationToast(false)} show={showConfirmationToast}>
                    <Toast.Header>
                        <strong className="me-auto">{confirmationToastMessage}</strong>
                    </Toast.Header>
                    <Toast.Body className="d-flex justify-content-center">
                        <Button className="rcustom-button" onClick={handleConfirmYes}>
                            <span className="rcustom-button-title">Yes</span>
                        </Button>
                        <Button className="rcustom-button" onClick={handleConfirmNo}>
                            <span className="rcustom-button-title">No</span>
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    );
}

export default Pay;
