//アイコン付きのボタンで、クリックすると前のページに戻る。左寄せで表示される。
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const BackButton = ({ link }) => {
    const navigation = useNavigate()
    const handleBackClick = () => {
        navigation(link);
    };
    return (
        <>
            <button className='btn btn-outline-light me-1 mb-2 ms-2' onClick={handleBackClick}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
        </>
    )
}

export default BackButton