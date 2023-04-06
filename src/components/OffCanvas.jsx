import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
var flag = false
const OffCanvas = ({ setShowSetting, setItemSetting, canvasShow }) => {
    const handleClose = () => setShowSetting(false);
    return (
        <>
            <Offcanvas show={canvasShow} placement="top" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>表示設定</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex justify-content-between fs-4">
                        <div className="text-dark">直近のレベルのみ表示</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={flag}
                                onChange={(e) => {
                                    setItemSetting(e.target.checked);
                                    flag = e.target.checked
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
