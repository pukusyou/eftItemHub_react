import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from "react-device-detect"
const SettingBar = ({ setShowSetting }) => {

    // const [setting, setSetting] = useState(false);
    const handleSettingClick = () => {
        setShowSetting(true);
    };
    return (
        <>
            {isMobile ?
                (
                    <button className='btn btn-outline-light me-2 mb-2' onClick={handleSettingClick}><FontAwesomeIcon icon={faCog} /></button>
                ) :
                (
                    //改行はなしで、右寄せにする
                    <button className='btn btn-outline-light me-1 mb-2' onClick={handleSettingClick}><FontAwesomeIcon icon={faCog} /> Setting</button>

                )
            }
        </>
    )
}
export default SettingBar