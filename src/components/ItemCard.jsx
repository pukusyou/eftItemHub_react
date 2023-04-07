import React, { useState } from 'react';
import { isMobile } from "react-device-detect"
import { Card } from 'react-bootstrap';
import OffCanvas from './ItemOffcanvas';
const Item = ({ itemName, img, tasks, num, inRaid, category }) => {
    const [show, setShow] = useState(false);
    const handleCanvas = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    const textColor = inRaid === "inRaid" ? "text-warning" : "text-success"
    return (
        <>
            <OffCanvas show={show} onHide={handleCanvas} title={itemName} num={num} tasks={tasks} img={img} inRaid={inRaid} />
            {isMobile ?
                (
                    <Card onClick={handleCanvas} className='border border-light w-25 mb-1 mt-1 bg-dark text-white' style={{ cursor: "pointer" }}>
                        <Card.Body className='text-center p-1'>
                            <Card.Title className='border-bottom m-0 p-1' style={{ fontSize: "2vw" }}>{itemName}</Card.Title>
                            <div className='d-flex align-items-center justify-content-center m-2'><img src={`${process.env.PUBLIC_URL + img}`} alt={itemName} className={"mw-100"} style={{ "objectFit": "contain", height: 68 + "px" }} /></div>
                            <div className='border-top'>
                                <Card.Text className='m-2'>
                                    {num}
                                </Card.Text>
                                <Card.Text className={'m-2 ' + textColor}>
                                    {inRaid}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                ) :
                (
                    <Card onClick={handleCanvas} className='border m-1 bg-dark text-white' style={{ width: 11.8 + "%", cursor: "pointer" }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='border-bottom m-0 p-1'>{itemName}</Card.Title>
                            <div className='d-flex align-items-center justify-content-center m-2'><img src={`${process.env.PUBLIC_URL + img}`} alt={itemName} className={"mw-100"} style={{ "objectFit": "contain", height: 70 + "px" }} /></div>
                            <div className='border-top'>
                                <Card.Text className='float-start m-2'>
                                    {num}
                                </Card.Text>
                                <Card.Text className={'float-end m-2 ' + textColor}>
                                    {inRaid}
                                </Card.Text>
                            </div>

                        </Card.Body>
                    </Card>
                )
            }
        </>
    )
}
export default Item

