import React, { useState, useMemo } from 'react';
import Item from "./ItemCard";
import data from '../json/task_with_id.json';
import Footer from './Footer';
import SettingBar from './SettingBar';
import TaskItemOffCanvas from './TaskItemOffcanvas';
import BackButton from './BackButton';

const pageUrl = 'https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18';
const pageName = 'タスクリスト';
const dealers = ["Prapor", "Therapist", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger"];

function getTasks(dealer) {
    const tasks = data[dealer];
    return Object.keys(tasks);
}

function getItems(dealer, taskName) {
    return data[dealer][taskName]["items"];
}

function getItemsFullData(dealer, taskName, num) {
    const fullDatas = [];
    const prop = ["full_name", "name", "num", "inRaid", "img", "category"];
    prop.forEach(element => {
        fullDatas.push(data[dealer][taskName]["items"][num][element]);
    });
    fullDatas.push([{
        name: taskName,
        url: data[dealer][taskName]["wiki_url"],
        num: data[dealer][taskName]["items"][num]["num"]
    }]);
    return fullDatas;
}

function getLocalStorage(dealer) {
    if (window.localStorage) {
        let json = localStorage.getItem(dealer);
        let array = JSON.parse(json);
        if (array === null) {
            return [];
        }
        return array;
    }
    return [];
}

function getId2Task(dealer, idList) {
    let taskNameList = [];
    idList.forEach(id => {
        getTasks(dealer).forEach(task => {
            if (data[dealer][task]["id"] === Number(id)) {
                taskNameList.push(task);
            }
        });
    });
    return taskNameList;
}

function getPlayerData() {
    const playerTasksData = [];
    dealers.forEach(dealer => {
        const clearTasks = getId2Task(dealer, getLocalStorage(dealer));
        const reTasks = getTasks(dealer).filter(i => clearTasks.indexOf(i) === -1);
        reTasks.forEach(task => {
            if (getItems(dealer, task) !== undefined) {
                Object.keys(getItems(dealer, task)).forEach(itemNum => {
                    playerTasksData.push(getItemsFullData(dealer, task, itemNum));
                });
            }
        });
    });
    return playerTasksData;
}

function categoryChange(showKey, showLoot, showWepon, showInRaid, itemData) {
    const resultData = [];
    itemData.forEach(item => {
        const matchesInRaid = showInRaid ? item[3] : true;
        const matchesCategory = (showKey && item[5] === "key") ||
            (showLoot && item[5] === "loot") ||
            (showWepon && item[5] === "wepon");

        if (matchesInRaid && matchesCategory) {
            resultData.push(item);
        }
    });
    return resultData;
}

function makeData(showKey, showLoot, showWepon, showInRaid) {
    let itemsData = getPlayerData();
    itemsData = categoryChange(showKey, showLoot, showWepon, showInRaid, itemsData);

    // アイテムの重複を統合
    for (let index = 0; index < itemsData.length; index++) {
        for (let next = index + 1; next < itemsData.length; next++) {
            if (itemsData[index][0] === itemsData[next][0] &&
                itemsData[index][3] === itemsData[next][3]) {
                if (itemsData[index][2] > 0 && itemsData[next][2] > 0) {
                    itemsData[index][2] += itemsData[next][2];
                    itemsData[index][6].push(itemsData[next][6][0]);
                }
                itemsData.splice(next, 1);
                next--;
            }
        }
    }

    // inRaidとnonRaidを連続に並び替え
    for (let index = 0; index < itemsData.length; index++) {
        for (let next = index + 1; next < itemsData.length; next++) {
            if (itemsData[index][0] === itemsData[next][0] &&
                itemsData[index][2] > 0 && itemsData[next][2] > 0) {
                const itemData = itemsData.splice(next, 1);
                itemsData.splice(index, 0, itemData[0]);
            }
        }
    }
    return itemsData;
}

const TaskItemAll = () => {
    const [showSetting, setShowSetting] = useState(false);
    const [showKey, setShowKey] = useState(true);
    const [showLoot, setShowLoot] = useState(true);
    const [showWepon, setShowWepon] = useState(true);
    const [showInRaid, setShowInRaid] = useState(false);

    // useMemoでデータ計算を最適化
    const itemsData = useMemo(() =>
        makeData(showKey, showLoot, showWepon, showInRaid),
        [showKey, showLoot, showWepon, showInRaid]
    );

    const tagList = useMemo(() =>
        itemsData.map((data, index) => (
            <Item
                itemName={data[1]}
                img={data[4]}
                num={data[2] < 0 ? "Key" : "x" + data[2]}
                tasks={data[6]}
                inRaid={data[3] ? "inRaid" : "nonRaid"}
                category={data[5]}
                key={`${data[0]}-${index}`}
            />
        )),
        [itemsData]
    );

    return (
        <>
            {/* Action Bar */}
            <div className="sticky top-[56px] z-[999] flex flex-wrap items-center justify-end gap-2 border-b border-border bg-[rgba(10,10,15,0.95)] px-4 py-3 backdrop-blur-md">
                <SettingBar setShowSetting={setShowSetting} />
                <BackButton link={"/task/"} />
            </div>

            <div className="min-h-screen px-0">
                {/* Page Header */}
                <div className="pt-4 pb-2 text-center">
                    <h1 className="m-0 bg-gradient-gold bg-clip-text font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-[0.05em] uppercase text-transparent">
                        必要なアイテム
                    </h1>
                    <p className="mt-2 text-[0.95rem] text-text-secondary">
                        タスク - {itemsData.length}個のアイテム
                    </p>
                </div>

                <TaskItemOffCanvas
                    setShowSetting={setShowSetting}
                    canvasShow={showSetting}
                    setKeySetting={setShowKey}
                    keyShow={showKey}
                    setLootSetting={setShowLoot}
                    lootShow={showLoot}
                    setWeponSetting={setShowWepon}
                    weponShow={showWepon}
                    setInRaidSetting={setShowInRaid}
                    inRaidShow={showInRaid}
                />

                {/* Item Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {tagList.length > 0 ? tagList : (
                        <div className="col-span-full py-12 text-center text-text-secondary">
                            <p className="text-lg">
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

export default TaskItemAll;