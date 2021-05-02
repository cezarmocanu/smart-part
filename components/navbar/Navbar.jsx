import {Nav, Navbar, Button} from 'react-bootstrap';
import Image from 'next/image'
import LABELS from '@Strings';

const NAVBAR_CONFIG = {
    collapseOnSelect: true,
    expand:"md",
    bg: "secondary",
    variant: "dark",
    fixed: "top"
};

const CLASSES = ["text-uppercase"].join(' ');

const LINK_CLASSES = ["text-secondary-l-50", "thover-secondary-l-80"].join(' ');

function AppNavbar() {

    return (
    <Navbar {...NAVBAR_CONFIG} className={CLASSES} >
        <Navbar.Brand href="/#home" className="d-flex align-items-center">
            <Image layout="intrinsic" width={20} height={20} src="/assets/svg/puzzle.svg" alt={LABELS.smartPartCallToAction} />
            <h5 className="p-0 ml-2 mb-0">{LABELS.smartPart}</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar"/>
        <Navbar.Collapse id="main-navbar">
            <Nav className="navbar ml-auto">
                <Nav.Link className={LINK_CLASSES} href="/#services"><u>{LABELS.services}</u></Nav.Link>
                <Nav.Link className={LINK_CLASSES} href="/#about"><u>{LABELS.about}</u></Nav.Link>
                <Nav.Link className={LINK_CLASSES} href="/#contact"><u>{LABELS.contact}</u></Nav.Link>
                <Nav.Link className={LINK_CLASSES} href="/#steps">
                    <Button className="font-weight-bold text-secondary thover-secondary-l-80" variant="warning">{LABELS.freeDemo}</Button>
                </Nav.Link>
                <Nav.Link className={LINK_CLASSES} href="/articole"><u>{LABELS.articles}</u></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export {AppNavbar};