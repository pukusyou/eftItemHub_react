import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer({ pageName, pageUrl }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        {/* Navigation Links */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            marginBottom: '1.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <a
                                href={(process.env.REACT_APP_HOMEPAGE || '') + "/privacy/"}
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    transition: 'color 0.25s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                            >
                                プライバシーポリシー
                            </a>
                            <a
                                href="https://x.com/SYTd_pukusyou"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    transition: 'color 0.25s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                            >
                                X (Twitter)
                            </a>
                        </div>

                        {/* Divider */}
                        <div style={{
                            width: '100px',
                            height: '2px',
                            background: 'var(--gradient-gold)',
                            margin: '0 auto 1.5rem'
                        }} />

                        {/* Copyright notice */}
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.8rem',
                            marginBottom: '0.75rem',
                            lineHeight: 1.6
                        }}>
                            Game content and materials are trademarks and copyrights of Battlestate Games and its licensors. All rights reserved.
                        </p>

                        {/* Wiki attribution */}
                        {pageUrl && (
                            <p style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.8rem',
                                marginBottom: '1rem',
                                lineHeight: 1.6
                            }}>
                                このページは、<a href="https://wikiwiki.jp/eft/" style={{ color: 'var(--color-accent-info)' }}>Escape From Tarkov JPN Wiki</a>の「<a href={pageUrl} style={{ color: 'var(--color-accent-info)' }}>{pageName}</a>」記事の素材を使用しており、Creative Commons Attribution-NonCommercial-ShareAlike の下でライセンスされています。
                            </p>
                        )}

                        {/* Version and Copyright */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--color-border)',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <span style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.8rem',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.05em'
                            }}>
                                v0.3.1
                            </span>
                            <span style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.8rem'
                            }}>
                                © 2023-{currentYear} EFT Item Hub
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
