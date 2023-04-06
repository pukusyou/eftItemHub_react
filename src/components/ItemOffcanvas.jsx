import React from 'react';
import { Offcanvas } from 'react-bootstrap';
const ItemOffCanvas = ({ show, onHide, title, num, tasks, img, inRaid }) => {
    const inRaidText = inRaid === "inRaid" ? "text-danger" : "text-success"
    const taskTags = tasks.map((task) => {
        var itemNum = task["num"] !== -1 ? "x" + task["num"] : "タスクで使用"
        return (
            <li key={task["name"]}><a href={task["url"]} target="_blank" rel="noreferrer">{task["name"]}</a>
                <p>{itemNum}</p>
            </li>
        )
    });
    return (
        <>
            <Offcanvas show={show} onHide={onHide} placement="end">
                <Offcanvas.Header closeButton className=''>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                    <Offcanvas.Title className={inRaidText}>{inRaid}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-secondary'>
                    <div className="card">
                        <img src={img} alt={title} className="card-img-top w-100" />
                        <div className="card-body">
                            <h5 className="card-title">タスク</h5>
                            <ul className="card-title">{taskTags}</ul>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ItemOffCanvas