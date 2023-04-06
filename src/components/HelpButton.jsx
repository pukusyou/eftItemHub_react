import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect"
const HelpButton = ({ }) => {
    return (
        <>
            {isMobile ?
                (
                    <button className='btn btn-outline-light me-2 mb-2' onClick={handleDescriptionClick}><FontAwesomeIcon icon={faQuestionCircle} /></button>
                ) :
                (
                    //改行はなしで、右寄せにする
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleDescriptionClick}><FontAwesomeIcon icon={faQuestionCircle} /> Help</button>

                )
            }
        </>
    )
}
export default HelpButton