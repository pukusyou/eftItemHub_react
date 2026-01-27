import React from 'react';

const ButtonComp = ({ str, link }) => {
    return (
        <a
            href={(process.env.REACT_APP_HOMEPAGE || '') + link}
            className="btn btn-primary"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                transition: 'all 0.25s ease',
                textTransform: 'uppercase'
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
            {str}
        </a>
    )
}

export default ButtonComp;