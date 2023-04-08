import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer({ pageName, pageUrl }) {
    return (
        <footer className="footer bg-dark">
            <Container>
                <Row>
                    <Col className="text-center text-white p-0">
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Nav className="me-auto m-auto">
                                    <Nav.Link href={process.env.REACT_APP_HOMEPAGE + "/privacy/"} className='me-4'>プライバシーポリシー</Nav.Link>
                                    <Nav.Link href={process.env.REACT_APP_HOMEPAGE + "/contact/"} className='ms-4'>お問い合わせ</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        <p className='mb-0'><small>Game content and materials are trademarks and copyrights of Battlestate Games and its
                            licensors. All rights
                            reserved.</small></p>
                        <p>{pageUrl && <small>このページは、<a href="https://wikiwiki.jp/eft/" className='text-info'>Escape From Tarkov JPN Wiki</a> の「<a
                            href={pageUrl} className='text-info'>{pageName}</a>」記事の素材を使用しており、Creative
                            Commons Attribution-NonCommercial-ShareAlike の下でライセンスされています。</small>}</p>
                        <p className="float-start">v0.1.0</p>
                        <p className="float-end">&copy; 2023 EFT Item Hub</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer
