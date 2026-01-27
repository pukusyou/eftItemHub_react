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

const dealersDict = [
    { value: "Prapor", label: "Prapor" },
    { value: "Therapist", label: "Therapist" },
    { value: "Skier", label: "Skier" },
    { value: "Peacekeeper", label: "Peacekeeper" },
    { value: "Mechanic", label: "Mechanic" },
    { value: "Ragman", label: "Ragman" },
    { value: "Jaeger", label: "Jaeger" }
];

function getBookMarkList() {
    const bookMarkName = "book_mark_name_list";
    let array = [];
    if (window.localStorage) {
        if (localStorage.getItem(bookMarkName) !== null) {
            let json = localStorage.getItem(bookMarkName);
            array = JSON.parse(json);
        }
    }
    return array;
}

const TaskSettingAll = () => {
    const thisUrl = window.location.href;
    const pageUrl = 'https://wikiwiki.jp/eft/%E3%82%BF%E3%82%B9%E3%82%AF#t9c50f18';
    const pageName = 'タスクリスト';
    const [selectedValue, setSelectedValue] = useState(dealersDict[0].value);
    const [code, setCode] = useState("");
    const [show, setShow] = useState(false);
    const [loadShow, setLoadShow] = useState(false);
    const [textBox, setTextBox] = useState("");
    const [modalShowBool, setModalShowBool] = useState(false);
    const [idList, setIdList] = useState(null);

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
                <SaveButton showBool={modalShowBool} setShowBool={setModalShowBool} textBox={textBox} setTextBox={setTextBox} />
                <LoadButton setShowLoadModal={setLoadShow} showLoadModal={loadShow} bookMarkList={getBookMarkList} setIdList={setIdList} />
                <ShareButton set={setShow} />
                <BackButton link={"/"} />
            </div>

            <div className='min-vh-100' style={{ padding: '0 1rem' }}>
                {/* Page Header */}
                <div style={{
                    textAlign: 'center',
                    padding: '2rem 0'
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
                        タスク進行状況
                    </h1>
                    <p style={{
                        color: 'var(--color-text-secondary, #94a3b8)',
                        marginTop: '0.5rem',
                        fontSize: '0.95rem'
                    }}>
                        完了したタスクをチェックして、必要なアイテムを確認しましょう
                    </p>
                </div>

                <ModalComp url={thisUrl + "?id=" + code} showBool={show} setShowBool={setShow} />

                {/* Controls Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                    padding: '1.5rem',
                    background: 'linear-gradient(145deg, #1a1a25 0%, #12121a 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                    {/* Dealer Selector */}
                    <div>
                        <label style={{
                            display: 'block',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: 'var(--color-accent-primary, #f59e0b)',
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            ディーラーを選択
                        </label>
                        <DealerSelecter options={dealersDict} setSelectedValue={setSelectedValue} />
                    </div>

                    {/* Confirm Button */}
                    <div style={{ textAlign: 'center' }}>
                        <ButtonComp str={"決定"} link={"/task/item/"} />
                    </div>
                </div>

                {/* Task Selection Area */}
                <TaskSelect dealer={selectedValue} setCode={setCode} idList={idList} />
            </div>

            <Footer pageUrl={pageUrl} pageName={pageName} />
        </>
    )
}

export default TaskSettingAll;