import React from 'react';
import TopImage from './TopImage';
import Footer from './Footer';
import TopTitleBar from './TopTitleBar';
import TopUpdateBar from './TopUpdateBar';
import Introduction from './Introduction';
const TopPageAll = () => {

    return (
        <>
            <div className='min-vh-100'>
                <TopImage />
                {/* <TopMenuBar /> */}
                <TopTitleBar title={"更新履歴"} />
                <TopUpdateBar title={"製作者欄 追加、データの更新とバグの修正"} date={"4/20"} content={"サイトの製作者についての情報を追加しました。タスク情報の更新、鍵が複数表示されるバグを修正しました。"} />
                <TopUpdateBar title={"サイトリニューアル"} date={"4/08"} content={"サイトの処理や見た目を一新しました。"} />

                <TopTitleBar title={"サイトの説明"} />
                <p className='text-white m-auto w-75 p-2'>このサイトは「Escape from Tarkov」のタスク、ハイドアウトに必要なアイテムを確認するためのものです。現在のタスク、ハイドアウトの進行状況を入力することで、その後必要になるアイテムを確認することができます。また、弾薬のパラメータ、どのトレーダーで購入できるか等も確認することができます。使い方については下記を御覧ください。</p>
                <TopTitleBar title={"使い方"} />
                <ol className='w-75 m-auto text-white pt-1'>
                    <li className='p-2'>上部メニューから「Task」「Hideout」をクリックすると一覧が表示されます。</li>
                    <li className='p-2'>完了している「タスク」「ハイドアウトのレベル」を選択し、「決定」ボタンをクリックします。</li>
                    <li className='p-2'>必要なアイテムが表示されます。</li>
                    <li className='p-2'>「共有」をクリックすると、その時点でのチェック状況を共有することができます。</li>
                </ol>
                <TopTitleBar title={"製作者"} />
                <div className='w-75 m-auto'>
                    <Introduction />
                </div>
                <TopTitleBar title={"スペシャルサンクス"} />
                <p className='w-75 m-auto text-white p-2 pb-5'>
                    このサイトは<a href='https://wikiwiki.jp/eft/' className='text-info'>Escape From Tarkov JPN Wiki</a>様の情報を利用しております。Escape From Tarkov JPN Wiki様に感謝申し上げます。
                    <br />また、BattlestateGames様にも最大級の感謝を申し上げます。</p>
            </div>
            <Footer />
        </>

    )
}
export default TopPageAll