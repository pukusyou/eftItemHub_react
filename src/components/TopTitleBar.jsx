import React from 'react';

const TopTitleBar = ({ title }) => {
    return (
        <div className="section-title" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                {/* Left decorative line */}
                <span style={{
                    display: 'block',
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--color-accent-primary))'
                }} />

                {/* Diamond icon */}
                <span style={{
                    display: 'block',
                    width: '8px',
                    height: '8px',
                    background: 'var(--color-accent-primary)',
                    transform: 'rotate(45deg)'
                }} />

                {/* Title */}
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(90deg, transparent, rgba(26, 26, 37, 0.8), transparent)',
                    whiteSpace: 'nowrap'
                }}>
                    {title}
                </h2>

                {/* Diamond icon */}
                <span style={{
                    display: 'block',
                    width: '8px',
                    height: '8px',
                    background: 'var(--color-accent-primary)',
                    transform: 'rotate(45deg)'
                }} />

                {/* Right decorative line */}
                <span style={{
                    display: 'block',
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--color-accent-primary), transparent)'
                }} />
            </div>
        </div>
    )
}

export default TopTitleBar;