//アイコン付きのボタンで、クリックすると前のページに戻る。左寄せで表示される。
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect"
import { Button, Modal } from 'react-bootstrap';

function makeTags(bookMarkList) {
    let tags = []
    if (bookMarkList.length > 0) {
        bookMarkList.forEach(bookMark => {
            tags.push(
                //{bookMark}の隣にゴミ箱アイコンをつける
                <div className="form-check" key={bookMark}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={bookMark} />
                    <label className="form-check-label" htmlFor={bookMark}>
                        {bookMark.replace("bookMark_", "")}
                    </label>
                </div>
            )
        });
    }
    return tags
}

const LoadButton = ({ setShowLoadModal, showLoadModal, bookMarkList, setIdList }) => {
    const [bookMarkname, setBookMarkName] = useState(bookMarkList());
    const handleShow = () => {
        setBookMarkName(bookMarkList());
        setShowLoadModal(true);
    };
    const handleClose = () => {
        setShowLoadModal(false);
    };
    const handleLoad = () => {
        if (bookMarkList().length > 0) {
            let bookMarkName = document.querySelector('input[name="flexRadioDefault"]:checked').id;
            let bookMark = JSON.parse(localStorage.getItem(bookMarkName));
            setIdList(bookMark);
            setShowLoadModal(false);
        }
    }
    const handleRemove = () => {
        if (bookMarkList().length > 0) {
            let bookMarkName = document.querySelector('input[name="flexRadioDefault"]:checked').id;
            localStorage.removeItem(bookMarkName);
            let json = JSON.stringify(bookMarkList().filter(n => n !== bookMarkName), undefined, 1);
            localStorage.setItem("book_mark_name_list", json)
            setBookMarkName(bookMarkList());
        }

    }

    return (
        <>
            {isMobile ?
                (
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleShow}><FontAwesomeIcon icon={faBarsProgress} /></button>
                ) :
                (
                    //改行はなしで、右寄せにする
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleShow}><FontAwesomeIcon icon={faBarsProgress} /> Load</button>
                )
            }
            <Modal show={showLoadModal} onHide={handleClose} >
                <div className={'bg-dark text-white'}>
                    <Modal.Header>
                        <Modal.Title>保存</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {makeTags(bookMarkname).length > 0 ? makeTags(bookMarkname) : <div>ブックマークがありません</div>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleRemove}>
                            削除
                        </Button>
                        <Button variant="primary" onClick={handleLoad}>
                            読み込み
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

export default LoadButton