import ButtonComp from "./ButtonComp";
import React, { useState } from 'react';
import Footer from "./Footer";
import HideoutSelect from "./HideoutSelect";
import BackButton from "./BackButton";

const HideoutSettingAll = () => {
    const pageUrl = 'https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6';
    const pageName = '隠れ家';
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

    const handleChangeLang = (e) => {
        localStorage.setItem('lang', e.target.id);
        setLang(e.target.id);
    };

    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <BackButton link={"/"} />
            </div>
            <div className='min-vh-100'>
                <h1 className='text-white'>ハイドアウト進行状況</h1>
                {/* アイコンを使用して、英語と日本語を切り替えるボタンを追加 */}
                <div className='btn-group' role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="en" autoComplete="off" onChange={handleChangeLang} checked={lang === 'en'} />
                    <label className="btn btn-outline-primary" htmlFor="en">英語</label>
                    <input type="radio" className="btn-check" name="btnradio" id="jp" autoComplete="off" onChange={handleChangeLang} checked={lang !== 'en'}/>
                    <label className="btn btn-outline-primary" htmlFor="jp">日本語</label>
                </div>
                <ButtonComp str={"決定"} link={"/hideout/item/"} />
                <HideoutSelect lang={lang}/>
            </div>

            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>

    )
}
export default HideoutSettingAll