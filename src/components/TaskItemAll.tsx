import { useMemo, useState } from "react";
import Item from "./ItemCard";
import data from "../json/task_with_id.json";
import Footer from "./Footer";
import SettingBar from "./SettingBar";
import TaskItemOffCanvas from "./TaskItemOffcanvas";
import BackButton from "./BackButton";
import type { ItemCardTask, TaskData } from "../types";

const pageUrl = "https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18";
const pageName = "タスクリスト";
const dealers = [
  "Prapor",
  "Therapist",
  "Skier",
  "Peacekeeper",
  "Mechanic",
  "Ragman",
  "Jaeger",
];
const taskData = data as TaskData;

function getTasks(dealer: string) {
  const tasks = taskData[dealer];
  return Object.keys(tasks);
}

function getItems(dealer: string, taskName: string) {
  return taskData[dealer][taskName]["items"];
}

type TaskItemEntry = [
  string,
  string,
  number,
  boolean,
  string,
  string,
  ItemCardTask[],
];

function getItemsFullData(
  dealer: string,
  taskName: string,
  num: string,
): TaskItemEntry {
  const items = taskData[dealer][taskName]["items"];
  if (!items) {
    throw new Error(`Items not found for ${dealer} - ${taskName}`);
  }
  const item = items[num];
  const fullDatas: TaskItemEntry = [
    item.full_name,
    item.name,
    item.num,
    item.inRaid,
    item.img,
    item.category,
    [
      {
        name: taskName,
        url: taskData[dealer][taskName]["wiki_url"],
        num: item.num,
      },
    ],
  ];
  return fullDatas;
}

function getLocalStorage(dealer: string) {
  if (window.localStorage) {
    const json = localStorage.getItem(dealer);
    const array = JSON.parse(json ?? "[]");
    if (array === null) {
      return [];
    }
    return array as number[];
  }
  return [] as number[];
}

function getId2Task(dealer: string, idList: number[]) {
  const taskNameList: string[] = [];
  idList.forEach((id) => {
    getTasks(dealer).forEach((task) => {
      if (taskData[dealer][task]["id"] === Number(id)) {
        taskNameList.push(task);
      }
    });
  });
  return taskNameList;
}

function getPlayerData() {
  const playerTasksData: TaskItemEntry[] = [];
  dealers.forEach((dealer) => {
    const clearTasks = getId2Task(dealer, getLocalStorage(dealer));
    const reTasks = getTasks(dealer).filter(
      (i) => clearTasks.indexOf(i) === -1,
    );
    reTasks.forEach((task) => {
      const items = getItems(dealer, task);
      if (items !== undefined) {
        Object.keys(items).forEach((itemNum) => {
          playerTasksData.push(getItemsFullData(dealer, task, itemNum));
        });
      }
    });
  });
  return playerTasksData;
}

function categoryChange(
  showKey: boolean,
  showLoot: boolean,
  showWepon: boolean,
  showInRaid: boolean,
  itemData: TaskItemEntry[],
) {
  const resultData: TaskItemEntry[] = [];
  itemData.forEach((item) => {
    const matchesInRaid = showInRaid ? item[3] : true;
    const matchesCategory =
      (showKey && item[5] === "key") ||
      (showLoot && item[5] === "loot") ||
      (showWepon && item[5] === "wepon");

    if (matchesInRaid && matchesCategory) {
      resultData.push(item);
    }
  });
  return resultData;
}

function makeData(
  showKey: boolean,
  showLoot: boolean,
  showWepon: boolean,
  showInRaid: boolean,
) {
  let itemsData = getPlayerData();
  itemsData = categoryChange(
    showKey,
    showLoot,
    showWepon,
    showInRaid,
    itemsData,
  );

  // アイテムの重複を統合
  for (let index = 0; index < itemsData.length; index++) {
    for (let next = index + 1; next < itemsData.length; next++) {
      if (
        itemsData[index][0] === itemsData[next][0] &&
        itemsData[index][3] === itemsData[next][3]
      ) {
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
      if (
        itemsData[index][0] === itemsData[next][0] &&
        itemsData[index][2] > 0 &&
        itemsData[next][2] > 0
      ) {
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
  const itemsData = useMemo(
    () => makeData(showKey, showLoot, showWepon, showInRaid),
    [showKey, showLoot, showWepon, showInRaid],
  );

  const tagList = useMemo(
    () =>
      itemsData.map((itemData, index) => (
        <Item
          itemName={itemData[1]}
          img={itemData[4]}
          num={itemData[2] < 0 ? "Key" : "x" + itemData[2]}
          tasks={itemData[6]}
          inRaid={itemData[3] ? "inRaid" : "nonRaid"}
          category={itemData[5]}
          key={`${itemData[0]}-${index}`}
        />
      )),
    [itemsData],
  );

  return (
    <>
      {/* Action Bar */}
      <div className="sticky top-14 z-999 flex flex-wrap items-center justify-end gap-2 border-b border-border bg-[rgba(10,10,15,0.95)] px-4 py-3 backdrop-blur-md">
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
          {tagList.length > 0 ? (
            tagList
          ) : (
            <div className="col-span-full py-12 text-center text-text-secondary">
              <p className="text-lg">必要なアイテムはありません</p>
            </div>
          )}
        </div>
      </div>

      <Footer pageUrl={pageUrl} pageName={pageName} />
    </>
  );
};

export default TaskItemAll;
