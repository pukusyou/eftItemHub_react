import React from "react";
import puku from "../pukutouka.png";

const Introduction = () => {
    return (
        <div className="grid grid-cols-[minmax(200px,1fr)_2fr] gap-0 overflow-hidden bg-[image:var(--gradient-card)] border border-border rounded-lg transition-all duration-[250ms] hover:border-accent-primary/30 hover:shadow-lg">
            {/* Profile Image */}
            <div className="flex items-center justify-center p-4 bg-bg-tertiary border-r border-border">
                <img
                    src={puku}
                    alt='pukusyou'
                    className="w-full max-w-[200px] h-auto rounded-md object-cover border-r border-border"
                />
            </div>

            {/* Profile Content */}
            <div className="p-6">
                {/* Name */}
                <h2 className="font-heading text-[1.8rem] font-bold pb-3 mb-4 border-b border-border bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                    pukusyou
                </h2>

                {/* Info Grid */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
                    {/* Favorite Games */}
                    <div>
                        <h4 className="font-heading text-base font-semibold text-accent-primary mb-3 tracking-[0.05em] uppercase">
                            好きなゲーム
                        </h4>
                        <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
                            {['EscapeFromTarkov', 'DQX', 'Minecraft', 'Valorant'].map((game, index) => (
                                <li key={index} className="bg-bg-tertiary px-3 py-[0.35rem] rounded-sm text-[0.85rem] text-text-secondary border border-border">
                                    {game}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-heading text-base font-semibold text-accent-primary mb-3 tracking-[0.05em] uppercase">
                            X (Twitter)
                        </h4>
                        <p className="text-text-secondary text-[0.9rem] mb-2 leading-relaxed">
                            本サイトのアップデート情報を投稿しています。
                        </p>
                        <a
                            href='https://x.com/SYTd_pukusyou'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent-info text-[0.9rem] px-4 py-2 bg-[#06b6d41a] rounded-sm border border-[#06b6d433] transition-all duration-250"
                        >
                            @SYTd_pukusyou
                        </a>
                    </div>
                </div>

                {/* Comment */}
                <div className="mt-6">
                    <h4 className="font-heading text-base font-semibold text-accent-primary mb-2 tracking-[0.05em] uppercase">
                        コメント
                    </h4>
                    <p className="text-text-secondary text-[0.9rem] leading-[1.7] m-0">
                        情報に誤りがあった場合や改善、追加が必要な場合は、お気軽にお問い合わせフォームからご連絡ください。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;