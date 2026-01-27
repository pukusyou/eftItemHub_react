import React, { useState } from 'react';
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
    const [hoveredId, setHoveredId] = useState(null);

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
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.5rem',
            padding: '1rem 0'
        }}>
            {missions.map((mission) => {
                const isChecked = selected !== undefined ? selected.includes(mission.label) : false;
                const isHovered = hoveredId === mission.value;

                return (
                    <label
                        key={mission.value}
                        htmlFor={`checkbox-${mission.value}`}
                        onClick={handleClick}
                        onMouseEnter={() => setHoveredId(mission.value)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            background: isChecked
                                ? 'rgba(34, 197, 94, 0.1)'
                                : isHovered
                                    ? 'rgba(255, 255, 255, 0.03)'
                                    : 'transparent',
                            border: isChecked
                                ? '1px solid rgba(34, 197, 94, 0.3)'
                                : '1px solid var(--color-border, rgba(255, 255, 255, 0.08))',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
                        }}
                    >
                        {/* Custom Checkbox */}
                        <div style={{
                            position: 'relative',
                            width: '20px',
                            height: '20px',
                            flexShrink: 0
                        }}>
                            <input
                                type="checkbox"
                                id={`checkbox-${mission.value}`}
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(mission)}
                                style={{
                                    position: 'absolute',
                                    opacity: 0,
                                    width: '100%',
                                    height: '100%',
                                    cursor: 'pointer'
                                }}
                            />
                            <div style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '4px',
                                border: isChecked
                                    ? '2px solid #22c55e'
                                    : '2px solid rgba(255, 255, 255, 0.2)',
                                background: isChecked ? '#22c55e' : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}>
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
                        <span style={{
                            color: isChecked
                                ? '#22c55e'
                                : 'var(--color-text-secondary, #94a3b8)',
                            fontSize: '0.9rem',
                            fontWeight: isChecked ? 600 : 400,
                            transition: 'color 0.2s ease',
                            lineHeight: 1.4
                        }}>
                            {mission.label}
                        </span>
                    </label>
                );
            })}
        </div>
    );
}

export default Checkbox;
