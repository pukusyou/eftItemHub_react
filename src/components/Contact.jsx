//Web3Formsを使用して、右下に常時表示されるフローティングお問い合わせフォームを作成する
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCommentDots, faTimes } from '@fortawesome/free-solid-svg-icons'

const options = [
    { value: 'ご意見・ご感想', label: 'ご意見・ご感想' },
    { value: 'バグ・エラー', label: 'バグ・エラー' },
    { value: '情報の誤り', label: '情報の誤り' },
    { value: 'その他', label: 'その他' },
];

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "58194ea6-b700-45c2-8938-68b002a12b2b";

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
        // ウィンドウを閉じる時に状態をリセット
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

    //Web3Formsを使用して、お問い合わせフォームの内容をメールで送信する
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
                // フォームをリセット
                event.target.reset();
                setSelectedValue(options[0]);
                // 3秒後に自動で閉じる
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
            {/* 右下に固定されたフローティングボタン */}
            <button
                onClick={handleToggle}
                className="btn btn-primary rounded-circle shadow-lg"
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: '64px',
                    height: '64px',
                    zIndex: 1051,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    transform: showModal ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                }}
                aria-label="お問い合わせ"
            >
                <FontAwesomeIcon icon={showModal ? faTimes : faCommentDots} />
            </button>

            {/* 右下に固定された小さなウィンドウ */}
            {showModal && (
                <div
                    className="contact-widget"
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '24px',
                        width: 'min(400px, calc(100vw - 48px))',
                        height: 'auto',
                        maxHeight: 'calc(40vh)',
                        backgroundColor: '#212529',
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                        zIndex: 1050,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        animation: 'slideUp 0.3s ease-out'
                    }}
                >
                    {/* ヘッダー */}
                    <div
                        className="d-flex align-items-center justify-content-between p-3"
                        style={{
                            backgroundColor: '#0d6efd',
                            color: '#fff',
                            borderTopLeftRadius: '16px',
                            borderTopRightRadius: '16px'
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                            <h5 className="mb-0 fw-bold">お問い合わせ</h5>
                        </div>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-link text-white p-0"
                            style={{
                                width: '32px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none'
                            }}
                            aria-label="閉じる"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    {/* ボディ */}
                    <div
                        className="p-3 text-white"
                        style={{
                            overflowY: 'auto',
                            flex: 1,
                            maxHeight: 'calc(40vh - 60px)'
                        }}
                    >
                        <Form id='form' onSubmit={onSubmit}>
                            <Form.Group className="mb-2" controlId="formBasicType">
                                <Form.Label className='small fw-bold mb-1'>種別</Form.Label>
                                <Select
                                    value={selectedValue}
                                    className='w-100'
                                    classNamePrefix="select"
                                    options={options}
                                    onChange={handleChange}
                                    isSearchable={false}
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            backgroundColor: '#212529',
                                            borderColor: '#495057',
                                            color: '#fff',
                                            minHeight: '36px',
                                            fontSize: '14px'
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            backgroundColor: '#212529',
                                        }),
                                        option: (base, state) => ({
                                            ...base,
                                            backgroundColor: state.isFocused ? '#495057' : '#212529',
                                            color: '#fff',
                                            fontSize: '14px'
                                        }),
                                        singleValue: (base) => ({
                                            ...base,
                                            color: '#fff',
                                            fontSize: '14px'
                                        }),
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className='small fw-bold mb-1'>メールアドレス</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    placeholder="メールアドレス" 
                                    required
                                    className="bg-dark text-white border-secondary"
                                    style={{ color: '#fff', fontSize: '14px', padding: '6px 12px' }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicMessage">
                                <Form.Label className='small fw-bold mb-1'>お問い合わせ内容</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={2} 
                                    name="message"
                                    placeholder="お問い合わせ内容" 
                                    required
                                    className="bg-dark text-white border-secondary"
                                    style={{ color: '#fff', resize: 'vertical', fontSize: '14px' }}
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    disabled={isSending}
                                    size="sm"
                                    className="fw-bold"
                                >
                                    {isSending ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            送信中...
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                            送信
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Form>
                        {isSent && (
                            <div className="alert alert-success mt-2 mb-0 py-2" role="alert" style={{ fontSize: '12px' }}>
                                <strong>送信完了！</strong> ありがとうございます。
                            </div>
                        )}
                        {isError && (
                            <div className="alert alert-danger mt-2 mb-0 py-2" role="alert" style={{ fontSize: '12px' }}>
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
                    background-color: #212529 !important;
                    border-color: #0d6efd !important;
                    color: #fff !important;
                    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
                }
                .contact-widget input::placeholder,
                .contact-widget textarea::placeholder {
                    color: #6c757d !important;
                }
                @media (max-width: 576px) {
                    button[aria-label="お問い合わせ"] {
                        width: 56px !important;
                        height: 56px !important;
                        font-size: 20px !important;
                    }
                    .contact-widget {
                        width: calc(100vw - 40px) !important;
                        max-height: calc(45vh) !important;
                    }
                }
            `}</style>
        </>
    );
};
export default Contact;
