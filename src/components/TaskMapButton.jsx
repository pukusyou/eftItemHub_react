import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isMobile } from "react-device-detect"
import { faMap } from '@fortawesome/free-solid-svg-icons';
const TaskMapButton = ({ set }) => {
    const handleShow = () => { set(true) }
    return (
        <>
            {isMobile ?
                (
                    <button className='btn btn-outline-light me-2 mb-2' onClick={handleShow}><FontAwesomeIcon icon={faMap} /></button>
                ) :
                (
                    //改行はなしで、右寄せにする
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleShow}><FontAwesomeIcon icon={faMap} /> Taskmap</button>
                )
            }
            {/* {description ? <Description /> : null} */}
        </>
    )
}
export default TaskMapButton