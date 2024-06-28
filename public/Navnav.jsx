import { useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Modal } from 'react-bootstrap';
import './Navnav.css';
import SignIn from './SignIn';
import { useState } from 'react';

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
                    <Navbar.Brand href="#home" className="navbar-brand">Insert logo here</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="Services" id="services-dropdown" className="no-caret">
                                <NavDropdown.Item href="#servPage" onClick={() => handleNavLinkClick('servPage')}>Nos services</NavDropdown.Item>
                                <NavDropdown.Item href="#qundsa" onClick={() => handleNavLinkClick('qundsa')}>Foire aux questions</NavDropdown.Item>
                                <NavDropdown.Item href="#calc" onClick={() => handleNavLinkClick('calc')}>Estimer les coûts</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Notre équipe" className="no-caret">
                                <NavDropdown.Item href="#abtus" onClick={() => handleNavLinkClick('abtus')}>À propos</NavDropdown.Item>
                                <NavDropdown.Item href="#locFind" onClick={() => handleNavLinkClick('locFind')}>Nos sites</NavDropdown.Item>
                                <NavDropdown.Item href="#experts" onClick={() => handleNavLinkClick('experts')}>Nos équipes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#rndvs" className="custom-nav-link" onClick={() => handleNavLinkClick('rndvs')}>Prendre rendez-vous</Nav.Link>
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
                    <SignIn onClose={handleClose} onSignIn={handleSignIn} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Navnav;