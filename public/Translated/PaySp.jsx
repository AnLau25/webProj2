import React, { useState, useRef } from 'react';
import './Pay.css';
import './Bluebg.css';
import GoldBtnBase from './GoldBtnBase';
import GoldCard from './GoldCard';
import GoldSep from './GoldSep';
import arrowIcon from './AvroArrow.svg'; 
import { Row, Col, Container, ToastContainer, Toast, Form, Button } from 'react-bootstrap';

const PaySp = () => {
    const [site, setSite] = useState('');
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
    const [isTabOpen, setIsTabOpen] = useState(true);
    const [validation, setValidation] = useState({
        site: true,
        selectedDay: true,
        ussEmail: true,
        cardHolderName: true,
        expirationDate: true,
        cardNumber: true,
        cvv: true
    });
    const formRef = useRef(null);

    const handleSiteChange = (event) => {
        const selectedSite = event.target.value;
        setSite(selectedSite);
        setSelectedDay('');
        if (selectedSite === 'Maurice Leblanc') {
            setDays(['Lun', 'Mar']);
        } else if (selectedSite === 'Agatha Christie') {
            setDays(['Mié', 'Vie']);
        } else if (selectedSite === 'Jane Austen') {
            setDays(['Jue']);
        } else if (selectedSite === 'Nicolás Maquiavelo') {
            setDays(['Sáb']);
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
            setSite('');
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

        const isSiteValid = site.trim() !== '';
        const isSelectedDayValid = selectedDay.trim() !== '' || site === 'Club';
        const isEmailValid = ussEmail.trim() !== '';
        const isCardHolderNameValid = cardHolderName.trim() !== '';
        const isExpirationDateValid = expirationDate.trim() !== '';
        const isCardNumberValid = cardNumber.trim() !== '';
        const isCvvValid = cvv.trim() !== '';

        setValidation({
            site: isSiteValid,
            ussEmail: isEmailValid,
            selectedDay: isSelectedDayValid,
            cardHolderName: site === 'Club' ? true : isCardHolderNameValid,
            expirationDate: site === 'Club' ? true : isExpirationDateValid,
            cardNumber: site === 'Club' ? true : isCardNumberValid,
            cvv: site === 'Club' ? true : isCvvValid
        });

        if (!isSiteValid || !isSelectedDayValid || !isEmailValid || (!isCardHolderNameValid && site !== 'Club') || (!isExpirationDateValid && site !== 'Club') || (!isCardNumberValid && site !== 'Club') || (!isCvvValid && site !== 'Club')) {
            return;
        }

        setConfirmationToastMessage(`¿Está seguro de que desea proceder con la ${site === 'Club' ? 'inscripción' : 'transacción'}?`);
        setShowConfirmationToast(true);
    };

    const handleConfirmYes = () => {
        handleClearForm();
        setConfirmationToastMessage('');
        setShowConfirmationToast(false);
        setToastMessage(`${site === 'Club' ? 'Inscripción' : 'Transacción'} realizada`);
        setShowToast(true);
    };

    const handleConfirmNo = () => {
        setConfirmationToastMessage('');
        setShowConfirmationToast(false);
    };

    return (
        <section className='pay' id='paysp'>
            <Container className='h-100 form-container'>
                <Row className='h-100 align-items-center justify-content-center'>
                    <Col md={7} className='form-section'>
                        <div className="inner-container">
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Row>
                                    <h1>Te reservamos una silla</h1>
                                    <GoldSep />
                                    <h3>Información del evento</h3>
                                    <Col sm={6} className='px-1 form-element'>
                                        <Form.Control
                                            as="select"
                                            className={`form-control custom-select ${!validation.site ? 'is-invalid' : ''}`}
                                            value={site}
                                            onChange={handleSiteChange}
                                        >
                                            <option value="" disabled>EVENTO</option>
                                            <option value="Club">Club</option>
                                            <option value="Maurice Leblanc">Maurice Leblanc</option>
                                            <option value="Agatha Christie">Agatha Christie</option>
                                            <option value="Jane Austen">Jane Austen</option>
                                            <option value="Nicolás Maquiavelo">Nicolás Maquiavelo</option>
                                        </Form.Control>
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        {site !== 'Club' ? (
                                            <Form.Control
                                                as="select"
                                                className={`form-control custom-select ${!validation.selectedDay ? 'is-invalid' : ''}`}
                                                value={selectedDay}
                                                onChange={handleDayChange}
                                            >
                                                <option value="" disabled>DÍA</option>
                                                {days.map((day, index) => (
                                                    <option key={index} value={day}>{day}</option>
                                                ))}
                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                as="select"
                                                className={`form-control custom-select ${!validation.selectedDay ? 'is-invalid' : ''}`}
                                                value={selectedDay}
                                                onChange={handleDayChange}
                                            >
                                                <option value="" disabled>CLUB</option>
                                                {/* Add Club options here */}
                                                <option value="1">Mediodía de teatro (Es)</option>
                                                <option value="2">Verne's reading club (Eng)</option>
                                                <option value="3">Greek Myth exploration gang (Eng)</option>
                                                <option value="4">Horror Tuesdays (Eng)</option>
                                                <option value="5">Love birds chirping club (Eng)</option>
                                                <option value="6">El culto de Samsagaz Gamyi (Es)</option>
                                                <option value="7">Victorian readings and biscuits (Eng)</option>
                                                <option value="8">¡Ciencia ficción Sab! (Es)</option>
                                            </Form.Control>
                                        )}
                                    </Col>
                                    <h3>{site === 'Club' ? 'Información de inscripción' : 'Información de pago'}</h3>
                                    <Col sm={12} className='px-1 form-element'>
                                        <Form.Control
                                            type="email"
                                            className={`form-control ${!validation.ussEmail ? 'is-invalid' : ''}`}
                                            placeholder="CORREO ELECTRÓNICO"
                                            value={ussEmail}
                                            onChange={(e) => setUssEmail(e.target.value)}
                                        />
                                    </Col>
                                    {site !== 'Club' && (
                                        <>
                                            <Col sm={6} className='px-1 form-element'>
                                                <Form.Control
                                                    type="text"
                                                    className={`form-control ${!validation.cardHolderName ? 'is-invalid' : ''}`}
                                                    placeholder="NOMBRE DEL TITULAR DE LA TARJETA"
                                                    value={cardHolderName}
                                                    onChange={(e) => setCardHolderName(e.target.value)}
                                                />
                                            </Col>
                                            <Col sm={6} className='px-1 form-element'>
                                                <Form.Control
                                                    type="text"
                                                    className={`form-control ${!validation.expirationDate ? 'is-invalid' : ''}`}
                                                    placeholder="FECHA DE EXPIRACIÓN"
                                                    value={expirationDate}
                                                    onChange={(e) => setExpirationDate(e.target.value)}
                                                />
                                            </Col>
                                            <Col sm={6} className='px-1 form-element'>
                                                <Form.Control
                                                    type="tel"
                                                    className={`form-control ${!validation.cardNumber ? 'is-invalid' : ''}`}
                                                    placeholder="NÚMERO DE TARJETA"
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
                                        </>
                                    )}
                                    <Col sm={12} className='px-1 form-element'>
                                        <GoldBtnBase prop="Reservar mi lugar" type="submit" />
                                    </Col>
                                </Row>
                            </Form>
                            <GoldCard />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer position="middle-center" className="p-3 custom-toast-container">
                <Toast onClose={() => setShowConfirmationToast(false)} show={showConfirmationToast}>
                    <Toast.Header>
                        <strong className="me-auto">{confirmationToastMessage}</strong>
                    </Toast.Header>
                    <Toast.Body className="d-flex justify-content-center">
                        <Button className="rcustom-button" onClick={handleConfirmYes}>
                            <span className="rcustom-button-title">Sí</span>
                        </Button>
                        <Button className="rcustom-button" onClick={handleConfirmNo}>
                            <span className="rcustom-button-title">No</span>
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <div className={`lateral-tab ${isTabOpen ? 'open' : ''}`}>
                    <button className="toggle-btn" onClick={() => setIsTabOpen(!isTabOpen)}>
                        <img src={arrowIcon} alt="Toggle" className="toggle-icon" />
                    </button>
                    <div className="tab-content">
                        <h5>Registrar</h5>
                        <GoldSep />
                        <p>
                            ¿Te estás registrando para un evento? Elige tu evento y la fecha, puedes ver todos nuestros eventos en la pestaña correspondiente.
                            ¿Club? Selecciona esa opción, elige tu club y regístrate. ¡Es gratis! (Para más información, consulta nuestro horario)
                        </p>
                    </div>
                </div>
        </section>
    );
}

export default PaySp;
