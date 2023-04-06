import React from 'react';
import { isMobile } from "react-device-detect"
const Item = ({ itemName, img, num, inRaid }) => {
    const textColor = inRaid === "inRaid" ? "text-warning" : "text-success"
    return (
        <>
            {isMobile ?
                (
                    <div className='border border-light text-white w-25 mb-1 mt-1'>
                        <div className='text-center'>
                            <p className='border-bottom m-0 p-1' style={{ fontSize: "3vw" }}>{itemName}</p>
                            <div className='d-flex align-items-center justify-content-center m-2'><img src={`${process.env.PUBLIC_URL + img}`} alt={itemName} className={"mw-100"} style={{ "objectFit": "contain", height: 68 + "px" }} /></div>
                            <div className='border-top' style={{ fontSize: "3vw" }}><p className='float-start m-2'>{"x" + num}</p><p className={'float-end m-2 ' + textColor}>{inRaid}</p></div>
                        </div>
                    </div>
                ) :
                (
                    <div className='border border-light text-white m-1' style={{ width: 12 + "%" }}>
                        <div className='text-center'>
                            <p className='border-bottom m-0 p-1'>{itemName}</p>
                            <div className='d-flex align-items-center justify-content-center m-2'><img src={`${process.env.PUBLIC_URL + img}`} alt={itemName} className={"mw-100"} style={{ "objectFit": "contain", height: 70 + "px" }} /></div>
                            <div className='border-top'>
                                <p className='float-start m-2'>{num}</p><p className={'float-end m-2 ' + textColor}>{inRaid}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}
export default Item