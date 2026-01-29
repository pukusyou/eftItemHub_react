import React from 'react';
import data from '../json/hideout.json'
import HideoutLevel from './HideoutLevel';
import jp from '../json/hideoutJP.json';

const iconPath = {
    "Weapon Stand": "/img/icon/Weapon_Rack_Portrait.webp", "Gym": "/img/icon/Gym_Portrait.webp",
    "Defective wall": "/img/icon/Defective_Wall_Portrait.webp", "Air Filtering Unit": "/img/icon/Air_Filtering_Unit_Portrait.webp",
    "Workbench": "/img/icon/Workbench_Portrait.webp", "Bitcoin Farm": "/img/icon/Bitcoin_Farm_Portrait.webp", "Booze Generator": "/img/icon/Booze_Generator_Portrait.webp",
    "Generator": "/img/icon/Generator_Portrait.webp", "Heating": "/img/icon/Heating_Portrait.webp", "Illumination": "/img/icon/Illumination_Portrait.webp",
    "Intelligence Center": "/img/icon/Intelligence_Center_Portrait.webp", "Lavatory": "/img/icon/Lavatory_Portrait.webp",
    "Library": "/img/icon/Library_Portrait.webp", "Medstation": "/img/icon/Medstation_Portrait.webp",
    "Nutrition Unit": "/img/icon/Nutrition_Unit_Portrait.webp", "Rest Space": "/img/icon/Rest_Space_Portrait.webp",
    "Scav case": "/img/icon/Scav_case_Portrait.webp", "Security": "/img/icon/Security_Portrait.webp",
    "Shooting range": "/img/icon/Shooting_Range_Portrait.webp", "Solar power": "/img/icon/Solar_power_Portrait.webp",
    "Stash": "/img/icon/Stash_Portrait.webp", "Vents": "/img/icon/Vents_Portrait.webp", "Water collector": "/img/icon/Water_Collector_Portrait.webp",
    "Cultist Circle": "/img/icon/Cultist_Circle_Portrait.webp", "Gear Rack": "/img/icon/Gear_Rack_Portrait.webp", "Hall of Fame": "/img/icon/Hall_of_Fame_Portrait.webp"
}

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
        tagList.push(
            <div
                key={hideout}
                className="w-full p-2"
            >
                <div className="flex flex-col gap-2 rounded-lg border border-white/5 bg-bg-secondary p-3 transition-colors hover:border-white/10">
                    <h4 className="flex items-center gap-3 font-heading text-base font-bold uppercase tracking-wider text-slate-100">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black/30 p-1">
                            <img
                                src={iconPath[hideout]}
                                alt={hideout}
                                className="h-full w-full object-contain opacity-90"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                        {lang === 'en' ? hideout : jp[hideout]}
                    </h4>
                    <HideoutLevel max={lastNumber} hideoutName={hideout} />
                </div>
            </div>
        )
        // tagList.push(<div className='w-50 p-2 mb-2' key={hideout}><h4 className='text-white pb-1 m-0'>{jp[hideout]}</h4><HideoutLevel max={lastNumber} hideoutName={hideout} /></div>)
    });
    return tagList
}

const HideoutSelect = ({ lang }) => {
    return (
        <div className="mx-auto max-w-6xl pb-8">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {getHideoutsLL(lang)}
            </div>
        </div>
    )
}
export default HideoutSelect