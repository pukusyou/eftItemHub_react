import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";
import { Button, Modal } from 'react-bootstrap';
import data from '../json/task_with_id.json';

function saveBookMark(name) {
    if (window.localStorage) {
        name = "bookMark_" + name;
        let array = [];
        const bookMarkName = "book_mark_name_list";
        if (localStorage.getItem(bookMarkName) !== null) {
            let json = localStorage.getItem(bookMarkName);
            array = JSON.parse(json);
            if (array.length > 4) {
                throw new Error("ブックマークは5つまでです");
            } else if (array.includes(name)) {
                throw new Error("同じ名前のブックマークは作成できません");
            }
        }
        if (name.length === 0 || !name) {
            throw new Error("ブックマーク名を入力してください");
        } else if (name.indexOf(" ") >= 0) {
            throw new Error("空白は含めないでください");
        } else if (Object.keys(localStorage).includes(name) || name === bookMarkName) {
            throw new Error("別の名前を入力してください");
        } else if (!name.match((/^[0-9a-zA-Z_]*$/))) {
            throw new Error("アルファベット、数字のみ使用できます");
        } else if (name.length > 25) {
            throw new Error("25文字以内で入力してください");
        }
        let json = JSON.stringify(array.concat(name), undefined, 1);
        localStorage.setItem(bookMarkName, json);
        return true;
    }
    throw new Error("ブックマークの保存に失敗しました");
}

function getLocalStorageId(dealerName) {
    if (window.localStorage && localStorage.getItem(dealerName) !== null) {
        let json = localStorage.getItem(dealerName);
        let array = JSON.parse(json);
        return array;
    }
}

const SaveButton = ({ showBool, setShowBool, textBox, setTextBox }) => {
    const [err, setErr] = useState("");
    const [ok, setOk] = useState("");

    const handleClose = () => setShowBool(false);
    const handleSaveClick = () => setShowBool(true);

    const handleSave = () => {
        try {
            setErr("");
            saveBookMark(textBox);
            setOk("保存しました");
            let taskIds = [];
            Object.keys(data).forEach(dealer => {
                taskIds = taskIds.concat(getLocalStorageId(dealer));
            });
            localStorage.setItem("bookMark_" + textBox, JSON.stringify(taskIds, undefined, 1));
        } catch (error) {
            setOk("");
            setErr(error.message);
        }
        setTextBox("");
    };

    useEffect(() => {
        setErr("");
        setOk("");
    }, [showBool]);

    return (
        <>
            <button
                onClick={handleSaveClick}
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
                    background: 'rgba(34, 197, 94, 0.1)',
                    color: '#22c55e',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(34, 197, 94, 0.2)';
                    e.target.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(34, 197, 94, 0.1)';
                    e.target.style.borderColor = 'rgba(34, 197, 94, 0.2)';
                }}
            >
                <FontAwesomeIcon icon={faSave} />
                {!isMobile && 'Save'}
            </button>

            <Modal show={showBool} onHide={handleClose}>
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
                            保存
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{ padding: '1.5rem' }}>
                        <label style={{
                            display: 'block',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 600,
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                            color: 'var(--color-accent-primary, #f59e0b)'
                        }}>
                            ブックマーク名
                        </label>
                        <p style={{
                            fontSize: '0.85rem',
                            color: '#94a3b8',
                            marginBottom: '1rem'
                        }}>
                            アルファベット大文字・小文字、数字で入力してください (25文字以内)
                        </p>
                        <input
                            type="text"
                            value={textBox}
                            onChange={(event) => setTextBox(event.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                background: 'var(--color-bg-tertiary, #1a1a25)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '6px',
                                color: '#f8fafc',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.25s ease'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                        />
                        {err && (
                            <p style={{
                                color: '#ef4444',
                                fontSize: '0.85rem',
                                marginTop: '0.75rem',
                                marginBottom: 0
                            }}>
                                {err}
                            </p>
                        )}
                        {ok && (
                            <p style={{
                                color: '#22c55e',
                                fontSize: '0.85rem',
                                marginTop: '0.75rem',
                                marginBottom: 0
                            }}>
                                {ok}
                            </p>
                        )}
                    </Modal.Body>

                    <Modal.Footer style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '1rem 1.5rem',
                        gap: '0.5rem'
                    }}>
                        <Button
                            onClick={handleSave}
                            style={{
                                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                border: 'none',
                                padding: '0.5rem 1.5rem',
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 600,
                                letterSpacing: '0.05em'
                            }}
                        >
                            保存
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

export default SaveButton;
