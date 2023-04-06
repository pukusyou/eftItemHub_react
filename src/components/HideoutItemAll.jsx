//reactの金型
import React, { useState, useEffect } from 'react';
import data from '../json/hideout.json'
import Footer from './Footer';
import Item from './ItemCard';
import OffCanvas from './OffCanvas';
import SettingBar from './SettingBar';
import BackButton from './BackButton';
const pageUrl = 'https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6';
const pageName = '隠れ家';

/**
 * 設備の名前を配列で返します
 * @returns 隠れ家の設備の名前の配列
 */
function getHideouts() {
    var hideoutList = Object.keys(data);
    return hideoutList
}

/**
 * 引数の設備のレベル識別子を配列で返します
 * @param {*} hideout 設備の名前
 * @returns 識別子を配列で返します
 */
function getHideoutsLv(hideout) {
    var hideoutList = Object.keys(data[hideout]);
    return hideoutList
}

/**
 * 引数で指定された設備のレベルをlocalStorageから取得します
 * @param {*} hideoutName 設備の名前
 * @returns localStorageに保存されている設備のレベル
 */
function getLocalStorage(hideoutName) {
    if (window.localStorage) {
        return localStorage.getItem(hideoutName) !== null ? localStorage.getItem(hideoutName) : 0;
    }
}

/**
 * 設備の次のレベルの設備の名前とレベルをオブジェクトで返します
 * @returns playerの次のレベルの設備の名前とレベルをオブジェクト
 */
function getNextLv() {
    var hideoutNextLv = {}
    getHideouts().forEach(hideout => {
        hideoutNextLv[hideout] = getLocalStorage(hideout) + 1
    });
    return hideoutNextLv
}

/**
 * 引数で指定されたアイテムのすべての情報を配列に入れて返します
 * アイテム名,略称,数,インレイド,画像パス,カテゴリ,タスク名(配列)
 *
 * @param {*} dealer dealerの名前
 * @param {*} taskName タスクの名前
 * @param {*} num item1,item2のような識別子
 * @return {*} 引数で指定されたアイテムのすべての情報
 */
function getItemsFullData(hideout, hideoutLv, num) {
    var fullDatas = []
    const prop = ["full_name", "name", "num", "img"]
    prop.forEach(element => {
        fullDatas.push(data[hideout][hideoutLv]["items"][num][element])
    });
    fullDatas.push([{ name: hideoutLv, num: data[hideout][hideoutLv]["items"][num]["num"] }])
    return fullDatas
}

/**
 * プレイヤーが必要なアイテムの情報を配列で返します
 * @returns プレイヤーが必要なアイテムの情報の配列
 */
function getPlayerItemData() {
    var items = []
    const nextLv = getNextLv()
    getHideouts().forEach(hideout => {
        for (let index = nextLv[hideout]; index <= getHideoutsLv(hideout).length; index++) {
            Object.keys(data[hideout][getHideoutsLv(hideout)[index - 1]]["items"]).forEach(num => {
                items.push(getItemsFullData(hideout, getHideoutsLv(hideout)[index - 1], num))
            });
        }
    });
    return items
}

/**
 * プレイヤーが必要な次のレベルだけのアイテムの情報を配列で返します
 * @returns プレイヤーが必要な次のレベルだけのアイテムの情報の配列
 */
function getPlayerOnlyNextLvItemData() {
    var items = []
    const nextLv = getNextLv()
    getHideouts().forEach(hideout => {
        if (nextLv[hideout] <= getHideoutsLv(hideout).length) {
            Object.keys(data[hideout][getHideoutsLv(hideout)[nextLv[hideout] - 1]]["items"]).forEach(num => {
                items.push(getItemsFullData(hideout, getHideoutsLv(hideout)[nextLv[hideout] - 1], num))
            });
        }
    });
    return items
}

/**
 * アイテムに重複がある場合足す
 * @returns 整形されたアイテム情報(配列)
 */
function makeData(flag = false) {
    var itemsData = flag ? getPlayerOnlyNextLvItemData() : getPlayerItemData()
    for (let index = 0; index < itemsData.length; index++) {
        for (let next = index + 1; next < itemsData.length; next++) {
            if (itemsData[index][0] === itemsData[next][0]) {
                //itemsData[index][2] += itemsData[next][2]、itemsData[index][4].push(itemsData[next][4][0])をしたあとitemData[next]を消す
                itemsData[index][2] += itemsData[next][2]
                itemsData[index][4].push(itemsData[next][4][0])
                itemsData.splice(next, 1)
                next--
                if (itemsData[index][0] === "Corrugated hose") console.log(index + "と" + next + "が重複しています" + itemsData[index][4])
            }
        }
    }
    return itemsData
}

/**
 * jsxのタグを作成します
 * @param {*} flag true: 次のレベルだけのアイテム, false: すべてのアイテム
 * @returns jsxのタグ
 */
function makeTags(flag) {
    var tagList = []
    makeData(flag).forEach((data) => {
        tagList.push(
            <Item itemName={data[1]} img={data[3]} num={"x" + data[2]}
                tasks={data[4]} key={data[0]} />
        )
    });
    return tagList
}



const HideoutItemAll = () => {
    const nextTags = makeTags(false);
    const onlyNextTags = makeTags(true);
    const [tags, changeTag] = useState(nextTags);
    const [showSetting, setShowSetting] = useState(false);
    const [itemSetting, setItemSetting] = useState(false);
    useEffect(() => {
        if (itemSetting) {
            changeTag(onlyNextTags)
        } else {
            changeTag(nextTags)
        }
    }, [itemSetting])
    console.log(showSetting)
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <SettingBar setShowSetting={setShowSetting} />
                <BackButton link={"/hideout/"} />
            </div>

            <div className='min-vh-100'>
                <OffCanvas setShowSetting={setShowSetting} canvasShow={showSetting} setItemSetting={setItemSetting} itemSetting={itemSetting} />
                <div className='d-flex flex-wrap'>
                    {tags}
                </div>
            </div>
            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>
    )
}
export default HideoutItemAll;