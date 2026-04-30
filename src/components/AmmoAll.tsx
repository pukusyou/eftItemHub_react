import { useEffect, useState } from "react";
import Footer from "./Footer";
import SettingBar from "./SettingBar";
import AmmoSettingOffcanvas from "./AmmoSettingOffcanvas";
import App from "./Table2";
import BackButton from "./BackButton";
import { resolvePublicPath } from "../utils/publicPath";
import type { SelectOption, TableRow } from "../types";

const jsonFilePath = resolvePublicPath("json/ammo_dict.json");

type AmmoEntry = {
  iconLink: string;
  damage: number;
  penetrationPower: number;
  armorDamage: number;
  accuracyModifier: number;
  recoilModifier: number;
  fragmentationChance: number;
  initialSpeed: number;
};

type AmmoData = Record<string, AmmoEntry>;

function getCaliberAmmoData(ammoData: AmmoData, caliber: SelectOption) {
  const filteredData: AmmoData = { ...ammoData };
  if (caliber.value !== "All") {
    Object.keys(filteredData).forEach((name) => {
      if (name.split(" ")[0] !== caliber.value) {
        delete filteredData[name];
      }
    });
  }
  return filteredData;
}

function makeData(ammoData: AmmoData, caliber: SelectOption): TableRow[] {
  const rows: TableRow[] = [];
  Object.keys(getCaliberAmmoData(ammoData, caliber)).forEach((name) => {
    const entry = ammoData[name];
    rows.push({
      iconLink: resolvePublicPath(entry.iconLink),
      name,
      damage: entry.damage,
      penetrate: entry.penetrationPower,
      aDamage: entry.armorDamage,
      accuracy: entry.accuracyModifier,
      reaction: entry.recoilModifier,
      crushing: entry.fragmentationChance,
      velocity: entry.initialSpeed,
    });
  });
  return rows;
}

function getCaliberList(data: AmmoData) {
  let caliberList: string[] = [];
  Object.keys(data).forEach((name) => {
    caliberList.push(name.split(" ")[0]);
  });
  caliberList = Array.from(new Set(caliberList));
  caliberList.unshift("All");
  caliberList.sort((a, b) => (a > b ? -1 : 1));
  return caliberList;
}

const AmmoAll = () => {
  const [jsonData, setJsonData] = useState<AmmoData | null>(null);
  let caliberList: string[] = [];
  const [settingShow, setShow] = useState(false);
  const [caliber, setCaliber] = useState<SelectOption>({
    value: "All",
    label: "All",
  });
  let data: TableRow[] = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonFilePath);
        const data: AmmoData = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  if (jsonData !== null) {
    caliberList = getCaliberList(jsonData);
    data = makeData(jsonData, caliber);
  }

  return (
    <>
      {/* Action Bar */}
      <div className="sticky top-14 z-999 flex flex-wrap items-center justify-end gap-2 border-b border-border bg-[rgba(10,10,15,0.95)] px-4 py-3 backdrop-blur-md">
        <SettingBar setShowSetting={setShow} />
        <BackButton link={"/"} />
      </div>

      <div className="min-h-screen px-4">
        {/* Page Header */}
        <div className="py-8 text-center">
          <h1 className="m-0 bg-gradient-gold bg-clip-text font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[0.05em] uppercase text-transparent">
            弾薬データベース
          </h1>
          <p className="mt-2 text-[0.9rem] text-text-secondary">
            {caliber.value === "All" ? "すべての弾薬" : caliber.value} -{" "}
            {data.length}種類
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
      <Footer
        pageUrl="https://wikiwiki.jp/eft/%E5%BC%BE%E8%96%AC"
        pageName="弾薬"
      />
    </>
  );
};

export default AmmoAll;
