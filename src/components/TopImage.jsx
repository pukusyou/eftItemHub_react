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
                    href={(import.meta.env.VITE_HOMEPAGE || '') + "/task/"}
                    className="inline-flex items-center justify-center rounded-md bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_100%)] px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-black shadow-[0_6px_16px_rgba(245,158,11,0.35)] transition hover:-translate-y-0.5"
                >
                    タスク管理
                </a>
                <a
                    href={(import.meta.env.VITE_HOMEPAGE || '') + "/hideout/"}
                    className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-slate-200 transition hover:border-white/40 hover:text-white"
                >
                    ハイドアウト
                </a>
            </div>
        </div>
    )
}

export default TopImage;