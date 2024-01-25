import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import AmmoSelecter from "./AmmoSelecter";

const LvDict = [{ value: 1, label: "Lv.1" }, { value: 2, label: "Lv.2" },
{ value: 3, label: "Lv.3" }, { value: 4, label: "Lv.4" }]

// 配列を{value: , label: }の形に変換する
function makeOptions(array) {
    let options = []
    array.forEach((element) => {
        options.push({ value: element, label: element })
    });
    return options
}

const AmmoSettingOffcanvas = ({ setShowSetting, canvasShow, caliber, setCaliber, caliberList}) => {
    const handleClose = () => setShowSetting(false);
    return (
        <>
            <Offcanvas show={canvasShow} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>表示設定</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-dark">
                    <div className="d-flex justify-content-between fs-4 pb-4">
                    </div>
                    <h3 className="ps-0 pb-1 text-white">口径</h3>
                    <div className="d-flex justify-content-between fs-5 mb-3">
                        <AmmoSelecter options={makeOptions(caliberList)} setSelectedValue={setCaliber} value={caliber} isSearchable={true} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AmmoSettingOffcanvas;