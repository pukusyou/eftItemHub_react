import React from 'react';

function Footer({ pageName, pageUrl }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-border bg-bg-secondary py-8">
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center">
                    {/* Navigation Links */}
                    <div className="mb-6 flex flex-wrap justify-center gap-8">
                        <a
                            href={(import.meta.env.VITE_HOMEPAGE || '') + "/privacy/"}
                            className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent-primary"
                        >
                            プライバシーポリシー
                        </a>
                        <a
                            href="https://x.com/SYTd_pukusyou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent-primary"
                        >
                            X (Twitter)
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="mx-auto mb-6 h-0.5 w-[100px] bg-gradient-gold" />

                    {/* Copyright notice */}
                    <p className="mb-3 text-xs leading-relaxed text-text-muted">
                        Game content and materials are trademarks and copyrights of Battlestate Games and its licensors. All rights reserved.
                    </p>

                    {/* Wiki attribution */}
                    {pageUrl && (
                        <p className="mb-4 text-xs leading-relaxed text-text-muted">
                            このページは、<a href="https://wikiwiki.jp/eft/" className="text-accent-info hover:underline">Escape From Tarkov JPN Wiki</a>の「<a href={pageUrl} className="text-accent-info hover:underline">{pageName}</a>」記事の素材を使用しており、Creative Commons Attribution-NonCommercial-ShareAlike の下でライセンスされています。
                        </p>
                    )}

                    {/* Version and Copyright */}
                    <div className="flex flex-wrap items-center justify-center gap-4 border-t border-border pt-4">
                        <span className="font-heading text-xs tracking-wider text-text-muted">
                            v0.3.1
                        </span>
                        <span className="text-xs text-text-muted">
                            © 2023-{currentYear} EFT Item Hub
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
