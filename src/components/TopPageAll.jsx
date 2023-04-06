import React from 'react';
import TopImage from './TopImage';
import Footer from './Footer';
import TopTitleBar from './TopTitleBar';
import TopUpdateBar from './TopUpdateBar';
const TopPageAll = () => {

    return (
        <>
            <div className='min-vh-100'>
                <TopImage />
                {/* <TopMenuBar /> */}
                <TopTitleBar title={"更新履歴"} />
                <TopUpdateBar title={"サイトリニューアル"} date={"3/31"} content={"サイトの処理や見た目を一新しました。"} />

                <TopTitleBar title={"サイトの説明"} />
                <p className='text-white m-auto w-75 p-2'>このサイトは「Escape from Tarkov」のタスク、ハイドアウトに必要なアイテムを確認するためのものです。使い方については下記を御覧ください。</p>
                <TopTitleBar title={"使い方"} />
                <ol className='w-75 m-auto text-white pt-1'>
                    <li className='p-2'>上部メニューから「Task」「Hideout」をクリックすると一覧が表示されます。</li>
                    <li className='p-2'>完了している「タスク」「ハイドアウトのレベル」を選択し、「決定」ボタンをクリックします。</li>
                    <li className='p-2'>必要なアイテムが表示されます。</li>
                    <li className='p-2'>「共有」をクリックすると、その時点でのチェック状況を共有することができます。</li>
                </ol>
                <TopTitleBar title={"作成者"} />
                <p className='w-75 m-auto text-white p-2 pb-5'>情報がまちがっているところ、改善してほしいところ、追加してほしい機能等々ありましたら、お気軽にお問い合わせください。
                    <br />このサイトは<a href='https://wikiwiki.jp/eft/'>"Escape From Tarkov JPN Wiki"</a>様の情報を使用しております。Escape From Tarkov JPN Wiki様に感謝申し上げます。</p>
            </div>
            <Footer />
        </>

    )
}
export default TopPageAll