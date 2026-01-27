import React from 'react';
import TopImage from './TopImage';
import Footer from './Footer';
import TopTitleBar from './TopTitleBar';
import TopUpdateBar from './TopUpdateBar';
import Introduction from './Introduction';

const TopPageAll = () => {
    const updates = [
        {
            date: "2024/12/27",
            title: "Hideoutの情報を更新",
            content: "現時点の情報に更新しました。"
        },
        {
            date: "2024/1/8",
            title: "インレイド品のみ表示機能追加",
            content: "アイテム一覧画面で設定から選択することが出来ます。"
        },
        {
            date: "2024/1/8",
            title: "Hideoutの言語切替機能追加",
            content: "設備の名前を日本語・英語切り替えることができるようになりました。"
        },
        {
            date: "2023/8/14",
            title: "新しい弾薬追加、弾薬ページのバグ修正",
            content: "弾薬がすべて表示されないバグを修正しました。"
        },
        {
            date: "2023/8/10",
            title: "タスクマップを追加",
            content: "タスク選択画面で「Taskmap」をクリックすると見ることができます。"
        }
    ];

    const howToUse = [
        "上部メニューから「Task」「Hideout」をクリックすると一覧が表示されます。",
        "完了している「タスク」「ハイドアウトのレベル」を選択し、「決定」ボタンをクリックします。",
        "必要なアイテムが表示されます。",
        "「共有」をクリックすると、その時点でのチェック状況を共有することができます。"
    ];

    return (
        <>
            <div className='min-vh-100'>
                {/* Hero Section */}
                <section className="hero-section">
                    <TopImage />
                </section>

                {/* Updates Section */}
                <section className="content-container">
                    <TopTitleBar title={"更新履歴"} />
                    <div style={{ marginTop: '1.5rem' }}>
                        {updates.map((update, index) => (
                            <TopUpdateBar
                                key={index}
                                title={update.title}
                                date={update.date}
                                content={update.content}
                            />
                        ))}
                    </div>
                </section>

                {/* Description Section */}
                <section className="content-container" style={{ marginTop: '2rem' }}>
                    <TopTitleBar title={"サイトの説明"} />
                    <div className="update-card" style={{ marginTop: '1.5rem' }}>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.8 }}>
                            このサイトは「Escape from Tarkov」のタスク、ハイドアウトに必要なアイテムを確認するためのものです。
                            現在のタスク、ハイドアウトの進行状況を入力することで、その後必要になるアイテムを確認することができます。
                            また、弾薬のパラメータ、どのトレーダーで購入できるか等も確認することができます。
                            使い方については下記を御覧ください。
                        </p>
                    </div>
                </section>

                {/* How to Use Section */}
                <section className="content-container" style={{ marginTop: '2rem' }}>
                    <TopTitleBar title={"使い方"} />
                    <div style={{ marginTop: '1.5rem' }}>
                        <ol style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            counterReset: 'step-counter'
                        }}>
                            {howToUse.map((step, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                    padding: '1rem',
                                    marginBottom: '0.75rem',
                                    background: 'var(--color-bg-card)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)',
                                    transition: 'all 0.25s ease'
                                }}
                                    className="how-to-step"
                                >
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '32px',
                                        height: '32px',
                                        background: 'var(--gradient-gold)',
                                        borderRadius: '50%',
                                        color: '#000',
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        fontSize: '0.9rem'
                                    }}>
                                        {index + 1}
                                    </span>
                                    <span style={{
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.6,
                                        paddingTop: '4px'
                                    }}>
                                        {step}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Creator Section */}
                <section className="content-container" style={{ marginTop: '2rem' }}>
                    <TopTitleBar title={"製作者"} />
                    <div style={{ marginTop: '1.5rem' }}>
                        <Introduction />
                    </div>
                </section>

                {/* Special Thanks Section */}
                <section className="content-container" style={{ marginTop: '2rem', paddingBottom: '3rem' }}>
                    <TopTitleBar title={"スペシャルサンクス"} />
                    <div className="update-card" style={{ marginTop: '1.5rem' }}>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.8 }}>
                            このサイトは<a href='https://wikiwiki.jp/eft/' style={{ color: 'var(--color-accent-primary)' }}>Escape From Tarkov JPN Wiki</a>様の情報を利用しております。
                            Escape From Tarkov JPN Wiki様に感謝申し上げます。
                            <br />また、BattlestateGames様にも最大級の感謝を申し上げます。
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default TopPageAll