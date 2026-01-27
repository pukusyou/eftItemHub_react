import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ModalComp = ({ url, showBool, setShowBool }) => {
    const [copyButtonText, setCopyButtonText] = useState('コピー');
    const [copied, setCopied] = useState(false);

    const handleClose = () => {
        setShowBool(false);
        setCopyButtonText('コピー');
        setCopied(false);
    };

    const handleCopyButtonText = () => {
        setCopyButtonText('コピーしました！');
        setCopied(true);
    };

    return (
        <Modal show={showBool} onHide={handleClose} size='xl' centered>
            <div style={{
                background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                color: '#f8fafc',
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                <Modal.Header style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '1.25rem 1.5rem'
                }}>
                    <Modal.Title style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        letterSpacing: '0.05em'
                    }}>
                        共有
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ padding: '1.5rem' }}>
                    <label style={{
                        display: 'block',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        color: 'var(--color-accent-primary, #f59e0b)'
                    }}>
                        共有URL
                    </label>
                    <input
                        type="url"
                        value={url}
                        readOnly={true}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            background: 'var(--color-bg-tertiary, #1a1a25)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '6px',
                            color: '#f8fafc',
                            fontSize: '0.9rem'
                        }}
                    />
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        marginTop: '0.75rem',
                        marginBottom: 0
                    }}>
                        このURLを共有すると、現在のチェック状態を他の人と共有できます。
                    </p>
                </Modal.Body>

                <Modal.Footer style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '1rem 1.5rem',
                    gap: '0.5rem'
                }}>
                    <CopyToClipboard text={url}>
                        <Button
                            onClick={handleCopyButtonText}
                            style={{
                                background: copied
                                    ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                                    : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                border: 'none',
                                padding: '0.5rem 1.5rem',
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                transition: 'all 0.25s ease'
                            }}
                        >
                            {copyButtonText}
                        </Button>
                    </CopyToClipboard>
                    <Button
                        onClick={handleClose}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#94a3b8',
                            padding: '0.5rem 1.5rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 600,
                            letterSpacing: '0.05em'
                        }}
                    >
                        閉じる
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ModalComp;
