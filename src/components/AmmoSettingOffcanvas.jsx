import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import AmmoSelecter from "./AmmoSelecter";

const LvDict = [{ value: 1, label: "Lv.1" }, { value: 2, label: "Lv.2" },
{ value: 3, label: "Lv.3" }, { value: 4, label: "Lv.4" }]
const CaliberDict = [{ value: "0", label: "All" }, { value: "7.62x25", label: "7.62x25mm" },
{ value: "9x18", label: "9x18mm" }, { value: "9x19", label: "9x19mm" }, { value: "9x21", label: "9x21mm" }, { value: ".357", label: ".357 Magnum" },
{ value: "ACP", label: ".45 ACP" }, { value: "4.6x30", label: "4.6x30mm" }, { value: "5.7x28", label: "5.7x28mm" },
{ value: "5.45x39", label: "5.45x39mm" }, { value: "5.56x45", label: "5.56x45mm" }, { value: "7.62x39", label: "7.62x39mm" }, { value: "9x39", label: "9x39mm" },
{ value: "7.62x51", label: "7.62x51mm" }, { value: "4.6x30", label: ".300 Blackout" }, { value: "7.62x54", label: "7.62x54mmR" }, { value: ".338", label: ".338 Lapua Magnum" }, { value: "12.7x55", label: "12.7x55mm" }, { value: "12 gauge", label: "12 gauge" },
{ value: "20 gauge", label: "20 gauge" }, { value: ".366", label: ".366 TKM" }, { value: "23x75", label: "23x75mm" }]
const AmmoSettingOffcanvas = ({ setShowSetting, canvasShow, caliber, setCaliber, praporLv, setPraporLv, skierLv, setSkierLv, peacekeeperLv, setPeacekeeperLv,
    mechanicLv, setMechanicLv, jaegerLv, setJaegerLv, workbenchLv, setWorkbenchLv, notForSale, setNFS }) => {
    const handleClose = () => setShowSetting(false);
    return (
        <>
            <Offcanvas show={canvasShow} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>表示設定</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex justify-content-between fs-4 pb-4">
                        <div className="text-dark">戦利品のみの表示</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={notForSale}
                                onChange={(e) => {
                                    setNFS(e.target.checked);
                                }}
                            />
                        </div>
                    </div>
                    <h3 className="ps-0 pb-1">口径</h3>
                    <div className="d-flex justify-content-between fs-5 mb-3">
                        <AmmoSelecter options={CaliberDict} setSelectedValue={setCaliber} value={caliber} isSearchable={true} />
                    </div>
                    <h3 className="ps-0 pb-1">トレーダーレベル</h3>
                    <div className="d-flex justify-content-between fs-5">
                        <p className="text-dark">Prapor</p>
                        <div className="w-50"><AmmoSelecter options={LvDict} setSelectedValue={setPraporLv} value={praporLv} /></div>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <div className="text-dark">Skier</div>
                        <div className="w-50"><AmmoSelecter options={LvDict} setSelectedValue={setSkierLv} value={skierLv} /></div>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <div className="text-dark">Peacekeeper</div>
                        <div className="w-50"><AmmoSelecter options={LvDict} setSelectedValue={setPeacekeeperLv} value={peacekeeperLv} /></div>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <div className="text-dark">Mechanic</div>
                        <div className="w-50"><AmmoSelecter options={LvDict} setSelectedValue={setMechanicLv} value={mechanicLv} /></div>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <div className="text-dark">Jaeger</div>
                        <div className="w-50"><AmmoSelecter options={LvDict} setSelectedValue={setJaegerLv} value={jaegerLv} /></div>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <div className="text-dark">Workbench</div>
                        <div className="w-50"><AmmoSelecter options={LvDict} setSelectedValue={setWorkbenchLv} value={workbenchLv} /></div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AmmoSettingOffcanvas;