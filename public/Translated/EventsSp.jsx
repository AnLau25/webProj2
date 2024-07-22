import React from 'react';
import './Events.css';
import './Bluebg.css';
import GoldBtn from './GoldBtn';
import { Row, Col, Container, Tabs, Tab, Accordion } from 'react-bootstrap';

const EventsSp = () => {
    return (
        <section className='events' id='eventssp'>
            <Container className="tab-container">
                <Row>
                    <Tabs defaultActiveKey="rdrs" className="custom-tabs">
                        <Tab eventKey="rdrs" title="Lectores">
                            <div className='tab-content'>
                                <Row>
                                    <Col xs={12} md={4} className='txt-container'>
                                        <div className='txt'>
                                            <h1>Colección de la Biblioteca</h1>
                                            <p>Breve descripción de cómo funciona el sistema de la biblioteca. Un poco sobre los clásicos, quizás hablar sobre el sistema de reservas.</p>
                                            <GoldBtn href="/LibSp" prop='Explorar nuestra colección' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Café y Menú</h1>
                                            <p>Especificaciones sobre el menú, los horarios de cada menú, quizás hablar sobre el chef.</p>
                                            <GoldBtn href="/Cafe#menusp" prop='Consultar el menú' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={8} className='events-card'>
                                        <h1>Eventos de la semana</h1>
                                        <Container className='accord-container'>
                                            <Accordion defaultActiveKey="0" flush className='accord'>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Maurice Leblanc</span>Lun Mar</div>
                                                        <div>Cómo escribir sobre un ladrón elegante</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Únete al renombrado creador de Arsène Lupin, Maurice Leblanc, para un taller sobre cómo crear un personaje con una moral dudosa pero con mucha elegancia. Descubre el arte de crear un ladrón sofisticado y encantador, domina los elementos del suspense y la intriga, y aprende a tejer tramas cautivadoras que mantengan a los lectores enganchados. Desata tu imaginación y da vida a tu propio pícaro elegante.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Agatha Christie </span>Mié Vie</div>
                                                        <div>Pon los pelos de punta a tus lectores</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Únete a la legendaria reina del misterio, Agatha Christie, para un taller inmersivo sobre cómo crear narrativas llenas de suspense que dejarán a tus lectores al borde de sus asientos. Aprende los secretos para construir tensión, desarrollar personajes inolvidables y crear giros que mantendrán a tu audiencia adivinando hasta el final.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Jane Austen </span>Jue</div>
                                                        <div>Escribe tu propio amante orgulloso</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Sumérgete en el elegante mundo de Jane Austen y descubre cómo crear personajes encantadores y complejos con un toque de orgullo. En este taller, aprenderás del maestro de la ficción romántica cómo desarrollar tramas intrigantes, diálogos ingeniosos e intereses amorosos cautivadores que resuenen con los lectores. Desata tu creatividad y crea una historia atemporal llena de romance y comentario social.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        <div className='auth'><span>Nicolás Maquiavelo</span>Sáb</div>
                                                        <div>Lectura de "El Príncipe"</div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Únete a nosotros para una cautivadora lectura de "El Príncipe" de Nicolás Maquiavelo, donde te adentrarás en el intrincado mundo de la estrategia política y el liderazgo. Experimenta la sabiduría intemporal de Maquiavelo mientras exploramos sus profundas ideas sobre el poder, la gobernanza y la naturaleza humana. Este evento promete ser un viaje esclarecedor a través de una de las obras más influyentes de la filosofía política.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                        <Tab eventKey="wrtrs" title="Páginas">
                            <div className='tab-content'>
                            <Row>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>Horario</h1>
                                            <p>Una descripción más larga sobre cómo funciona el horario, probablemente más contenido sobre los clubes, de hecho, probablemente será una introducción a los clubes y demás.</p>
                                            <GoldBtn href="/#clndrsp" prop='Nuestro Horario' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Clubes</h1>
                                            <p>Se explicarán los requisitos de un club, se discutirá el número de miembros, cómo se ocuparán del catering, etc. Son más informales que los eventos.</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} className='txt-container'>
                                        <div className='txt'>
                                            <h1>Eventos Pagados</h1>
                                            <p>Los asuntos más serios ya que involucra a los autores para eventos relacionados con la comercialización de los libros del autor y demás. Una breve explicación de por qué estos son pagados.</p>
                                            <GoldBtn href="/CafeSp#paysp" prop='Registrar para un evento' />
                                        </div>
                                        <div className='txt'>
                                            <h1>Política de libros dañados</h1>
                                            <p>Sí, prestan los libros y sí, puedes leer y comer, pero el lugar tiene libros muy antiguos que pueden dañarse fácilmente y requieren costosas reparaciones.</p>
                                            <GoldBtn href="/LibSp" prop='Nuestra Colección' />
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    );
}

export default EventsSp;
