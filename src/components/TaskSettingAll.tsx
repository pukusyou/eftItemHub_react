import TaskSelect from "./TaskSelect";
import DealerSelecter from "./DealerSelecter";
import ButtonComp from "./ButtonComp";
import { useMemo, useState } from "react";
import Footer from "./Footer";
import ModalComp from "./Modal";
import ShareButton from "./ShareButton";
import BackButton from "./BackButton";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import type { DealerOption } from "../types";

const dealersDict: DealerOption[] = [
  { value: "Prapor", label: "Prapor" },
  { value: "Therapist", label: "Therapist" },
  { value: "Skier", label: "Skier" },
  { value: "Peacekeeper", label: "Peacekeeper" },
  { value: "Mechanic", label: "Mechanic" },
  { value: "Ragman", label: "Ragman" },
  { value: "Jaeger", label: "Jaeger" },
];

const TaskSettingAll = () => {
  const thisUrl = window.location.href;
  const pageUrl =
    "https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18";
  const pageName = "タスクリスト";
  const [code, setCode] = useState("");
  const [shareShow, setShareShow] = useState(false);
  const [saveShow, setSaveShow] = useState(false);
  const [loadShow, setLoadShow] = useState(false);
  const [textBox, setTextBox] = useState("");
  const [selectedDealer, setSelectedDealer] = useState<DealerOption>(
    dealersDict[0],
  );
  const [missions, setMissions] = useState<number[]>([]);

  const shareUrl = useMemo(() => {
    if (!code) {
      return thisUrl;
    }
    const url = new URL(thisUrl);
    url.searchParams.set("id", code);
    return url.toString();
  }, [code, thisUrl]);

  return (
    <>
      {/* Action Bar */}
      <div className="sticky top-[56px] z-[999] flex flex-wrap items-center justify-end gap-2 border-b border-border bg-[rgba(10,10,15,0.95)] px-4 py-3 backdrop-blur-md">
        <SaveButton
          showBool={saveShow}
          setShowBool={setSaveShow}
          textBox={textBox}
          setTextBox={setTextBox}
        />
        <LoadButton
          showLoadModal={loadShow}
          setShowLoadModal={setLoadShow}
          setMissions={setMissions}
        />
        <ShareButton set={setShareShow} />
        <BackButton link={"/"} />
      </div>

      <div className="min-h-screen px-4">
        {/* Page Header */}
        <div className="py-8 text-center">
          <h1 className="m-0 bg-gradient-gold bg-clip-text font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[0.05em] uppercase text-transparent">
            タスク進行状況
          </h1>
          <p className="mt-2 text-[0.9rem] text-text-secondary">
            完了したタスクをチェックして、必要なアイテムを確認しましょう
          </p>
        </div>

        {/* Controls Section */}
        <div className="mx-auto mb-8 flex max-w-[600px] flex-col items-center gap-6 rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] p-6 shadow-md">
          {/* Dealer Selector */}
          <div className="flex w-full flex-col items-center gap-2">
            <label className="font-heading text-sm font-bold uppercase tracking-wider text-accent-primary">
              トレーダー選択
            </label>
            <div className="w-full max-w-[300px]">
              <DealerSelecter
                options={dealersDict}
                value={selectedDealer}
                setSelectedDealer={setSelectedDealer}
              />
            </div>
          </div>

          {/* Confirm Button */}
          <ButtonComp str={"決定"} link={"/task/item/"} />
        </div>

        {/* Task Selection Area */}
        <div className="mx-auto max-w-6xl pb-8">
          {selectedDealer && (
            <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="font-heading text-lg font-bold text-slate-100">
                {selectedDealer.label}
              </span>
            </div>
          )}
          <TaskSelect
            selectedDealer={selectedDealer}
            setCode={setCode}
            idList={missions}
          />
        </div>
      </div>
      <ModalComp
        url={shareUrl}
        showBool={shareShow}
        setShowBool={setShareShow}
      />
      <Footer pageUrl={pageUrl} pageName={pageName} />
    </>
  );
};

export default TaskSettingAll;
