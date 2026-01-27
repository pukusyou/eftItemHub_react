import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo.webp';

const Bar = () => {
    const homepage = process.env.REACT_APP_HOMEPAGE || '';

    return (
        <Navbar expand="lg" className="navbar">
            <Container fluid className="px-4">
                <Navbar.Brand href={homepage + "/"} className="navbar-brand">
                    <img
                        src={Logo}
                        alt="EFT Item Hub"
                        width="50"
                        height="50"
                        style={{ marginRight: '0.75rem' }}
                    />
                    EFT Item Hub
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    style={{
                        borderColor: 'var(--color-border)',
                        padding: '0.5rem'
                    }}
                >
                    <span style={{
                        display: 'block',
                        width: '22px',
                        height: '2px',
                        background: 'var(--color-accent-primary)',
                        marginBottom: '5px',
                        borderRadius: '1px'
                    }} />
                    <span style={{
                        display: 'block',
                        width: '22px',
                        height: '2px',
                        background: 'var(--color-accent-primary)',
                        marginBottom: '5px',
                        borderRadius: '1px'
                    }} />
                    <span style={{
                        display: 'block',
                        width: '22px',
                        height: '2px',
                        background: 'var(--color-accent-primary)',
                        borderRadius: '1px'
                    }} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{ gap: '0.5rem' }}>
                        <Nav.Link href={homepage + "/task/"} className="nav-link">
                            <span style={{ marginRight: '0.5rem' }}>📋</span>
                            Task
                        </Nav.Link>
                        <Nav.Link href={homepage + "/hideout/"} className="nav-link">
                            <span style={{ marginRight: '0.5rem' }}>🏠</span>
                            Hideout
                        </Nav.Link>
                        <Nav.Link href={homepage + "/ammo/"} className="nav-link">
                            <span style={{ marginRight: '0.5rem' }}>🔫</span>
                            Ammo
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Bar;