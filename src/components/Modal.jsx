//reactでテキストボックスとボタンがあるモーダルを作成する。テキストボックスの内容をクリップボードにコピーするボタンもモーダル内に設置する。
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ModalComp = ({ url, showBool, setShowBool }) => {
    const [copyButtonText, setCopyButtonText] = useState('コピー');
    const handleClose = () => { setShowBool(false); setCopyButtonText('コピー'); }
    const handleCopyButtonText = () => setCopyButtonText('コピーしました！');

    return (
        <>
            <Modal show={showBool} onHide={handleClose} size='xl'>
                <div className={'bg-dark text-white'}>
                    <Modal.Header className='text-white'>
                        <Modal.Title>共有</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="url" className="form-control" value={url} readOnly={true} />
                    </Modal.Body>
                    <Modal.Footer>
                        <CopyToClipboard text={url}>
                            <Button variant="primary" onClick={handleCopyButtonText}>{copyButtonText}</Button>
                        </CopyToClipboard>
                        <Button variant="secondary" onClick={handleClose}>
                            閉じる
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
export default ModalComp;
