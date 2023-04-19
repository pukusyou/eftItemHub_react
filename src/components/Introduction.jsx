import React from "react";

const Introduction = () => {
    return (
        <>
            <div class="card mb-3 w-100 bg-dark text-white mt-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://pbs.twimg.com/profile_images/1628487542051082241/aIs3fyBo_400x400.png" alt='プクしょう' className="w-100 h-100" />
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
                                        <h4 className="mb-1">Twitter</h4>
                                        <p className="mb-1">本サイトのアップデート情報を投稿しているので、ぜひフォローお願いします！</p>
                                        <a href='https://twitter.com/SYTd_pukusyou' className='text-info' target="_blank" rel="noopener noreferrer">@SYTd_pukusyou</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h4 className="mb-1">コメント</h4>
                                        <p className="mb-1">情報に誤りがあった場合や改善、追加が必要な場合は、お気軽にご連絡ください。お問い合わせは、TwitterのDMまたは <a href="/contact/" className='text-info'>お問い合わせページ</a> からお願いします。</p>
                                        <p>また、当サイトはサーバーをレンタルしており、運営費用がかかっています。そのため、もし可能であれば、Amazonをご利用いただく際は <a href="https://amzn.to/3GYAO8l" target="_blank" rel="noopener noreferrer" className='text-info'>こちら</a> から購入していただけると大変助かります。</p>
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