//アイコン付きの保存ボタン。モバイルの場合はアイコンのみ表示。クリックすると"保存しました"というポップアップが表示される。
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect"
import { Button, Modal } from 'react-bootstrap';
import data from '../json/task_with_id.json';
function saveBookMark(name) {
    const bookMarkName = "book_mark_name_list"
    let array = [];
    if (window.localStorage) {
        if (localStorage.getItem(bookMarkName) !== null) {
            let json = localStorage.getItem(bookMarkName);
            array = JSON.parse(json);
            if (array.length > 4) {
                throw new Error("ブックマークは5つまでです");
            } else if (array.includes(name)) {
                throw new Error("同じ名前のブックマークは作成できません");
            }
        }
        if (name.length === 0) {
            throw new Error("ブックマーク名を入力してください");
        } else if (name.indexOf(" ") >= 0) {
            throw new Error("空白は含めないでください");
        } else if (Object.keys(localStorage).includes(name) || name === bookMarkName) {
            throw new Error("別の名前を入力してください");
        } else if (!name.match((/^[0-9a-zA-Z]*$/))) {
            throw new Error("別の名前を入力してください");
        } else if (name.length > 24) {
            throw new Error("25文字以内で入力してください");
        }
        let json = JSON.stringify(array.concat(name), undefined, 1);
        localStorage.setItem(bookMarkName, json);
        return true;
    }
    throw new Error("ブックマークの保存に失敗しました");
}
function getLocalStorageId(dealerName) {
    if (window.localStorage && localStorage.getItem(dealerName) !== null) {
        let json = localStorage.getItem(dealerName);
        let array = JSON.parse(json);
        return array
    }
}
const SaveButton = ({ showBool, setShowBool, textBox, setTextBox }) => {
    const [err, setErr] = useState("");
    const [ok, setOk] = useState("");
    const handleClose = () => setShowBool(false);
    const handleSaveClick = () => {
        setShowBool(true);
    };
    const handleSave = () => {
        try {
            setErr("")
            saveBookMark(textBox)
            setOk("保存しました")
            let taskIds = []
            Object.keys(data).forEach(dealer => {
                taskIds = taskIds.concat(getLocalStorageId(dealer))
            });
            console.log(taskIds)
            localStorage.setItem(textBox, JSON.stringify(taskIds, undefined, 1));
        } catch (error) {
            setOk("")
            setErr(error.message)
        }
        setTextBox("")
    };
    useEffect(() => {
        setErr("")
        setOk("")
    }, [showBool])
    return (
        <>
            {isMobile ?
                (
                    <button className='btn btn-outline-light me-2 mb-2' onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /></button>
                ) :
                (
                    //改行はなしで、右寄せにする
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleSaveClick}> <FontAwesomeIcon icon={faSave} /> Save</button>
                )
            }
            <Modal show={showBool} onHide={handleClose} >
                <div className={'bg-dark text-white'}>
                    <Modal.Header closeButton>
                        <Modal.Title>保存</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>ブックマーク名</h5>
                        <small>アルファベット大文字・小文字、数字で入力してください(25文字以内)</small>
                        <input type="text" className="form-control" value={textBox} onChange={(event) => setTextBox(event.target.value)} />
                        <small className='text-danger'>{err}</small>
                        <small className='text-success'>{ok}</small>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleSave}>
                            保存
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            閉じる
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}
export default SaveButton
