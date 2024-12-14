import React, { useState, useRef } from 'react';
import './Pay.css';
import './Bluebg.css';
import GoldBtnBase from './GoldBtnBase';
import GoldCard from './GoldCard';
import GoldSep from './GoldSep';
import arrowIcon from './AvroArrow.svg'; 
import { Row, Col, Container, ToastContainer, Toast, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Pay = () => {
    const [t, i18n] = useTranslation('global');
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

        setConfirmationToastMessage(`${t("pay.toast.confirmMsg")}  ${site === 'Club' ? t("pay.toast.typeL1") : t("pay.toast.typeL2")}?`);
        setShowConfirmationToast(true);
    };

    const handleConfirmYes = () => {
        handleClearForm();
        setConfirmationToastMessage('');
        setShowConfirmationToast(false);
        setToastMessage(`${site === 'Club' ? t("pay.toast.typeU1") : t("pay.toast.typeU1")} ${t("pay.toast.finMsg")}`);
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
                                <Row className="g-3">
                                    <h1>{t("pay.header")}</h1>
                                    <GoldSep />
                                    <h3>{t("pay.eventTitle")}</h3>
                                    <Col xs={12} md={6} className='px-1 form-element'>
                                        <Form.Control
                                            as="select"
                                            className={`form-control custom-select ${!validation.site ? 'is-invalid' : ''}`}
                                            value={site}
                                            onChange={handleSiteChange}
                                        >
                                            <option value="" disabled>EVENT</option>
                                            <option value="Club">Club</option>
                                            <option value="Maurice Leblanc">Maurice Leblanc</option>
                                            <option value="Agatha Christie">Agatha Christie</option>
                                            <option value="Jane Austen">Jane Austen</option>
                                            <option value="Nicolás Maquiavelo">Nicolás Maquiavelo</option>
                                        </Form.Control>
                                    </Col>
                                    <Col xs={12} md={6} className='px-1 form-element'>
                                        {site !== 'Club' ? (
                                            <Form.Control
                                                as="select"
                                                className={`form-control custom-select ${!validation.selectedDay ? 'is-invalid' : ''}`}
                                                value={selectedDay}
                                                onChange={handleDayChange}
                                            >
                                                <option value="" disabled>{t("pay.fields.f1")}</option>
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
                                                <option value="1">Mediodía de teatro (Esp)</option>
                                                <option value="2">Verne's reading club (Eng)</option>
                                                <option value="3">Greek Myth exploration gang (Eng)</option>
                                                <option value="4">Horror Tuesdays (Eng)</option>
                                                <option value="5">Love birds chirping club (Eng)</option>
                                                <option value="6">El culto de Samsagaz (Esp)</option>
                                                <option value="7">Victorian readings and biscuits (Eng)</option>
                                                <option value="8">¡Ciencia y ficción! (Esp)</option>
                                            </Form.Control>
                                        )}
                                    </Col>
                                    <h3>{site === 'Club' ? t("pay.registerTitle") : t("pay.payTitle")}</h3>
                                    <Col sm={12} className='px-1 form-element'>
                                        <Form.Control
                                            type="email"
                                            className={`form-control ${!validation.ussEmail ? 'is-invalid' : ''}`}
                                            placeholder={t("pay.fields.f2")}
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
                                                    placeholder={t("pay.fields.f3")}
                                                    value={cardHolderName}
                                                    onChange={(e) => setCardHolderName(e.target.value)}
                                                />
                                            </Col>
                                            <Col sm={6} className='px-1 form-element'>
                                                <Form.Control
                                                    type="text"
                                                    className={`form-control ${!validation.expirationDate ? 'is-invalid' : ''}`}
                                                    placeholder={t("pay.fields.f4")}
                                                    value={expirationDate}
                                                    onChange={(e) => setExpirationDate(e.target.value)}
                                                />
                                            </Col>
                                            <Col sm={6} className='px-1 form-element'>
                                                <Form.Control
                                                    type="tel"
                                                    className={`form-control ${!validation.cardNumber ? 'is-invalid' : ''}`}
                                                    placeholder={t("pay.fields.f5")}
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
                                        <GoldBtnBase prop={t("pay.buttons.submit")} type="submit" />
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
                            <span className="rcustom-button-title">{t("pay.buttons.y")} </span>
                        </Button>
                        <Button className="rcustom-button" onClick={handleConfirmNo}>
                            <span className="rcustom-button-title">{t("pay.buttons.n")} </span>
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <div className={`lateral-tab ${isTabOpen ? 'open' : ''}`}>
                    <button className="toggle-btn" onClick={() => setIsTabOpen(!isTabOpen)}>
                        <img src={arrowIcon} alt="Toggle" className="toggle-icon" />
                    </button>
                    <div className="tab-content">
                        <h5>{t("pay.tab.title")} </h5>
                        <GoldSep />
                        <p>{t("pay.tab.description")}</p>
                    </div>
                </div>
        </section>
    );
}

export default Pay;
//Fix days language
//Toast for confirmation (might be launching on top, see later)
//Just checked, it doesn't seem to pop on top