import React from 'react';
import Item from "./ItemCard"
import data from '../json/task.json';
import Footer from './Footer';

const pageUrl = 'https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18';
const pageName = 'タスクリスト';
const dealers = ["Prapor", "Therapist", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger"]
/**
 * 引数で指定されたdealerのタスク一覧を配列で返します
 *
 * @param {*} dealer dealer名
 * @return {*} タスク一覧の配列
 */
function getTasks(dealer) {
    const tasks = data[dealer]
    return Object.keys(tasks)
}
/**
 * 引数で指定されたタスクのアイテム識別子を返します
 * @param {*} dealer dealer名
 * @param {*} taskName タスクの名前
 * @returns 識別子を含んだアイテムデータ(辞書型)
 */
function getItems(dealer, taskName) {
    var task = data[dealer][taskName]["items"]
    return task
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
function getItemsFullData(dealer, taskName, num) {
    var fullDatas = []
    const prop = ["full_name", "name", "num", "inRaid", "img", "category"]
    prop.forEach(element => {
        fullDatas.push(data[dealer][taskName]["items"][num][element])
    });
    fullDatas.push([{ name: taskName, url: data[dealer][taskName]["wiki_url"], num: data[dealer][taskName]["items"][num]["num"] }])
    return fullDatas
}
/**
 * localStorageの値から残っているタスクを算出、アイテムの情報を取得します
 * @returns 残っているタスクのアイテムすべて(配列)
 */
function getPlayerData() {
    var playerTasksData = []
    dealers.forEach(dealer => {
        if (localStorage.getItem(dealer) !== null) {
            var clearTasks = localStorage.getItem(dealer);
        } else {
            clearTasks = []
        }
        var reTasks = getTasks(dealer).filter(i => clearTasks.indexOf(i) === -1)
        reTasks.forEach(task => {
            if (getItems(dealer, task) !== undefined) {
                Object.keys(getItems(dealer, task)).forEach(itemNum => {
                    playerTasksData.push(getItemsFullData(dealer, task, itemNum))
                });
            }

        });
    });
    return playerTasksData
}

/**
 * アイテムに重複がある場合足す
 * @returns 整形されたアイテム情報(配列)
 */
function makeData() {
    var itemsData = getPlayerData()
    for (let index = 0; index < itemsData.length; index++) {
        for (let next = index + 1; next < itemsData.length; next++) {
            if (itemsData[index][0] === itemsData[next][0] && itemsData[index][2] > 0
                && itemsData[next][2] > 0 && itemsData[index][3] === itemsData[next][3]) {
                itemsData[index][2] += itemsData[next][2]
                itemsData[index][6].push(itemsData[next][6][0])
                itemsData.splice(next, 1)
                next--
            }
        }
    }
    for (let index = 0; index < itemsData.length; index++) {
        for (let next = index + 1; next < itemsData.length; next++) {
            if (itemsData[index][0] === itemsData[next][0] && itemsData[index][2] > 0
                && itemsData[next][2] > 0) {
                var itemData = itemsData.splice(next, 1)
                itemsData.splice(index, 0, itemData[0])
            }
        }
    }
    return itemsData
}



const TaskItemAll = () => {
    var tagList = []
    makeData().forEach((data, index) => {
        tagList.push(<Item itemName={data[1]} img={data[4]} num={data[2] < 0 ? "タスクで使用" : "x" + data[2]}
            tasks={data[6]} inRaid={data[3] ? "inRaid" : "nonRaid"} category={data[5]} key={index} />)
    });
    return (
        <>
            <div className='min-vh-100 '>
                <div className='d-flex flex-wrap'>
                    {tagList}
                </div>
            </div>

            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>
    )
}
export default TaskItemAll