import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import SettingBar from './SettingBar';
import AmmoSettingOffcanvas from './AmmoSettingOffcanvas';
import App from './Table2';
import BackButton from './BackButton';
import { resolvePublicPath } from '../utils/publicPath';

const jsonFilePath = resolvePublicPath('json/ammo_dict.json');

function getCaliberAmmoData(ammoData, caliber) {
    let CaliberAmmoData = JSON.stringify(ammoData);
    CaliberAmmoData = JSON.parse(CaliberAmmoData);
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
    var Data = [];
    Object.keys(getCaliberAmmoData(ammoData, caliber)).forEach(name => {
        Data.push({
            "iconLink": resolvePublicPath(ammoData[name]["iconLink"]),
            "name": name,
            "damage": ammoData[name]["damage"],
            "penetrate": ammoData[name]["penetrationPower"],
            "aDamage": ammoData[name]["armorDamage"],
            "accuracy": ammoData[name]["accuracyModifier"],
            "reaction": ammoData[name]["recoilModifier"],
            "crushing": ammoData[name]["fragmentationChance"],
            "velocity": ammoData[name]["initialSpeed"],
        });
    });
    return Data;
}

function getCaliberList(data) {
    let CaliberList = [];
    Object.keys(data).forEach((name) => {
        CaliberList.push(name.split(" ")[0]);
    });
    CaliberList = Array.from(new Set(CaliberList));
    CaliberList.unshift("All");
    CaliberList.sort((a, b) => (a > b ? -1 : 1));
    return CaliberList;
}

const AmmoAll = () => {
    const [jsonData, setJsonData] = useState(undefined);
    let caliberList = [];
    const [settingShow, setShow] = useState(false);
    const [caliber, setCaliber] = useState({ value: "All", label: "All" });
    let data = [];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(jsonFilePath);
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    if (jsonData !== undefined) {
        caliberList = getCaliberList(jsonData);
        data = makeData(jsonData, caliber);
    }

    return (
        <>
            {/* Action Bar */}
            <div className="action-bar" style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: 'rgba(10, 10, 15, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--color-border, rgba(255, 255, 255, 0.08))',
                position: 'sticky',
                top: '56px',
                zIndex: 999,
                flexWrap: 'wrap'
            }}>
                <SettingBar setShowSetting={setShow} />
                <BackButton link={"/"} />
            </div>

            <div className="min-h-screen" style={{ padding: '0 1rem' }}>
                {/* Page Header */}
                <div style={{
                    textAlign: 'center',
                    padding: '2rem 0 1rem'
                }}>
                    <h1 style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        弾薬データベース
                    </h1>
                    <p style={{
                        color: 'var(--color-text-secondary, #94a3b8)',
                        marginTop: '0.5rem',
                        fontSize: '0.95rem'
                    }}>
                        {caliber.value === "All" ? "すべての弾薬" : caliber.value} - {data.length}種類
                    </p>
                </div>

                {/* Table */}
                <App data={data} key={caliber.value} />

                <AmmoSettingOffcanvas
                    canvasShow={settingShow}
                    setShowSetting={setShow}
                    caliber={caliber}
                    setCaliber={setCaliber}
                    caliberList={caliberList}
                />
            </div>
            <Footer />
        </>
    )
}

export default AmmoAll;