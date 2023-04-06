import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const TaskItemOffCanvas = ({ setShowSetting, setKeySetting, canvasShow, keyShow, setLootSetting, lootShow, setWeponSetting, weponShow }) => {
    const handleClose = () => setShowSetting(false);
    return (
        <>
            <Offcanvas show={canvasShow} placement="top" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>表示設定</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-dark pt-4">
                    <div className="d-flex justify-content-between fs-4 p-1 mb-2">
                        <div className="text-white">鍵の表示</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={keyShow}
                                onChange={(e) => {
                                    setKeySetting(e.target.checked);
                                }}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between fs-4 p-1 mb-2">
                        <div className="text-white">ルート品の表示</div>
                        <div className="form-check form-switch">
                            <input
                                //check時のボタンの色を緑に変える
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={lootShow}
                                onChange={(e) => {
                                    setLootSetting(e.target.checked);
                                }}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between fs-4 p-1 mb-2">
                        <div className="text-white">装備品の表示</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={weponShow}
                                onChange={(e) => {
                                    setWeponSetting(e.target.checked);
                                }}
                            />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default TaskItemOffCanvas;