import React, { useEffect, useMemo, useState } from "react";
import data from "../json/hideout.json";
import Footer from "./Footer";
import Item from "./ItemCard";
import OffCanvas from "./OffCanvas";
import SettingBar from "./SettingBar";
import BackButton from "./BackButton";
import jp from "../json/hideoutJP.json";
import type { HideoutData, ItemCardTask } from "../types";

const pageUrl = "https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6";
const pageName = "隠れ家";
const hideoutData = data as HideoutData;

function getHideouts() {
  return Object.keys(hideoutData);
}

function getHideoutsLv(hideout: string) {
  return Object.keys(hideoutData[hideout]);
}

function getLocalStorage(hideoutName: string) {
  if (window.localStorage) {
    return localStorage.getItem(hideoutName) !== null
      ? Number(localStorage.getItem(hideoutName))
      : 0;
  }
  return 0;
}

function getNextLv() {
  const hideoutNextLv: Record<string, number> = {};
  getHideouts().forEach((hideout) => {
    hideoutNextLv[hideout] = getLocalStorage(hideout) + 1;
  });
  return hideoutNextLv;
}

type HideoutItemEntry = [string, string, number, string, ItemCardTask[]];

function getItemsFullData(
  hideout: string,
  hideoutLv: string,
  num: string,
): HideoutItemEntry {
  const item = hideoutData[hideout][hideoutLv]["items"][num];
  const fullDatas: HideoutItemEntry = [
    item.full_name,
    item.name,
    item.num,
    item.img,
    [
      {
        name: hideoutLv,
        num: item.num,
      },
    ],
  ];
  return fullDatas;
}

function getPlayerItemData() {
  const items: HideoutItemEntry[] = [];
  const nextLv = getNextLv();
  getHideouts().forEach((hideout) => {
    for (
      let index = nextLv[hideout];
      index <= getHideoutsLv(hideout).length;
      index++
    ) {
      const hideoutLv = getHideoutsLv(hideout)[index - 1];
      Object.keys(hideoutData[hideout][hideoutLv]["items"]).forEach((num) => {
        items.push(getItemsFullData(hideout, hideoutLv, num));
      });
    }
  });
  return items;
}

function getPlayerOnlyNextLvItemData() {
  const items: HideoutItemEntry[] = [];
  const nextLv = getNextLv();
  getHideouts().forEach((hideout) => {
    if (nextLv[hideout] <= getHideoutsLv(hideout).length) {
      const hideoutLv = getHideoutsLv(hideout)[nextLv[hideout] - 1];
      Object.keys(hideoutData[hideout][hideoutLv]["items"]).forEach((num) => {
        items.push(getItemsFullData(hideout, hideoutLv, num));
      });
    }
  });
  return items;
}

function makeData(flag = false) {
  const itemsData = flag ? getPlayerOnlyNextLvItemData() : getPlayerItemData();

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

function makeTags(flag: boolean) {
  const tagList: React.ReactNode[] = [];
  makeData(flag).forEach((itemData, index) => {
    itemData[4].forEach((task) => {
      Object.keys(jp).forEach((key) => {
        task["name"] = task["name"].replace(
          key,
          (jp as Record<string, string>)[key],
        );
      });
    });

    tagList.push(
      <Item
        itemName={itemData[1]}
        img={itemData[3]}
        num={"x" + itemData[2]}
        tasks={itemData[4]}
        key={`${itemData[0]}-${index}`}
      />,
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
      <div className="sticky top-14 z-999 flex flex-wrap items-center justify-end gap-2 border-b border-border bg-[rgba(10,10,15,0.95)] px-4 py-3 backdrop-blur-md">
        <SettingBar setShowSetting={setShowSetting} />
        <BackButton link={"/hideout/"} />
      </div>

      <div className="min-h-screen px-0">
        {/* Page Header */}
        <div className="pt-4 pb-2 text-center">
          <h1 className="m-0 bg-gradient-gold bg-clip-text font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-[0.05em] uppercase text-transparent">
            必要なアイテム
          </h1>
          <p className="mt-2 text-[0.95rem] text-text-secondary">
            ハイドアウト - {tags.length}個のアイテム{" "}
            {itemSetting && "(直近のレベルのみ)"}
          </p>
        </div>

        <OffCanvas
          setShowSetting={setShowSetting}
          canvasShow={showSetting}
          setItemSetting={setItemSetting}
          itemSetting={itemSetting}
        />

        {/* Item Grid */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {tags.length > 0 ? (
            tags
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

export default HideoutItemAll;
