import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanvas = ({ setShowSetting, setItemSetting, canvasShow, itemSetting }) => {
    const handleClose = () => setShowSetting(false);
    return (
        <>
            <Offcanvas show={canvasShow} placement="top" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>表示設定</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-dark">
                    <div className="d-flex justify-content-between fs-4">
                        <div className="text-white">直近のレベルのみ表示</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={itemSetting}
                                onChange={(e) => {
                                    setItemSetting(e.target.checked);
                                }}
                            />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvas;
