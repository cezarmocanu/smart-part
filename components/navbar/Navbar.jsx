import {Nav, Navbar} from 'react-bootstrap';
import LABELS from '@Strings';

const NAVBAR_CONFIG = {
    collapseOnSelect: true,
    expand:"md",
    bg: "secondary",
    variant: "dark",
    fixed: "top"
};

const CLASSES = ["text-uppercase"].join(' ');

function AppNavbar() {

    return (
    <Navbar {...NAVBAR_CONFIG} className={CLASSES} >
        <Navbar.Brand href="#home">{LABELS.smartPart}</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar"/>
        <Navbar.Collapse id="main-navbar">
            <Nav className="ml-auto">
                <Nav.Link href="#services">{LABELS.services}</Nav.Link>
                <Nav.Link href="#about">{LABELS.about}</Nav.Link>
                <Nav.Link href="#steps">{LABELS.steps}</Nav.Link>
                <Nav.Link href="#contact">{LABELS.contact}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export {AppNavbar};