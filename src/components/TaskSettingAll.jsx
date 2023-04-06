import TaskSelect from "./TaskSelect";
import DealerSelecter from "./DealerSelecter";
import ButtonComp from "./ButtonComp";
import React, { useState } from 'react';
import Footer from "./Footer";
import ModalComp from "./Modal";
import ShareButton from "./ShareButton";

const dealersDict = [{ value: "Prapor", label: "Prapor" }, { value: "Therapist", label: "Therapist" },
{ value: "Skier", label: "Skier" }, { value: "Peacekeeper", label: "Peacekeeper" }, { value: "Mechanic", label: "Mechanic" },
{ value: "Ragman", label: "Ragman" }, { value: "Jaeger", label: "Jaeger" }]

const TaskSettingAll = () => {
    const thisUrl = window.location.href;
    const pageUrl = 'https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18';
    const pageName = 'タスクリスト';
    const [selectedValue, setSelectedValue] = useState(dealersDict[0].value);
    const [code, setCode] = useState("");
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <ShareButton set={setShow} />
            </div>
            <div className='min-vh-100'>
                <h1 className='text-white m-0'>タスク進行状況</h1>
                <ModalComp url={thisUrl + "?id=" + code} showBool={show} setShowBool={setShow} />
                <div className="w-75">
                    <ButtonComp str={"決定"} link={"/task/item/"} />
                </div>
                <div className={"w-50"} ><DealerSelecter options={dealersDict} setSelectedValue={setSelectedValue} /></div>
                <TaskSelect dealer={selectedValue} setCode={setCode} />
            </div>
            <p className="text-white">{
            }</p>
            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>

    )
}
export default TaskSettingAll