import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Modal } from 'react-bootstrap';
import './Navnav.css';
import Sinsout from './Sinsout';

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
            const yOffset = 0; 
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
                    <Navbar.Brand href="#home" className="navbar-brand">Capricho de medianoche</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="custom-nav-link" onClick={() => handleNavLinkClick('rndvs')}>Our Capricho</Nav.Link>
                            <NavDropdown title="Our Café" className="no-caret">
                                <NavDropdown.Item href="#" onClick={() => handleNavLinkClick('abtus')}>General Info</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={() => handleNavLinkClick('abtus')}>Schedule</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={() => handleNavLinkClick('locFind')}>Menu</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={() => handleNavLinkClick('experts')}>Forms</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home" className="custom-nav-link" onClick={() => handleNavLinkClick('rndvs')}>Our Collection</Nav.Link>
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
