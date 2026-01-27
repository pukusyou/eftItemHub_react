import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCommentDots, faTimes } from '@fortawesome/free-solid-svg-icons';

const options = [
    { value: 'ご意見・ご感想', label: 'ご意見・ご感想' },
    { value: 'バグ・エラー', label: 'バグ・エラー' },
    { value: '情報の誤り', label: '情報の誤り' },
    { value: 'その他', label: 'その他' },
];

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "58194ea6-b700-45c2-8938-68b002a12b2b";

const selectStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: '#1a1a25',
        borderColor: state.isFocused ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)',
        color: '#f8fafc',
        minHeight: '40px',
        fontSize: '14px',
        borderRadius: '6px',
        boxShadow: state.isFocused ? '0 0 0 3px rgba(245, 158, 11, 0.15)' : 'none',
        '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.15)'
        }
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#12121a',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '6px'
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? 'rgba(245, 158, 11, 0.1)' : state.isSelected ? '#f59e0b' : '#12121a',
        color: state.isSelected ? '#000' : '#f8fafc',
        fontSize: '14px',
        cursor: 'pointer'
    }),
    singleValue: (base) => ({
        ...base,
        color: '#f8fafc',
        fontSize: '14px'
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (base) => ({
        ...base,
        color: '#94a3b8'
    })
};

const Contact = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedValue, setSelectedValue] = useState(options[0]);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption);
    };

    const handleClose = () => {
        setShowModal(false);
        setTimeout(() => {
            setIsSent(false);
            setIsError(false);
            setErrorMessage("");
            setSelectedValue(options[0]);
        }, 300);
    };

    const handleToggle = () => {
        if (showModal) {
            handleClose();
        } else {
            setShowModal(true);
            setIsSent(false);
            setIsError(false);
            setErrorMessage("");
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setIsError(false);
        setIsSent(false);
        setErrorMessage("");

        const formData = new FormData(event.target);
        formData.append("access_key", ACCESS_KEY);
        formData.append("type", selectedValue?.value || "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSent(true);
                setIsError(false);
                setIsSending(false);
                event.target.reset();
                setSelectedValue(options[0]);
                setTimeout(() => {
                    handleClose();
                }, 3000);
            } else {
                setIsError(true);
                setIsSent(false);
                setIsSending(false);
                setErrorMessage(data.message || "送信に失敗しました。入力ミスがないかご確認ください");
            }
        } catch (error) {
            console.error('送信エラー:', error);
            setIsError(true);
            setIsSent(false);
            setIsSending(false);
            setErrorMessage("送信に失敗しました。しばらく時間をおいて再度お試しください。");
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={handleToggle}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    zIndex: 1051,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#000',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
                    transition: 'all 0.3s ease',
                    transform: showModal ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = showModal ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(245, 158, 11, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = showModal ? 'rotate(180deg)' : 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(245, 158, 11, 0.4)';
                }}
                aria-label="お問い合わせ"
            >
                <FontAwesomeIcon icon={showModal ? faTimes : faCommentDots} />
            </button>

            {/* Contact Widget */}
            {showModal && (
                <div
                    className="contact-widget"
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '24px',
                        width: 'min(400px, calc(100vw - 48px))',
                        height: 'auto',
                        maxHeight: 'calc(50vh)',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                        zIndex: 1050,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        animation: 'slideUp 0.3s ease-out'
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '1rem 1.25rem',
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            color: '#000'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FontAwesomeIcon icon={faCommentDots} />
                            <h5 style={{
                                margin: 0,
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                letterSpacing: '0.05em'
                            }}>
                                お問い合わせ
                            </h5>
                        </div>
                        <button
                            type="button"
                            onClick={handleClose}
                            style={{
                                width: '28px',
                                height: '28px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(0, 0, 0, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                color: '#000',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease'
                            }}
                            aria-label="閉じる"
                        >
                            <FontAwesomeIcon icon={faTimes} size="sm" />
                        </button>
                    </div>

                    {/* Body */}
                    <div
                        style={{
                            padding: '1.25rem',
                            overflowY: 'auto',
                            flex: 1,
                            maxHeight: 'calc(50vh - 60px)'
                        }}
                    >
                        <form id='form' onSubmit={onSubmit}>
                            {/* Type Select */}
                            <div className="mb-3">
                                <label
                                    className="block font-['Rajdhani'] text-sm font-semibold text-amber-400"
                                >
                                    種別
                                </label>
                                <div className="mt-2">
                                    <Select
                                        value={selectedValue}
                                        options={options}
                                        onChange={handleChange}
                                        isSearchable={false}
                                        styles={selectStyles}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="block font-['Rajdhani'] text-sm font-semibold text-amber-400">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    required
                                    className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a25] px-3 py-2 text-sm text-slate-100 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label className="block font-['Rajdhani'] text-sm font-semibold text-amber-400">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="お問い合わせ内容を入力してください"
                                    rows={3}
                                    required
                                    className="mt-2 w-full resize-y rounded-md border border-white/10 bg-[#1a1a25] px-3 py-2 text-sm text-slate-100 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`mt-2 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 font-['Rajdhani'] text-sm font-bold tracking-[0.05em] text-black transition ${isSending
                                    ? 'cursor-not-allowed bg-amber-500/60'
                                    : 'bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_100%)]'
                                    }`}
                            >
                                {isSending ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        送信
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Success Message */}
                        {isSent && (
                            <div style={{
                                marginTop: '1rem',
                                padding: '0.75rem',
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                borderRadius: '6px',
                                color: '#22c55e',
                                fontSize: '0.85rem'
                            }}>
                                <strong>送信完了！</strong> ありがとうございます。
                            </div>
                        )}

                        {/* Error Message */}
                        {isError && (
                            <div style={{
                                marginTop: '1rem',
                                padding: '0.75rem',
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                borderRadius: '6px',
                                color: '#ef4444',
                                fontSize: '0.85rem'
                            }}>
                                <strong>エラー:</strong> {errorMessage}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .contact-widget input:focus,
                .contact-widget textarea:focus {
                    border-color: #f59e0b !important;
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
                }
                .contact-widget input::placeholder,
                .contact-widget textarea::placeholder {
                    color: #64748b !important;
                }
                @media (max-width: 576px) {
                    button[aria-label="お問い合わせ"] {
                        width: 52px !important;
                        height: 52px !important;
                        font-size: 18px !important;
                    }
                    .contact-widget {
                        width: calc(100vw - 32px) !important;
                        right: 16px !important;
                        max-height: calc(60vh) !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Contact;
