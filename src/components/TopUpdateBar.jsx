import React from 'react';


const TopUpdateBar = ({ title, content, date }) => {

    return (
        <div className='text-white p-2 w-75 m-auto'>
            <dl>
                <dt>{date}</dt>
                <dd>{title}</dd>
                <dd><small>{content}</small></dd>
            </dl>
        </div>
    )
}
export default TopUpdateBar