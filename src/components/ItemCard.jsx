import React, { useState } from 'react';
import { isMobile } from "react-device-detect";
import OffCanvas from './ItemOffcanvas';
import { resolvePublicPath } from '../utils/publicPath';

const Item = ({ itemName, img, tasks, num, inRaid, category }) => {
    const [show, setShow] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCanvas = () => {
        setShow(!show);
    }

    const isInRaid = inRaid === "inRaid";

    return (
        <>
            <OffCanvas show={show} onHide={handleCanvas} title={itemName} num={num} tasks={tasks} img={img} inRaid={inRaid} />

            <div
                onClick={handleCanvas}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    background: isHovered
                        ? 'linear-gradient(145deg, #1e1e2a 0%, #16161f 100%)'
                        : 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                    border: isHovered
                        ? '1px solid rgba(245, 158, 11, 0.3)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered
                        ? '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 40px rgba(245, 158, 11, 0.15)'
                        : '0 2px 8px rgba(0, 0, 0, 0.3)',
                    overflow: 'hidden',
                    width: isMobile ? '48%' : '140px',
                    flexShrink: 0
                }}
            >
                {/* Item Name */}
                <div style={{
                    padding: '0.5rem 0.4rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(0, 0, 0, 0.2)'
                }}>
                    <h3 style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: isMobile ? '0.7rem' : '0.8rem',
                        fontWeight: 600,
                        color: '#f8fafc',
                        textAlign: 'center',
                        margin: 0,
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {itemName}
                    </h3>
                </div>

                {/* Item Image */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    minHeight: '60px',
                    background: isHovered
                        ? 'rgba(245, 158, 11, 0.03)'
                        : 'transparent',
                    transition: 'background 0.25s ease'
                }}>
                    <img
                        src={resolvePublicPath(img)}
                        alt={itemName}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '70px',
                            objectFit: 'contain',
                            filter: isHovered
                                ? 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.3))'
                                : 'none',
                            transition: 'filter 0.25s ease'
                        }}
                    />
                </div>

                {/* Item Info */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 0.6rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(0, 0, 0, 0.2)'
                }}>
                    {/* Count */}
                    <span style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#f8fafc'
                    }}>
                        ×{num}
                    </span>

                    {/* InRaid Badge */}
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: isInRaid
                            ? 'rgba(239, 68, 68, 0.2)'
                            : 'rgba(34, 197, 94, 0.2)',
                        color: isInRaid ? '#ef4444' : '#22c55e',
                        border: isInRaid
                            ? '1px solid rgba(239, 68, 68, 0.3)'
                            : '1px solid rgba(34, 197, 94, 0.3)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        {isInRaid ? 'FIR' : 'ANY'}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Item;
