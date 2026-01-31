import React from "react";
import puku from "../pukutouka.png";

const Introduction = () => {
    return (
        <div className="mx-auto flex max-w-[800px] flex-col overflow-hidden rounded-lg border border-border bg-gradient-card transition-all duration-[250ms] hover:border-accent-primary/30 hover:shadow-lg">
            <div className="flex flex-wrap flex-row">
                {/* Profile Image */}
                <div className="flex min-w-[200px] flex-[1_1_200px] items-center justify-center border-r border-border bg-bg-tertiary p-4">
                    <img
                        src={puku}
                        alt='pukusyou'
                        className="h-auto max-h-[200px] max-w-full object-contain rounded-md"
                    />
                </div>

                {/* Profile Content */}
                <div className="flex-[2_1_300px] p-6">
                    {/* Name */}
                    <h2 className="mb-4 mt-0 border-b border-border bg-gradient-gold bg-clip-text pb-3 font-heading text-[1.8rem] font-bold text-transparent">
                        pukusyou
                    </h2>

                    {/* Info Grid */}
                    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                        {/* Favorite Games */}
                        <div>
                            <h4 className="mb-3 mt-0 font-heading text-base font-semibold uppercase tracking-[0.05em] text-accent-primary">
                                好きなゲーム
                            </h4>
                            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                                {['EscapeFromTarkov', 'DQX', 'Minecraft', 'Valorant'].map((game, index) => (
                                    <li key={index} className="rounded border border-border bg-bg-tertiary px-3 py-[0.35rem] text-[0.85rem] text-text-secondary">
                                        {game}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="mb-3 mt-0 font-heading text-base font-semibold uppercase tracking-[0.05em] text-accent-primary">
                                X (Twitter)
                            </h4>
                            <p className="mb-2 text-[0.9rem] leading-relaxed text-text-secondary">
                                本サイトのアップデート情報を投稿しています。
                            </p>
                            <a
                                href='https://x.com/SYTd_pukusyou'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded border border-[#06b6d433] bg-[#06b6d41a] px-4 py-2 text-[0.9rem] text-accent-info transition-all duration-250 hover:bg-[#06b6d42a]"
                            >
                                @SYTd_pukusyou
                            </a>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="mt-6">
                        <h4 className="mb-2 mt-0 font-heading text-base font-semibold uppercase tracking-[0.05em] text-accent-primary">
                            コメント
                        </h4>
                        <p className="m-0 text-[0.9rem] leading-[1.7] text-text-secondary">
                            情報に誤りがあった場合や改善、追加が必要な場合は、お気軽にお問い合わせフォームからご連絡ください。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;