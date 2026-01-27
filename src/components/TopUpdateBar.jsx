import React from 'react';

const TopUpdateBar = ({ title, content, date }) => {
    return (
        <div className='update-card'>
            <div className="date">{date}</div>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    )
}

export default TopUpdateBar;