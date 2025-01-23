import React from "react";
import puku from "../pukutouka.png"

const Introduction = () => {
    return (
        <>
            <div class="card mb-3 w-100 bg-dark text-white mt-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={puku} alt='プクしょう' className="w-100 h-100" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title mb-5 text-center border-bottom pb-2">pukusyou</h2>
                            <div class="container">
                                <div class="row">
                                    <div class="col mb-4">
                                        <h4 className="mb-1">好きなゲーム</h4>
                                        <ul class="card-text">
                                            <li>EscapeFromTarkov</li>
                                            <li>DQX</li>
                                            <li>Minecraft</li>
                                            <li>Valorant</li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <h4 className="mb-1">X</h4>
                                        <p className="mb-1">本サイトのアップデート情報を投稿しているので、ぜひフォローお願いします！</p>
                                        <a href='https://x.com/SYTd_pukusyou' className='text-info' target="_blank" rel="noopener noreferrer">@SYTd_pukusyou</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h4 className="mb-1">コメント</h4>
                                        <p className="mb-1">情報に誤りがあった場合や改善、追加が必要な場合は、お気軽にご連絡ください。お問い合わせは、XのDMまたは <a href="/eft/contact/" className='text-info'>お問い合わせページ</a> からお願いします。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduction;