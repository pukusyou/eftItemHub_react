import React from 'react';
import { useState, useEffect } from 'react';
//../json/ammo.csvを読み込み、連想配列に変換する
import AmmoData from '../json/ammo.json';
import Footer from './Footer';
import SettingBar from './SettingBar';
import AmmoSettingOffcanvas from './AmmoSettingOffcanvas';
import App from './Table2';
import BackButton from './BackButton';
const pageUrl = 'https://wikiwiki.jp/eft/%E5%BC%BE%E8%96%AC';
const pageName = '弾薬';

const DealerList = ["Prapor.LL", "Skier.LL", "Peacekeeper.LL", "Mechanic.LL", "Jaeger.LL","Workbench.LV"]

function getCaliberAmmoData(caliber) {
    let CaliberAmmoData = JSON.stringify(AmmoData)
    CaliberAmmoData = JSON.parse(CaliberAmmoData)
    if (caliber.value !== "0") {
        Object.keys(CaliberAmmoData).forEach((name) => {
            if (name.indexOf(caliber.value) === -1) {
                delete CaliberAmmoData[name];
            }
        });
    }

    return CaliberAmmoData;
}

function getDealerData(dealerLvList, ammoData, notForSale) {
    let DealerData = JSON.stringify(ammoData)
    DealerData = JSON.parse(DealerData)
    let resultList = []
    Object.keys(DealerData).forEach((name) => {
        if (notForSale && DealerData[name]["dealer"] === "none") {
            resultList.push(name)
        }
        for (let index = 0; index < dealerLvList.length; index++) {
            for (let Lv = dealerLvList[index].value; Lv >= 1; Lv--) {
                if (DealerData[name]["dealer"].indexOf(DealerList[index] + Lv) !== -1) {
                    resultList.push(name)
                }
            }
        }
    });
    Object.keys(DealerData).forEach((name) => {
        if (!resultList.includes(name)) {
            delete DealerData[name];
        }
    });
    return DealerData;
}

function makeData(caliber, dealerLvList, notForSale) {
    var Data = []
    Object.keys(getDealerData(dealerLvList, getCaliberAmmoData(caliber), notForSale)
    ).forEach(name => {
        Data.push({
            "name": name,
            "damage": AmmoData[name]["damage"],
            "penetrate": AmmoData[name]["penetrate"],
            "aDamage": AmmoData[name]["aDamage"],
            "accuracy": AmmoData[name]["accuracy"],
            "reaction": AmmoData[name]["reaction"],
            "crushing": AmmoData[name]["crushing"],
            "velocity": AmmoData[name]["velocity"],
            "dealer": AmmoData[name]["dealer"].replaceAll(" ", ", ").replaceAll("none", "戦利品"),
            "remarks": AmmoData[name]["remarks"]
        })
    });
    return Data
}

function saveLocalStorage(praporLv, skierLv, peacekeeperLv, mechanicLv, jaegerLv, workbenchLv) {
    if (window.localStorage) {
        localStorage.setItem('praporLv', JSON.stringify(praporLv));
        localStorage.setItem('skierLv', JSON.stringify(skierLv));
        localStorage.setItem('peacekeeperLv', JSON.stringify(peacekeeperLv));
        localStorage.setItem('mechanicLv', JSON.stringify(mechanicLv));
        localStorage.setItem('jaegerLv', JSON.stringify(jaegerLv));
        localStorage.setItem('workbenchLv', JSON.stringify(workbenchLv));
    }
}

function getLocalStorage(dealer) {
    if (window.localStorage) {
        let json = localStorage.getItem(dealer) === null ? JSON.stringify({ value: 1, label: "Lv.1" }) : localStorage.getItem(dealer);
        let array = JSON.parse(json);
        return array
    }
}

const AmmoAll = () => {
    const [settingShow, setShow] = useState(false);
    const [caliber, setCaliber] = useState({ value: "0", label: "All" });
    const [notForSale, setNFS] = useState(true);
    //dealerのレベル
    const [praporLv, setPraporLv] = useState(getLocalStorage('praporLv'));
    const [skierLv, setSkierLv] = useState(getLocalStorage('skierLv'));
    const [peacekeeperLv, setPeacekeeperLv] = useState(getLocalStorage('peacekeeperLv'));
    const [mechanicLv, setMechanicLv] = useState(getLocalStorage('mechanicLv'));
    const [jaegerLv, setJaegerLv] = useState(getLocalStorage('jaegerLv'));
    const [workbenchLv, setWorkbenchLv] = useState(getLocalStorage('workbenchLv'));
    useEffect(() => {
        saveLocalStorage(praporLv, skierLv, peacekeeperLv, mechanicLv, jaegerLv, workbenchLv);
    }, [praporLv, skierLv, peacekeeperLv, mechanicLv, jaegerLv, workbenchLv]);
    const data = makeData(caliber, [praporLv, skierLv, peacekeeperLv, mechanicLv, jaegerLv, workbenchLv], notForSale);
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <SettingBar setShowSetting={setShow} />
                <BackButton link={"/"} />
            </div>
            <div className='min-vh-100'>
                <App data={data} key={caliber} />
                <AmmoSettingOffcanvas canvasShow={settingShow} setShowSetting={setShow} caliber={caliber} setCaliber={setCaliber}
                    praporLv={praporLv} setPraporLv={setPraporLv} skierLv={skierLv} setSkierLv={setSkierLv}
                    peacekeeperLv={peacekeeperLv} setPeacekeeperLv={setPeacekeeperLv}
                    mechanicLv={mechanicLv} setMechanicLv={setMechanicLv} jaegerLv={jaegerLv}
                    setJaegerLv={setJaegerLv} workbenchLv={workbenchLv} setWorkbenchLv={setWorkbenchLv} notForSale={notForSale} setNFS={setNFS} />
            </div>
            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>
    )
}
export default AmmoAll