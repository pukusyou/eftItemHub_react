import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import AmmoSelecter from "./AmmoSelecter";

function makeOptions(array) {
    let options = [];
    array.forEach((element) => {
        options.push({ value: element, label: element });
    });
    return options;
}

const AmmoSettingOffcanvas = ({ setShowSetting, canvasShow, caliber, setCaliber, caliberList }) => {
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
                minHeight: '250px'
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
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.03) 100%)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background element */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '150px',
                            height: '150px',
                            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }} />

                        {/* Icon and Label */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                borderRadius: '8px',
                                fontSize: '1.2rem',
                                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                            }}>
                                🎯
                            </div>
                            <label style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.15rem',
                                color: '#f59e0b',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                margin: 0
                            }}>
                                口径選択
                            </label>
                        </div>

                        {/* Selector */}
                        <div style={{
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <AmmoSelecter
                                options={makeOptions(caliberList)}
                                setSelectedValue={setCaliber}
                                value={caliber}
                                isSearchable={true}
                            />
                        </div>

                        {/* Description */}
                        <p style={{
                            fontSize: '0.85rem',
                            color: '#94a3b8',
                            marginTop: '1rem',
                            marginBottom: 0,
                            lineHeight: 1.5,
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{
                                fontSize: '1rem'
                            }}>ℹ️</span>
                            表示する弾薬の口径を選択してください
                        </p>
                    </div>
                </Offcanvas.Body>
            </div>
        </Offcanvas>
    );
}

export default AmmoSettingOffcanvas;