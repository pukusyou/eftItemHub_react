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
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="hero-section">
                    <TopImage />
                </section>

                {/* Updates Section */}
                <section className="content-container">
                    <TopTitleBar title={"更新履歴"} />
                    <div className="mt-6">
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
                <section className="content-container mt-8">
                    <TopTitleBar title={"サイトの説明"} />
                    <div className="update-card mt-6">
                        <p className="m-0 leading-relaxed text-text-secondary">
                            このサイトは「Escape from Tarkov」のタスク、ハイドアウトに必要なアイテムを確認するためのものです。
                            現在のタスク、ハイドアウトの進行状況を入力することで、その後必要になるアイテムを確認することができます。
                            また、弾薬のパラメータ、どのトレーダーで購入できるか等も確認することができます。
                            使い方については下記を御覧ください。
                        </p>
                    </div>
                </section>

                {/* How to Use Section */}
                <section className="content-container mt-8">
                    <TopTitleBar title={"使い方"} />
                    <div className="mt-6">
                        <ol className="m-0 list-none p-0">
                            {howToUse.map((step, index) => (
                                <li
                                    key={index}
                                    className="mb-3 flex items-start gap-4 rounded-md border border-border bg-bg-card p-4 transition-all duration-200 hover:border-border-hover"
                                >
                                    <span className="flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-gradient-gold font-heading text-sm font-bold text-black">
                                        {index + 1}
                                    </span>
                                    <span className="pt-1 leading-relaxed text-text-secondary">
                                        {step}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Creator Section */}
                <section className="content-container mt-8">
                    <TopTitleBar title={"製作者"} />
                    <div className="mt-6">
                        <Introduction />
                    </div>
                </section>

                {/* Special Thanks Section */}
                <section className="mx-auto my-12 max-w-[800px] px-4">
                    <TopTitleBar title={"スペシャルサンクス"} />
                    <div className="mt-6 rounded-lg border border-border bg-gradient-card p-6">
                        <p className="m-0 text-[0.95rem] leading-[1.8] text-text-secondary">
                            このサイトは<a href='https://wikiwiki.jp/eft/' className="text-accent-primary no-underline hover:text-amber-400">Escape From Tarkov JPN Wiki</a>様の情報を利用しております。
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