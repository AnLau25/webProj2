import React, { useState } from 'react';
import { Row, Col, Container, Card, Form, ToastContainer, Toast, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import './Clndr.css';
import GoldSep from './GoldSep';
import GoldBtnBase from './GoldBtnBase';
import moment from 'moment';
import arrowIcon from './AvroArrow.svg'; 

const workHours = {
  start: 10,
  end: 18
};


const predefinedEvents = [
  {
    day: 'Sunday',
    start: moment().day(7).hour(12).minute(0).second(0),
    end: moment().day(7).hour(13).minute(0).second(0),
    title: 'Mediodía de teatro (Esp)',
    description: 'Hablamos de obras de teatro mientras degustamos un refrigerio, nada nuevo.'
  },
  {
    day: 'Monday',
    start: moment().day(1).hour(10).minute(0).second(0),
    end: moment().day(1).hour(11).minute(0).second(0),
    title: 'Verne\'s reading club (Eng)',
    description: 'Join us for breakfast and let\'s discuss some of mankind\'s most daring adventures.'
  },
  {
    day: 'Monday',
    start: moment().day(1).hour(14).minute(0).second(0),
    end: moment().day(1).hour(15).minute(0).second(0),
    title: 'Greek Myth exploration gang (Eng)',
    description: 'You bring the myth we bring the snack'
  },
  {
    day: 'Tuesday',
    start: moment().day(2).hour(15).minute(30).second(0),
    end: moment().day(2).hour(17).minute(0).second(0),
    title: 'Horror Tuesdays (Eng)',
    description: 'We discuss horror classics on a Tuesday evening because Monday is scary enough as-is and the night is for binge-watching Sponge Bob.'
  },
  {
    day: 'Wednesday',
    start: moment().day(3).hour(15).minute(30).second(0),
    end: moment().day(3).hour(17).minute(0).second(0),
    title: 'Love birds chirping club (Eng)',
    description: 'We like romance, drama and hot chocolate, come join us!'
  },
  {
    day: 'Thursday',
    start: moment().day(5).hour(13).minute(0).second(0),
    end: moment().day(5).hour(14).minute(0).second(0),
    title: 'El culto de Samsagaz Gamyi (Esp)',
    description: 'Nada raro, solo nos sentamos a discutir teorías o leer El Señor de los Anillos. ¡Pero admite que el título es atractivo!'
  },
  {
    day: 'Friday',
    start: moment().day(5).hour(13).minute(0).second(0),
    end: moment().day(5).hour(14).minute(0).second(0),
    title: 'Victorian readings and biscuits (Eng)',
    description: 'A bunch of bored peasants gather to munch and talk about books, except it\'s all Victorian romance and social critique.'
  },
  {
    day: 'Saturday',
    start: moment().day(7).hour(12).minute(0).second(0),
    end: moment().day(7).hour(13).minute(0).second(0),
    title: '¡Ciencia ficción Sab! (Esp)',
    description: 'Somos un grupo de viajeros de sofá en busca del mejor refrigerio'
  }
];

const Clndr = () => {
  const [events, setEvents] = useState(predefinedEvents);
  const [selectedDay, setSelectedDay] = useState(null);
  const [startTime, setStartTime] = useState(moment().hour(workHours.start).minute(0));
  const [endTime, setEndTime] = useState(moment().hour(workHours.start + 1).minute(0));
  const [showToast, setShowToast] = useState(false);
  const [ussEmail, setUssEmail] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [showLateralToast, setShowLateralToast] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [error, setError] = useState('');
  const [validation, setValidation] = useState({
    ussEmail: true,
    eventTitle: true,
    eventDescription: true
  });

  const handleDayClick = (day) => {
    console.log(`Day clicked: ${day}`); 
    setSelectedDay(day);
    setShowToast(true);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailValid = ussEmail.trim() !== '';
    const isTitleValid = eventTitle.trim() !== '';
    const isDescriptionValid = eventDescription.trim() !== '';

    setValidation({
      ussEmail: isEmailValid,
      eventTitle: isTitleValid,
      eventDescription: isDescriptionValid
    });

    if (!isEmailValid || !isTitleValid || !isDescriptionValid) {
      setShowToast(true);
      return;
    }

    setError('');
    setShowToast(false);
    setShowLateralToast(true);
  };


  const renderEvents = (day) => {
    const dayEvents = events.filter(event => event.day === day);

    return dayEvents.map((event, index) => {
      const startMinutes = event.start.hours() * 60 + event.start.minutes();
      const endMinutes = event.end.hours() * 60 + event.end.minutes();
      const totalMinutes = (workHours.end - workHours.start) * 60;
      const top = ((startMinutes - workHours.start * 60) / totalMinutes) * 100;

      return (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${index}`}>{event.description}</Tooltip>}
        >
          <Card className="event-card" style={{ top: `${top}%` }}>
            <Card.Body>
              <div>{`${event.start.format('HH:mm')} - ${event.end.format('HH:mm')} ${event.title}`}</div>
            </Card.Body>
          </Card>
        </OverlayTrigger>
      );
    });
  };

  const daysOfWeek = moment.weekdays();

  return (
    <>
      <section className="clndr" id='clndr'>
        <div className='title'>
          <GoldSep />
          <h1>Our weekly schedule</h1>
        </div>
        <Row>
          <Container className='clndr-container'>
            <Row>
              {daysOfWeek.map(day => (
                <Col key={day}>
                  <div className="day-column" onClick={() => handleDayClick(day)}>
                    <h5>{day}</h5>
                    <div className="time-line">
                      {renderEvents(day)}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
        <ToastContainer position="top-center" className="custom-toast-container p-3">
          <Toast onClose={() => setShowToast(false)} show={showToast}>
            <Toast.Header>
              <strong className="me-auto">Create Event</strong>
            </Toast.Header>
            <Toast.Body>
              <Container className='toast-content'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="ussEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder="Enter your e-mail"
                      value={ussEmail}
                      onChange={(e) => setUssEmail(e.target.value)}
                      isInvalid={!validation.ussEmail}
                    />
                  </Form.Group>
                  <Form.Group controlId="eventTitle">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event title"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      isInvalid={!validation.eventTitle}
                    />
                  </Form.Group>
                  <Form.Group controlId="eventDescription">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event description"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                      isInvalid={!validation.eventDescription}
                    />
                  </Form.Group>
                  <Row>
                    <Col xs={6}>
                      <Form.Group controlId="startTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                          type="time"
                          value={startTime.format('HH:mm')}
                          onChange={(e) => setStartTime(moment(e.target.value, 'HH:mm'))}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group controlId="endTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control
                          type="time"
                          value={endTime.format('HH:mm')}
                          onChange={(e) => setEndTime(moment(e.target.value, 'HH:mm'))}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <GoldBtnBase prop="Create Event" type="submit" />
                </Form>
              </Container>
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <ToastContainer position="top-end" className="p-3 tiny">
          <Toast onClose={() => setShowLateralToast(false)} show={showLateralToast} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>Hi! We got your suggestion, we'll get back to you via e-mail.</Toast.Body>
          </Toast>
        </ToastContainer>
        <div className={`lateral-tab ${isTabOpen ? 'open' : ''}`}>
          <button className="toggle-btn" onClick={() => setIsTabOpen(!isTabOpen)}>
            <img src={arrowIcon} alt="Toggle" className="toggle-icon" />
          </button>
          <div className="tab-content">
            <h5>Our Shcedule</h5>
            <GoldSep/>
            <p>
              Wanna get more detail about the reading clubs? Just hover over them!
              Wanna suggest us a club idea? Click on the schedule to fill out the form and we'll contact you about it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clndr;
