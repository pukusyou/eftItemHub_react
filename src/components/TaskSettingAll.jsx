import TaskSelect from "./TaskSelect";
import DealerSelecter from "./DealerSelecter";
import ButtonComp from "./ButtonComp";
import React, { useState } from 'react';
import Footer from "./Footer";
import ModalComp from "./Modal";
import ShareButton from "./ShareButton";
import BackButton from "./BackButton";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import TaskMapButton from "./TaskMapButton";
import TaskMap from "./TaskMap";

const dealersDict = [{ value: "Prapor", label: "Prapor" }, { value: "Therapist", label: "Therapist" },
{ value: "Skier", label: "Skier" }, { value: "Peacekeeper", label: "Peacekeeper" }, { value: "Mechanic", label: "Mechanic" },
{ value: "Ragman", label: "Ragman" }, { value: "Jaeger", label: "Jaeger" }]

function getBookMarkList() {
    const bookMarkName = "book_mark_name_list"
    let array = [];
    if (window.localStorage) {
        if (localStorage.getItem(bookMarkName) !== null) {
            let json = localStorage.getItem(bookMarkName);
            array = JSON.parse(json);
        }
    }
    return array
}

const TaskSettingAll = () => {
    const thisUrl = window.location.href;
    const pageUrl = 'https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18';
    const pageName = 'タスクリスト';
    const [selectedValue, setSelectedValue] = useState(dealersDict[0].value);
    const [code, setCode] = useState("");
    const [show, setShow] = useState(false);
    const [taskmapShow, setTaskmapShow] = useState(false);
    const [loadShow, setLoadShow] = useState(false);
    const [textBox, setTextBox] = useState("");
    const [modalShowBool, setModalShowBool] = useState(false);
    const [idList, setIdList] = useState(null)
    return (
        <>
            <div className='d-flex justify-content-end me-0 mt-0 mb-2 bg-dark'>
                <TaskMapButton set={setTaskmapShow} />
                <SaveButton showBool={modalShowBool} setShowBool={setModalShowBool} textBox={textBox} setTextBox={setTextBox} />
                <LoadButton setShowLoadModal={setLoadShow} showLoadModal={loadShow} bookMarkList={getBookMarkList} setIdList={setIdList} />
                <ShareButton set={setShow} />
                <BackButton link={"/"} />
            </div>
            <div className='min-vh-100'>
                <TaskMap show={taskmapShow} setShow={setTaskmapShow}/>
                <h1 className='text-white m-0'>タスク進行状況</h1>
                <ModalComp url={thisUrl + "?id=" + code} showBool={show} setShowBool={setShow} />
                <div className="w-75">
                    <ButtonComp str={"決定"} link={"/task/item/"} />
                </div>
                <div className="w-50" ><DealerSelecter options={dealersDict} setSelectedValue={setSelectedValue} /></div>
                <TaskSelect dealer={selectedValue} setCode={setCode} idList={idList} />
            </div>
            <p className="text-white">{
            }</p>
            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>

    )
}
export default TaskSettingAll