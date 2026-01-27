import React from "react";
import puku from "../pukutouka.png";

const Introduction = () => {
    return (
        <div className="intro-card" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
            gap: 0,
            overflow: 'hidden'
        }}>
            {/* Profile Image */}
            <div style={{
                background: 'var(--color-bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                borderRight: '1px solid var(--color-border)'
            }}>
                <img
                    src={puku}
                    alt='pukusyou'
                    style={{
                        width: '100%',
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: 'var(--radius-md)',
                        objectFit: 'cover'
                    }}
                />
            </div>

            {/* Profile Content */}
            <div style={{ padding: '1.5rem' }}>
                {/* Name */}
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    background: 'var(--gradient-gold)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--color-border)'
                }}>
                    pukusyou
                </h2>

                {/* Info Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {/* Favorite Games */}
                    <div>
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--color-accent-primary)',
                            marginBottom: '0.75rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            好きなゲーム
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                        }}>
                            {['EscapeFromTarkov', 'DQX', 'Minecraft', 'Valorant'].map((game, index) => (
                                <li key={index} style={{
                                    background: 'var(--color-bg-tertiary)',
                                    padding: '0.35rem 0.75rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem',
                                    color: 'var(--color-text-secondary)',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    {game}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--color-accent-primary)',
                            marginBottom: '0.75rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            X (Twitter)
                        </h4>
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                            marginBottom: '0.5rem',
                            lineHeight: 1.6
                        }}>
                            本サイトのアップデート情報を投稿しています。
                        </p>
                        <a
                            href='https://x.com/SYTd_pukusyou'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--color-accent-info)',
                                fontSize: '0.9rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(6, 182, 212, 0.1)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                transition: 'all 0.25s ease'
                            }}
                        >
                            @SYTd_pukusyou
                        </a>
                    </div>
                </div>

                {/* Comment */}
                <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-accent-primary)',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        コメント
                    </h4>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        margin: 0
                    }}>
                        情報に誤りがあった場合や改善、追加が必要な場合は、お気軽にお問い合わせフォームからご連絡ください。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;