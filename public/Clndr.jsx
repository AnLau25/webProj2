import React, { useState } from 'react';
import { Row, Col, Container, Card, Form, ToastContainer, Toast } from 'react-bootstrap';
import './Clndr.css';
import GoldSep from './GoldSep';
import GoldBtnBase from './GoldBtnBase';
import moment from 'moment';

const workHours = {
  start: 9, // 9 AM
  end: 17  // 5 PM
};

const Clndr = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [startTime, setStartTime] = useState(workHours.start);
  const [endTime, setEndTime] = useState(workHours.start + 1);
  const [showToast, setShowToast] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowToast(true);
  };

  const handleCreateEvent = () => {
    if (!eventTitle.trim() || !eventDescription.trim()) {
      alert("Please enter an event title and description.");
      return;
    }

    const newEvent = {
      day: selectedDay,
      start: startTime,
      end: endTime,
      title: eventTitle,
      description: eventDescription
    };

    setEvents([...events, newEvent]);
    setSelectedDay(null);
    setStartTime(workHours.start);
    setEndTime(workHours.start + 1);
    setEventTitle('');
    setEventDescription('');
    setShowToast(false);
  };

  const renderEvents = (day) => {
    return events
      .filter(event => event.day === day)
      .map((event, index) => (
        <div key={index} className="event-card" style={{ top: `${(event.start - workHours.start) * 60}px`, height: `${(event.end - event.start) * 60}px` }}>
          <Card>
            <Card.Body>
              <strong>{event.start}:00 - {event.end}:00</strong>
              <div>{event.title}</div>
            </Card.Body>
          </Card>
        </div>
      ));
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
                  <div className="day-column">
                    <h5 onClick={() => handleDayClick(day)}>{day}</h5>
                    <div className="time-line" onClick={() => handleDayClick(day)}>
                      {renderEvents(day)}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      </section>
      <ToastContainer position="middle-center" className="p-3 custom-toast-container">
        {showToast && (
          <Toast onClose={() => setShowToast(false)} show={showToast}>
            <Toast.Header>
              <strong className="me-auto">Create Event</strong>
              <button type="button" className="ml-2 mb-1 close" onClick={() => setShowToast(false)}>&times;</button>
            </Toast.Header>
            <Toast.Body>
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
                <Form.Group controlId="startTime">
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    as="select"
                    value={startTime}
                    onChange={(e) => setStartTime(parseInt(e.target.value))}
                  >
                    {Array.from({ length: workHours.end - workHours.start }, (_, i) => (
                      <option key={i} value={workHours.start + i}>
                        {workHours.start + i}:00
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="endTime">
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    as="select"
                    value={endTime}
                    onChange={(e) => setEndTime(parseInt(e.target.value))}
                  >
                    {Array.from({ length: workHours.end - workHours.start }, (_, i) => (
                      <option key={i} value={workHours.start + i + 1}>
                        {workHours.start + i + 1}:00
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <GoldBtnBase prop="Create Event" onClick={handleCreateEvent} />
              </Form>
            </Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </>
  );
}

export default Clndr;
