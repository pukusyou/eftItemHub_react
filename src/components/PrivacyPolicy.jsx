import React from "react";
import Footer from "./Footer";
import BackButton from "./BackButton";

const PrivacyPolicy = () => {
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
                zIndex: 999
            }}>
                <BackButton link={"/"} />
            </div>

            <div className="min-vh-100" style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '2rem 1.5rem'
            }}>
                {/* Page Title */}
                <h1 style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    プライバシーポリシー
                </h1>

                {/* Content */}
                <ol style={{
                    listStyle: 'none',
                    padding: 0,
                    counterReset: 'section'
                }}>
                    {/* Section 1 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        counterIncrement: 'section'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                1
                            </span>
                            個人情報の利用目的
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトでは、お問い合わせの際、メールアドレス等の個人情報を入力いただく場合がございます。
                            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                        </p>
                    </li>

                    {/* Section 2 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                2
                            </span>
                            広告について
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトでは、第三者配信の広告サービス（GoogleAdSense）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
                            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
                            Cookieはブラウザから無効にすることができます。
                        </p>
                    </li>

                    {/* Section 3 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                3
                            </span>
                            アクセス解析ツールについて
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス、Googleサーチコンソール」を利用しています。これらはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
                        </p>
                    </li>

                    {/* Section 4 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                4
                            </span>
                            免責事項
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
                            また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
                            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                        </p>
                    </li>

                    {/* Section 5 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                5
                            </span>
                            著作権について
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
                            当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
                        </p>
                    </li>

                    {/* Section 6 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                6
                            </span>
                            リンクについて
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
                            ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
                        </p>
                    </li>

                    {/* Section 7 */}
                    <li style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <h2 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            color: '#f59e0b',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                fontSize: '1rem'
                            }}>
                                7
                            </span>
                            プライバシーポリシーの変更について
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            lineHeight: 1.8,
                            margin: 0
                        }}>
                            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
                            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                        </p>
                    </li>
                </ol>

                {/* Last Updated */}
                <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    marginTop: '2rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                    最終更新：2026/01/27
                </p>
            </div>

            <Footer />
        </>
    );
}

export default PrivacyPolicy;