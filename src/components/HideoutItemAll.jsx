import React, { useState, useEffect, useMemo } from 'react';
import data from '../json/hideout.json';
import Footer from './Footer';
import Item from './ItemCard';
import OffCanvas from './OffCanvas';
import SettingBar from './SettingBar';
import BackButton from './BackButton';
import jp from '../json/hideoutJP.json';

const pageUrl = 'https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6';
const pageName = '隠れ家';

function getHideouts() {
    return Object.keys(data);
}

function getHideoutsLv(hideout) {
    return Object.keys(data[hideout]);
}

function getLocalStorage(hideoutName) {
    if (window.localStorage) {
        return localStorage.getItem(hideoutName) !== null ? localStorage.getItem(hideoutName) : 0;
    }
    return 0;
}

function getNextLv() {
    const hideoutNextLv = {};
    getHideouts().forEach(hideout => {
        hideoutNextLv[hideout] = Number(getLocalStorage(hideout)) + 1;
    });
    return hideoutNextLv;
}

function getItemsFullData(hideout, hideoutLv, num) {
    const fullDatas = [];
    const prop = ["full_name", "name", "num", "img"];
    prop.forEach(element => {
        fullDatas.push(data[hideout][hideoutLv]["items"][num][element]);
    });
    fullDatas.push([{
        name: hideoutLv,
        num: data[hideout][hideoutLv]["items"][num]["num"]
    }]);
    return fullDatas;
}

function getPlayerItemData() {
    const items = [];
    const nextLv = getNextLv();
    getHideouts().forEach(hideout => {
        for (let index = nextLv[hideout]; index <= getHideoutsLv(hideout).length; index++) {
            Object.keys(data[hideout][getHideoutsLv(hideout)[index - 1]]["items"]).forEach(num => {
                items.push(getItemsFullData(hideout, getHideoutsLv(hideout)[index - 1], num));
            });
        }
    });
    return items;
}

function getPlayerOnlyNextLvItemData() {
    const items = [];
    const nextLv = getNextLv();
    getHideouts().forEach(hideout => {
        if (nextLv[hideout] <= getHideoutsLv(hideout).length) {
            Object.keys(data[hideout][getHideoutsLv(hideout)[nextLv[hideout] - 1]]["items"]).forEach(num => {
                items.push(getItemsFullData(hideout, getHideoutsLv(hideout)[nextLv[hideout] - 1], num));
            });
        }
    });
    return items;
}

function makeData(flag = false) {
    let itemsData = flag ? getPlayerOnlyNextLvItemData() : getPlayerItemData();

    for (let index = 0; index < itemsData.length; index++) {
        for (let next = index + 1; next < itemsData.length; next++) {
            if (itemsData[index][0] === itemsData[next][0]) {
                itemsData[index][2] += itemsData[next][2];
                itemsData[index][4].push(itemsData[next][4][0]);
                itemsData.splice(next, 1);
                next--;
            }
        }
    }
    return itemsData;
}

function makeTags(flag) {
    const tagList = [];
    makeData(flag).forEach((data, index) => {
        data[4].forEach((task) => {
            Object.keys(jp).forEach(key => {
                task["name"] = task["name"].replace(key, jp[key]);
            });
        });

        tagList.push(
            <Item
                itemName={data[1]}
                img={data[3]}
                num={"x" + data[2]}
                tasks={data[4]}
                key={`${data[0]}-${index}`}
            />
        );
    });

    return tagList;
}

const HideoutItemAll = () => {
    const [showSetting, setShowSetting] = useState(false);
    const [itemSetting, setItemSetting] = useState(false);

    // useMemoでタグ生成を最適化
    const nextTags = useMemo(() => makeTags(false), []);
    const onlyNextTags = useMemo(() => makeTags(true), []);
    const [tags, changeTag] = useState(nextTags);

    useEffect(() => {
        if (itemSetting) {
            changeTag(onlyNextTags);
        } else {
            changeTag(nextTags);
        }
    }, [itemSetting, nextTags, onlyNextTags]);

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
                <SettingBar setShowSetting={setShowSetting} />
                <BackButton link={"/hideout/"} />
            </div>

            <div className="min-h-screen" style={{ padding: '0' }}>
                {/* Page Header */}
                <div style={{
                    textAlign: 'center',
                    padding: '1rem 0 0.5rem'
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
                        必要なアイテム
                    </h1>
                    <p style={{
                        color: 'var(--color-text-secondary, #94a3b8)',
                        marginTop: '0.5rem',
                        fontSize: '0.95rem'
                    }}>
                        ハイドアウト - {tags.length}個のアイテム {itemSetting && '(直近のレベルのみ)'}
                    </p>
                </div>

                <OffCanvas
                    setShowSetting={setShowSetting}
                    canvasShow={showSetting}
                    setItemSetting={setItemSetting}
                    itemSetting={itemSetting}
                />

                {/* Item Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 140px)',
                    gap: '8px',
                    padding: '1rem',
                    justifyContent: 'center'
                }}>
                    {tags.length > 0 ? tags : (
                        <div style={{
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            padding: '3rem',
                            color: '#94a3b8'
                        }}>
                            <p style={{ fontSize: '1.1rem' }}>
                                必要なアイテムはありません
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>
    );
}

export default HideoutItemAll;