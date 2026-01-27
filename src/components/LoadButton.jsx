import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";
import { Button, Modal } from 'react-bootstrap';

function makeTags(bookMarkList, selectedBookmark, setSelectedBookmark) {
    let tags = [];
    if (bookMarkList.length > 0) {
        bookMarkList.forEach(bookMark => {
            const isSelected = selectedBookmark === bookMark;
            tags.push(
                <div
                    key={bookMark}
                    onClick={() => setSelectedBookmark(bookMark)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        background: isSelected
                            ? 'rgba(245, 158, 11, 0.1)'
                            : 'var(--color-bg-tertiary, #1a1a25)',
                        border: isSelected
                            ? '1px solid rgba(245, 158, 11, 0.3)'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                    }}
                >
                    <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: isSelected
                            ? '2px solid #f59e0b'
                            : '2px solid rgba(255, 255, 255, 0.2)',
                        background: isSelected ? '#f59e0b' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.25s ease'
                    }}>
                        {isSelected && (
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#000'
                            }} />
                        )}
                    </span>
                    <span style={{
                        color: isSelected ? '#f59e0b' : '#f8fafc',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.95rem'
                    }}>
                        {bookMark.replace("bookMark_", "")}
                    </span>
                </div>
            );
        });
    }
    return tags;
}

const LoadButton = ({ setShowLoadModal, showLoadModal, bookMarkList, setIdList }) => {
    const [bookMarkname, setBookMarkName] = useState(bookMarkList());
    const [selectedBookmark, setSelectedBookmark] = useState(null);

    const handleShow = () => {
        setBookMarkName(bookMarkList());
        setSelectedBookmark(null);
        setShowLoadModal(true);
    };

    const handleClose = () => {
        setShowLoadModal(false);
    };

    const handleLoad = () => {
        if (selectedBookmark) {
            let bookMark = JSON.parse(localStorage.getItem(selectedBookmark));
            setIdList(bookMark);
            setShowLoadModal(false);
        }
    };

    const handleRemove = () => {
        if (selectedBookmark) {
            localStorage.removeItem(selectedBookmark);
            let json = JSON.stringify(bookMarkList().filter(n => n !== selectedBookmark), undefined, 1);
            localStorage.setItem("book_mark_name_list", json);
            setBookMarkName(bookMarkList());
            setSelectedBookmark(null);
        }
    };

    return (
        <>
            <button
                onClick={handleShow}
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
                    background: 'rgba(168, 85, 247, 0.1)',
                    color: '#a855f7',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(168, 85, 247, 0.2)';
                    e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.target.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                }}
            >
                <FontAwesomeIcon icon={faBarsProgress} />
                {!isMobile && 'Load'}
            </button>

            <Modal show={showLoadModal} onHide={handleClose}>
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
                            読み込み
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{ padding: '1.5rem' }}>
                        {makeTags(bookMarkname, selectedBookmark, setSelectedBookmark).length > 0
                            ? makeTags(bookMarkname, selectedBookmark, setSelectedBookmark)
                            : (
                                <div style={{
                                    textAlign: 'center',
                                    padding: '2rem',
                                    color: '#94a3b8'
                                }}>
                                    ブックマークがありません
                                </div>
                            )
                        }
                    </Modal.Body>

                    <Modal.Footer style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '1rem 1.5rem',
                        gap: '0.5rem'
                    }}>
                        <Button
                            onClick={handleRemove}
                            disabled={!selectedBookmark}
                            style={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                color: '#ef4444',
                                padding: '0.5rem 1rem',
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                opacity: selectedBookmark ? 1 : 0.5
                            }}
                        >
                            削除
                        </Button>
                        <Button
                            onClick={handleLoad}
                            disabled={!selectedBookmark}
                            style={{
                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                border: 'none',
                                color: '#000',
                                padding: '0.5rem 1.5rem',
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                opacity: selectedBookmark ? 1 : 0.5
                            }}
                        >
                            読み込み
                        </Button>
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
        </>
    )
}

export default LoadButton;