import React from 'react';
import data from '../json/task_with_id.json';

function array2dict(array) {
    var missions = [];
    array.forEach(element => {
        Object.keys(data).forEach(dealer => {
            Object.keys(data[dealer]).some(task => {
                if (element === task) {
                    missions.push({ value: getTaskId(dealer, task), label: element });
                    return true;
                }
                return false;
            });
        });
    });
    return missions;
}

function getTaskId(dealerName, taskName) {
    return data[dealerName][taskName]["id"];
}

function getTaskUrl(dealerName, taskName) {
    return data[dealerName][taskName]["wiki_url"];
}

function Checkbox({ missions, selected, setSelectedMissions, dealer }) {
    const handleClick = (e) => {
        if ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) {
            window.open((getTaskUrl(dealer, e.target.closest('label').innerText)), '_blank');
            return false;
        }
    };

    const handleCheckboxChange = (mission) => {
        if (selected.includes(mission.label)) {
            setSelectedMissions(array2dict(selected.filter((m) => m !== mission.label)));
        } else {
            setSelectedMissions(array2dict([...selected, mission.label]));
        }
    };

    return (
        <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {missions.map((mission) => {
                const isChecked = selected !== undefined ? selected.includes(mission.label) : false;

                return (
                    <label
                        key={mission.value}
                        htmlFor={`checkbox-${mission.value}`}
                        onClick={handleClick}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-200 hover:translate-x-0.5 ${isChecked
                            ? 'border-green-500/30 bg-green-500/10'
                            : 'border-border bg-transparent hover:border-white/15 hover:bg-white/[0.03]'
                            }`}
                    >
                        {/* Custom Checkbox */}
                        <div className="relative h-5 w-5 flex-shrink-0">
                            <input
                                type="checkbox"
                                id={`checkbox-${mission.value}`}
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(mission)}
                                className="absolute h-full w-full cursor-pointer opacity-0"
                            />
                            <div className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200 ${isChecked
                                ? 'border-green-500 bg-green-500'
                                : 'border-white/20 bg-transparent'
                                }`}>
                                {isChecked && (
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 6L5 9L10 3"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>

                        {/* Label */}
                        <span className={`text-sm leading-snug transition-colors duration-200 ${isChecked
                            ? 'font-semibold text-green-500'
                            : 'font-normal text-text-secondary'
                            }`}>
                            {mission.label}
                        </span>
                    </label>
                );
            })}
        </div>
    );
}

export default Checkbox;
