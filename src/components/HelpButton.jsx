import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect"
import { useState } from 'react';
const HelpButton = ({ }) => {

    const [share, setShare] = useState(false);
    const handleShareClick = () => {
        setShare(!share);
    };
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
            {/* {description ? <Description /> : null} */}
        </>
    )
}
export default HelpButton