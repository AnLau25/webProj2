import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container, Modal } from 'react-bootstrap';
import './Navnav.css';
import Sinsout from './Sinsout';
import Logo from './Tuntun_Logo.svg';

const Navnav = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    const handleSignIn = () => {
        setIsSignedIn(true);
        handleClose();
    };

    const handleNavLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -70; // Adjust offset to account for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.replace('#', '');
            if (id) {
                handleNavLinkClick(id);
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <>
            <Navbar className="custom-navbar" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/#home" className="navbar-brand">
                        <img src={Logo} alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="Our Capricho" className="no-caret">
                                <NavDropdown.Item as={Link} to="/#abtus" onClick={() => handleNavLinkClick('abtus')}>About Us</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/#clndr" onClick={() => handleNavLinkClick('clndr')}>Schedule</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Our Café" className="no-caret">
                                <NavDropdown.Item as={Link} to="/Cafe#events" onClick={() => handleNavLinkClick('events')}>Events</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Cafe#menu" onClick={() => handleNavLinkClick('menu')}>Menu</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Cafe#pay" onClick={() => handleNavLinkClick('pay')}>Event booking</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/Lib" className="custom-nav-link" onClick={() => handleNavLinkClick('lib')}>Our Collection</Nav.Link>
                        </Nav>
                        <div className="login-signup">
                            {isSignedIn ? (
                                <Button className="signin-login-button" onClick={handleSignOut}>Sign Out</Button>
                            ) : (
                                <Button className="signin-login-button" onClick={handleShow}>SignIn/LogIn</Button>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
                <Modal.Body>
                    <Sinsout onClose={handleClose} onSignIn={handleSignIn} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Navnav;
