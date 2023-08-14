import React from 'react';
import eftpdf from "../EFT0.13.0.5.23399_20230728.pdf"
import { Button, Modal } from 'react-bootstrap';

const TaskMap = ({ show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl">
                <div className={'bg-dark text-white'}>
                    <Modal.Header>
                        <Modal.Title>タスクマップ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ width: '100%', height: 'calc(100vh - 200px)' }}>
                        <iframe src={eftpdf} style={{ width: '100%', height: '100%' }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <small>※タスク名を押すとwikiのページに飛ぶことができます</small>
                        <Button variant="secondary" onClick={handleClose}>
                            閉じる
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}
export default TaskMap