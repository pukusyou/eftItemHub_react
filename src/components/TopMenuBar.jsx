import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const TopMenuBar = () => {

    return (
        <>
            <Navbar variant="dark">
                <Container>
                    <Nav className="m-auto fs-3">
                        <Nav.Link href="/privacy/" className='me-2'>Task</Nav.Link>
                        <Nav.Link href="/contact/" className='me-2 ms-2'>Hideout</Nav.Link>
                        <Nav.Link href="/privacy/" className='ms-2 me-2'>Ammo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}
export default TopMenuBar