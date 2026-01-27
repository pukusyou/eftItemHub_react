import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanvas = ({ setShowSetting, setItemSetting, canvasShow, itemSetting }) => {
    const handleClose = () => setShowSetting(false);

    return (
        <Offcanvas
            show={canvasShow}
            placement="top"
            onHide={handleClose}
            style={{
                background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)'
            }}
        >
            <div style={{
                background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                color: '#f8fafc',
                minHeight: '200px'
            }}>
                <Offcanvas.Header
                    closeButton
                    style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '1.25rem 1.5rem'
                    }}
                >
                    <Offcanvas.Title style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        letterSpacing: '0.05em',
                        color: '#f8fafc'
                    }}>
                        表示設定
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body style={{ padding: '1.5rem' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem 1.5rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <div>
                            <div style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                color: '#f8fafc',
                                marginBottom: '0.25rem'
                            }}>
                                直近のレベルのみ表示
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                color: '#94a3b8'
                            }}>
                                次のレベルに必要なアイテムのみを表示します
                            </div>
                        </div>

                        {/* Custom Toggle Switch */}
                        <label style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '60px',
                            height: '32px',
                            cursor: 'pointer'
                        }}>
                            <input
                                type="checkbox"
                                checked={itemSetting}
                                onChange={(e) => setItemSetting(e.target.checked)}
                                style={{
                                    opacity: 0,
                                    width: 0,
                                    height: 0
                                }}
                            />
                            <span style={{
                                position: 'absolute',
                                cursor: 'pointer',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: itemSetting
                                    ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                                    : 'rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                borderRadius: '32px',
                                border: itemSetting
                                    ? '2px solid #f59e0b'
                                    : '2px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    content: '""',
                                    height: '24px',
                                    width: '24px',
                                    left: itemSetting ? '30px' : '2px',
                                    bottom: '2px',
                                    background: itemSetting ? '#000' : '#f8fafc',
                                    transition: 'all 0.3s ease',
                                    borderRadius: '50%',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                                }} />
                            </span>
                        </label>
                    </div>
                </Offcanvas.Body>
            </div>
        </Offcanvas>
    );
}

export default OffCanvas;
