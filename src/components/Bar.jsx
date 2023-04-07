import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo.webp';

const Bar = () => {
    const homepage = process.env.REACT_APP_HOMEPAGE;
    console.log(homepage)
    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container className='ms-0'>
                    <Navbar.Brand href={homepage + "/"}><img src={Logo} alt="logo" width={"60px"} className="me-1" />EFT Item Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={homepage + "/task/"}>Task</Nav.Link>
                            <Nav.Link href={homepage + "/hideout/"}>hideout</Nav.Link>
                            <Nav.Link href={homepage + "/ammo/"}>Ammo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Bar