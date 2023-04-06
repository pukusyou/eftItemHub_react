import { isMobile } from "react-device-detect"
import React from 'react';
import wallPaper from '../logo.png'
const TopImage = () => {

    return (
        <>
            {isMobile ?
                (
                    <div className=''>
                        <img src={wallPaper} alt="トップ画像" className='img-fluid w-100 d-block mx-auto' />
                    </div>
                ) :
                (
                    <div className='m-3'>
                        <img src={wallPaper} alt="トップ画像" className='img-fluid w-75 d-block mx-auto' />
                    </div>
                )
            }
        </>

    )
}
export default TopImage