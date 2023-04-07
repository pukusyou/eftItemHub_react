import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect"
const ShareButton = ({ set }) => {
    const handleShow = () => { set(true) }
    return (
        <>
            {isMobile ?
                (
                    <button className='btn btn-outline-light me-2 mb-2' onClick={handleShow}><FontAwesomeIcon icon={faShareFromSquare} /></button>
                ) :
                (
                    //改行はなしで、右寄せにする
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleShow}><FontAwesomeIcon icon={faShareFromSquare} /> Share</button>
                )
            }
            {/* {description ? <Description /> : null} */}
        </>
    )
}
export default ShareButton