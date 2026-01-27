import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className='min-vh-100' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '500px'
                }}>
                    {/* 404 Number */}
                    <h1 style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: 'clamp(6rem, 20vw, 10rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        lineHeight: 1
                    }}>
                        404
                    </h1>

                    {/* Error Message */}
                    <h2 style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: 600,
                        color: '#f8fafc',
                        margin: '1rem 0',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        ページが見つかりません
                    </h2>

                    {/* Description */}
                    <p style={{
                        color: '#94a3b8',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        marginBottom: '2rem'
                    }}>
                        お探しのページは存在しないか、移動または削除された可能性があります。
                    </p>

                    {/* Home Button */}
                    <button
                        onClick={handleGoHome}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.85rem 2rem',
                            fontSize: '1rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                            color: '#000',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                            transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(245, 158, 11, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
                        }}
                    >
                        トップページに戻る
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
