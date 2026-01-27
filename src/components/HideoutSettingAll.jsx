import ButtonComp from "./ButtonComp";
import React, { useState } from 'react';
import Footer from "./Footer";
import HideoutSelect from "./HideoutSelect";
import BackButton from "./BackButton";

const HideoutSettingAll = () => {
    const pageUrl = 'https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6';
    const pageName = '隠れ家';
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

    const handleChangeLang = (e) => {
        localStorage.setItem('lang', e.target.id);
        setLang(e.target.id);
    };

    return (
        <>
            {/* Action Bar */}
            <div className="action-bar" style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: 'rgba(10, 10, 15, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--color-border, rgba(255, 255, 255, 0.08))',
                position: 'sticky',
                top: '56px',
                zIndex: 999,
                flexWrap: 'wrap'
            }}>
                <BackButton link={"/"} />
            </div>

            <div className="min-h-screen" style={{ padding: '0 1rem' }}>
                {/* Page Header */}
                <div style={{
                    textAlign: 'center',
                    padding: '2rem 0'
                }}>
                    <h1 style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        ハイドアウト進行状況
                    </h1>
                    <p style={{
                        color: 'var(--color-text-secondary, #94a3b8)',
                        marginTop: '0.5rem',
                        fontSize: '0.95rem'
                    }}>
                        完了したハイドアウトをチェックして、必要なアイテムを確認しましょう
                    </p>
                </div>

                {/* Controls Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                    padding: '1.5rem',
                    background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                    {/* Language Toggle */}
                    <div>
                        <label style={{
                            display: 'block',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: 'var(--color-accent-primary, #f59e0b)',
                            marginBottom: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            textAlign: 'center'
                        }}>
                            表示言語
                        </label>
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            background: 'var(--color-bg-tertiary, #1a1a25)',
                            padding: '4px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}>
                            <button
                                id="en"
                                onClick={handleChangeLang}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    background: lang === 'en'
                                        ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                                        : 'transparent',
                                    color: lang === 'en' ? '#000' : 'var(--color-text-secondary, #94a3b8)',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease'
                                }}
                            >
                                English
                            </button>
                            <button
                                id="jp"
                                onClick={handleChangeLang}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    background: lang !== 'en'
                                        ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                                        : 'transparent',
                                    color: lang !== 'en' ? '#000' : 'var(--color-text-secondary, #94a3b8)',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease'
                                }}
                            >
                                日本語
                            </button>
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <ButtonComp str={"決定"} link={"/hideout/item/"} />
                </div>

                {/* Hideout Selection Area */}
                <HideoutSelect lang={lang} />
            </div>

            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>
    )
}

export default HideoutSettingAll;