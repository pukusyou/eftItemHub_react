import React from 'react';
import wallPaper from '../logo.png';

const TopImage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative'
        }}>
            {/* Glow effect behind logo */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <img
                src={wallPaper}
                alt="EFT Item Hub Logo"
                className='hero-logo'
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: 'min(80%, 400px)',
                    height: 'auto'
                }}
            />

            {/* Tagline */}
            <p style={{
                marginTop: '1.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.05em',
                position: 'relative',
                zIndex: 1
            }}>
                タスク・ハイドアウトで必要なアイテムを効率的に管理
            </p>

            {/* CTA Buttons */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <a
                    href={(process.env.REACT_APP_HOMEPAGE || '') + "/task/"}
                    className="btn btn-primary"
                    style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1rem'
                    }}
                >
                    タスク管理
                </a>
                <a
                    href={(process.env.REACT_APP_HOMEPAGE || '') + "/hideout/"}
                    className="btn btn-secondary"
                    style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1rem'
                    }}
                >
                    ハイドアウト
                </a>
            </div>
        </div>
    )
}

export default TopImage;