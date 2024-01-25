import React from 'react';
import data from '../json/hideout.json'
import HideoutLevel from './HideoutLevel';
import jp from '../json/hideoutJP.json';

const iconPath = {"Weapon Stand":"../img/icon/Weapon_Rack_Portrait.webp","Gym":"../img/icon/Gym_Portrait.webp","Defective wall":"../img/icon/Defective_Wall_Portrait.webp","Air Filtering Unit":"../img/icon/Air_Filtering_Unit_Portrait.webp","Workbench": "../img/icon/Workbench_Portrait.webp","Bitcoin Farm": "../img/icon/Bitcoin_Farm_Portrait.webp", "Booze Generator": "../img/icon/Booze_Generator_Portrait.webp", "Generator": "../img/icon/Generator_Portrait.webp", "Heating": "../img/icon/Heating_Portrait.webp", "Illumination": "../img/icon/Illumination_Portrait.webp", "Intelligence Center": "../img/icon/Intelligence_Center_Portrait.webp", "Lavatory": "../img/icon/Lavatory_Portrait.webp", "Library": "../img/icon/Library_Portrait.webp", "Medstation": "../img/icon/Medstation_Portrait.webp", "Nutrition Unit": "../img/icon/Nutrition_Unit_Portrait.webp", "Rest Space": "../img/icon/Rest_Space_Portrait.webp", "Scav case": "../img/icon/Scav_case_Portrait.webp", "Security": "../img/icon/Security_Portrait.webp", "Shooting range": "../img/icon/Shooting_Range_Portrait.webp", "Solar power": "../img/icon/Solar_power_Portrait.webp", "Stash": "../img/icon/Stash_Portrait.webp", "Vents": "../img/icon/Vents_Portrait.webp", "Water collector": "../img/icon/Water_Collector_Portrait.webp"}

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
function getHideoutsLL(lang) {
    var tagList = []
    const hideoutList = getHideouts()
    hideoutList.forEach(hideout => {
        // console.log(Object.keys(data[hideout]))
        const lastKey = Object.keys(data[hideout])[Object.keys(data[hideout]).length - 1];
        const lastNumber = parseInt(lastKey.match(/\d+$/)[0]);
        // console.log(hideout, lastNumber);
        // langがenなら英語、jpなら日本語
        tagList.push(<div className='w-50 p-2 mb-2' key={hideout}><h4 className='text-white pb-1 m-0'><img src={iconPath[hideout]} alt={hideout} />{lang === 'en' ? hideout : jp[hideout]}</h4><HideoutLevel max={lastNumber} hideoutName={hideout} /></div>)
        // tagList.push(<div className='w-50 p-2 mb-2' key={hideout}><h4 className='text-white pb-1 m-0'>{jp[hideout]}</h4><HideoutLevel max={lastNumber} hideoutName={hideout} /></div>)
    });
    return tagList
}

const HideoutSelect = ({lang}) => {
    return (
        <div className='d-flex flex-wrap'>
            {getHideoutsLL(lang)}
        </div>

    )
}
export default HideoutSelect