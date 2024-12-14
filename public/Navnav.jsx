import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container, Modal } from 'react-bootstrap';
import './Navnav.css';
import Sinsout from './Sinsout';
import ussImg from "./ussimg.svg"
import inImg from './inimg.svg'
import { useTranslation } from 'react-i18next';

const Navnav = () => {
    const [t, i18n] = useTranslation('global');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [showModal, setShowModal] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();

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
            const yOffset = -120; // Adjust offset to account for fixed navbar
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
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-brand">
                            <Navbar.Brand as={Link} to="/#home" onClick={() => handleNavLinkClick('home')}>
                                <img src='./Tuntun_Logo1.svg' alt='Logo' className="navbar-brand" />
                            </Navbar.Brand>
                        </div>
                        <Nav className="nav-middle mx-auto">
                            <NavDropdown title={t('nav.dropt1')} className="no-caret">
                                <NavDropdown.Item as={Link} to="/#abtus" onClick={() => handleNavLinkClick('abtus')}>{t("nav.down11")}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/#clndr" onClick={() => handleNavLinkClick('clndr')}>{t("nav.down12")}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t("nav.dropt2")} className="no-caret">
                                <NavDropdown.Item as={Link} to="/Cafe#events" onClick={() => handleNavLinkClick('events')}>{t("nav.down21")}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Cafe#menu" onClick={() => handleNavLinkClick('menu')}>{t("nav.down22")}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Cafe#pay" onClick={() => handleNavLinkClick('pay')}>{t("nav.down23")}</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/Lib" className="custom-nav-link" onClick={() => handleNavLinkClick('lib')}>{t("nav.navLink")}</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavDropdown align="end" className="no-caret custom-image-dropdown" id="custom-dropdown" title={<img src="./GlobeT.svg" alt="Dropdown Icon" className="dropdown-image" />}>
                                <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage('es')}>Español</NavDropdown.Item>
                            </NavDropdown>
                            <div className="login-signup">
                                {isSignedIn ? (
                                    <NavDropdown align="end" className="no-caret custom-image-dropdown" id="custom-dropdown" title={<img src={ussImg} alt="User" className="dropdown-image" />}>
                                        <NavDropdown.Item onClick={handleSignOut}>{t("nav.sinOut")}</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <Nav.Link className="no-caret custom-nav-link" onClick={handleShow} id="custom-dropdown">
                                        <div>
                                            <img src={inImg} alt="User" className="dropdown-image" />
                                        </div>
                                    </Nav.Link>
                                )}
                            </div>
                        </Nav>
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

//Nav: Change the after space on the buttons for in between
//Nav: Fix dark arround hamburger menu
//Nav: Take language out of hamburger menu
//Home: Fix home links
//Pay: Up down formulair in menu
//Sinsout: Horizontal
//EndAlign that cake
//BgFix~

/*
Learning notes:

Cosas como las tallas de las letras y los estilos ponlos todos en la app para no tener que 
corregirlos en cada condenada pagina.


*/