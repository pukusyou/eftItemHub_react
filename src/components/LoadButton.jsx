import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";

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

            {showLoadModal && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-8">
                    <button
                        type="button"
                        aria-label="閉じる"
                        className="absolute inset-0 bg-black/70"
                        onClick={handleClose}
                    />
                    <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                            <h2 className="font-['Rajdhani'] text-xl font-bold tracking-[0.05em]">読み込み</h2>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-white/20 hover:text-slate-200"
                            >
                                閉じる
                            </button>
                        </div>
                        <div className="max-h-[60vh] overflow-y-auto px-6 py-5">
                            {makeTags(bookMarkname, selectedBookmark, setSelectedBookmark).length > 0
                                ? makeTags(bookMarkname, selectedBookmark, setSelectedBookmark)
                                : (
                                    <div className="py-8 text-center text-slate-400">
                                        ブックマークがありません
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 px-6 py-4">
                            <button
                                type="button"
                                onClick={handleRemove}
                                disabled={!selectedBookmark}
                                className={`rounded-md border px-4 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] ${selectedBookmark
                                    ? 'border-red-500/40 bg-red-500/10 text-red-400'
                                    : 'cursor-not-allowed border-white/10 text-white/30'
                                    }`}
                            >
                                削除
                            </button>
                            <button
                                type="button"
                                onClick={handleLoad}
                                disabled={!selectedBookmark}
                                className={`rounded-md px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] ${selectedBookmark
                                    ? 'bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_100%)] text-black'
                                    : 'cursor-not-allowed bg-white/10 text-white/30'
                                    }`}
                            >
                                読み込み
                            </button>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-md border border-white/10 px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-slate-400 transition hover:border-white/20 hover:text-slate-200"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoadButton;