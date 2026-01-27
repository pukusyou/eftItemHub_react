import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";

const SettingBar = ({ setShowSetting }) => {
    const handleSettingClick = () => {
        setShowSetting(true);
    };

    return (
        <button
            onClick={handleSettingClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '0.85rem',
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                background: 'transparent',
                color: 'var(--color-text-secondary, #94a3b8)',
                border: '1px solid var(--color-border, rgba(255, 255, 255, 0.08))',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.target.style.color = '#f8fafc';
            }}
            onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.target.style.color = '#94a3b8';
            }}
        >
            <FontAwesomeIcon icon={faCog} />
            {!isMobile && 'Setting'}
        </button>
    )
}

export default SettingBar;