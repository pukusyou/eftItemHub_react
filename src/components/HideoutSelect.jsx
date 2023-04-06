import React from 'react';
import data from '../json/hideout.json'
import HideoutLevel from './HideoutLevel';
/**
 *引数のディーラーのタスク一覧を返す
 *
 * @param {*} dealerName prapor等
 * @return {*} タスク一覧
 */
function getHideouts() {
    var hideoutList = Object.keys(data);
    return hideoutList
}
function getHideoutsLL() {
    var tagList = []
    const hideoutList = getHideouts()
    hideoutList.forEach(hideout => {
        tagList.push(<div className='w-50 p-2 mb-2' key={hideout}><h4 className='text-white pb-1 m-0'>{hideout}</h4><HideoutLevel max={Object.keys(data[hideout]).length} hideoutName={hideout} /></div>)
    });
    return tagList
}

const HideoutSelect = () => {
    return (
        <div className='d-flex flex-wrap'>
            {getHideoutsLL()}
        </div>

    )
}
export default HideoutSelect