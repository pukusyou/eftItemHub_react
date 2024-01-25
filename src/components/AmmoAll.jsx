import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import SettingBar from './SettingBar';
import AmmoSettingOffcanvas from './AmmoSettingOffcanvas';
import App from './Table2';
import BackButton from './BackButton';
import { get, set } from 'react-hook-form';
// const pageUrl = 'https://wikiwiki.jp/eft/%E5%BC%BE%E8%96%AC';
// const pageName = '弾薬';

const DealerList = ["Prapor.LL", "Skier.LL", "Peacekeeper.LL", "Mechanic.LL", "Jaeger.LL","Workbench.LV"]

const jsonFilePath = process.env.PUBLIC_URL + '/json/ammo_dict.json';

function getCaliberAmmoData(ammoData, caliber) {
    let CaliberAmmoData = JSON.stringify(ammoData)
    CaliberAmmoData = JSON.parse(CaliberAmmoData)
    if (caliber.value !== "All") {
        Object.keys(CaliberAmmoData).forEach((name) => {
            if (name.split(" ")[0] !== caliber.value) {
                delete CaliberAmmoData[name];
            }
        });
    }
    return CaliberAmmoData;
}

function makeData(ammoData, caliber) {
    var Data = []
    Object.keys(getCaliberAmmoData(ammoData, caliber)
    ).forEach(name => {
        Data.push({
            "iconLink": process.env.PUBLIC_URL + "/" +ammoData[name]["iconLink"],
            "name": name,
            "damage": ammoData[name]["damage"],
            "penetrate": ammoData[name]["penetrationPower"],
            "aDamage": ammoData[name]["armorDamage"],
            "accuracy": ammoData[name]["accuracyModifier"],
            "reaction": ammoData[name]["recoilModifier"],
            "crushing": ammoData[name]["fragmentationChance"],
            "velocity": ammoData[name]["initialSpeed"],
        })
    });
    return Data
}

// jsonのkeyをすべて取得し、空白で分割、その後それぞれの1つ目の要素を重複なしで取得するメソッド
function getCaliberList(data) {
    let CaliberList = []
    Object.keys(data).forEach((name) => {
        CaliberList.push(name.split(" ")[0])
    });
    CaliberList = Array.from(new Set(CaliberList))
    CaliberList.unshift("All")
    // sortする
    CaliberList.sort((a,b) => (a > b ? -1 : 1))
    // console.log(CaliberList)
    return CaliberList
}

const AmmoAll = () => {
    const [jsonData, setJsonData] = useState(undefined);
    let caliberList = []
    const [settingShow, setShow] = useState(false);
    const [caliber, setCaliber] = useState({ value: "All", label: "All" });
    let data = []
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(jsonFilePath);
            const data = await response.json();
            setJsonData(data);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        }
    
        fetchData();
      }, []);
    if (jsonData !== undefined) {
        // console.log(jsonData)
        // setCaliberList(getCaliberList(jsonData))
        caliberList = getCaliberList(jsonData)
        data = makeData(jsonData, caliber);
    }
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <SettingBar setShowSetting={setShow} />
                <BackButton link={"/"} />
            </div>
            <div className='min-vh-100'>
                <App data={data} key={caliber} />
                <AmmoSettingOffcanvas canvasShow={settingShow} setShowSetting={setShow} caliber={caliber} setCaliber={setCaliber}
                    caliberList={caliberList} />
            </div>
            <Footer />
        </>
    )
}
export default AmmoAll