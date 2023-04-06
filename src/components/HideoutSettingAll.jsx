import ButtonComp from "./ButtonComp";
import React from 'react';
import Footer from "./Footer";
import HideoutSelect from "./HideoutSelect";
import BackButton from "./BackButton";

const HideoutSettingAll = () => {
    const pageUrl = 'https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6';
    const pageName = '隠れ家';
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <BackButton link={"/"} />
            </div>
            <div className='min-vh-100'>
                <h1 className='text-white'>ハイドアウト進行状況</h1>
                <ButtonComp str={"決定"} link={"/hideout/item/"} />
                <HideoutSelect />
            </div>

            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>

    )
}
export default HideoutSettingAll