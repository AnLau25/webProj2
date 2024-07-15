import React, { useState } from 'react';
import { Row, Col, Container, Card, Form, ToastContainer, Toast, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Clndr.css';
import GoldSep from './GoldSep';
import GoldBtnBase from './GoldBtnBase';
import moment from 'moment';

const workHours = {
  start: 10,
  end: 18
};

// Predefined events
const predefinedEvents = [
  {
    day: 'Monday',
    start: moment().day(1).hour(10).minute(0).second(0),
    end: moment().day(1).hour(11).minute(0).second(0),
    title: 'Verne\'s reading club',
    description: ''
  },
  {
    day: 'Monday',
    start: moment().day(1).hour(14).minute(0).second(0),
    end: moment().day(1).hour(15).minute(0).second(0),
    title: 'Team Meeting',
    description: 'Discuss project status'
  },
  {
    day: 'Friday',
    start: moment().day(5).hour(13).minute(0).second(0),
    end: moment().day(5).hour(14).minute(0).second(0),
    title: 'Client Call',
    description: 'Update client on progress'
  }
];

const Clndr = () => {
  const [events, setEvents] = useState(predefinedEvents); // Initialize with predefined events
  const [selectedDay, setSelectedDay] = useState(null);
  const [startTime, setStartTime] = useState(moment().hour(workHours.start).minute(0));
  const [endTime, setEndTime] = useState(moment().hour(workHours.start + 1).minute(0));
  const [showToast, setShowToast] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [showLateralToast, setShowLateralToast] = useState(false); // State for the lateral toast

  const handleDayClick = (day) => {
    console.log(`Day clicked: ${day}`); // Log the clicked day
    setSelectedDay(day);
    setShowToast(true);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    setShowToast(false);
    setShowLateralToast(true); // Show the lateral toast
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
        <Row>
          <GoldSep />
        </Row>
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
                <Form>
                  <Form.Group controlId="eventTitle">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event title"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="eventDescription">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event description"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
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
                  <GoldBtnBase prop="Create Event" onClick={handleSubmit} />
                </Form>
              </Container>
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <ToastContainer position="bottom-end" className="p-3">
          <Toast onClose={() => setShowLateralToast(false)} show={showLateralToast} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>Event has been created successfully!</Toast.Body>
          </Toast>
        </ToastContainer>
      </section>
    </>
  );
}

export default Clndr;
