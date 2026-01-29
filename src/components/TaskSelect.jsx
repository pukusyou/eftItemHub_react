import React, { useState, useEffect, useRef } from 'react';
import data from '../json/task_with_id.json';
import Select from 'react-select'
import Checkbox from './CheckBox';
import { useLocation } from "react-router-dom";

/**
 *引数のディーラーのタスク一覧を返す
 *
 * @param {*} dealerName prapor等
 * @return {*} タスク一覧
 */
function getMissionsByTrader(dealerName) {
    if (!dealerName || !data?.[dealerName]) {
        return []
    }
    var missionList = Object.keys(data[dealerName]);
    var missions = array2dict(missionList)
    return missions
}

/**
 * タスクのidを返す
 * @param {*} dealerName dealer名前
 * @param {*} taskName タスク名
 * @returns タスクのid
 */
function getTaskId(dealerName, taskName) {
    return data[dealerName][taskName]["id"]
}

/**
 * localStorageに保存する
 * @param {*} dealerName dealer名前
 * @param {*} array タスクの名前(label)配列
 */
function saveLocalStorage(dealerName, array) {
    if (!dealerName || !window.localStorage) {
        return;
    }
    if (window.localStorage) {
        var dict = []
        array.forEach(task => {
            dict.push(getTaskId(dealerName, task))
        });
        let json = JSON.stringify(dict, undefined, 1);
        localStorage.setItem(dealerName, json);
    }
}
function getLocalStorage(dealerName) {
    var result = []
    if (!dealerName) {
        return result
    }
    if (window.localStorage && localStorage.getItem(dealerName) !== null) {
        let json = localStorage.getItem(dealerName);
        let array = JSON.parse(json);
        getMissionsByTrader(dealerName).forEach(mission => {
            array.some(saveMission => {
                if (mission.value === saveMission) {
                    result.push(mission)
                    return true
                }
                return false
            });
        });
    }
    return result
}
function getLocalStorageId(dealerName) {
    if (window.localStorage && dealerName && localStorage.getItem(dealerName) !== null) {
        let json = localStorage.getItem(dealerName);
        let array = JSON.parse(json);
        return array
    }
}

function array2dict(array) {
    var missions = []
    array.forEach(element => {
        Object.keys(data).forEach(dealer => {
            Object.keys(data[dealer]).some(task => {
                if (element === task) {
                    missions.push({ value: getTaskId(dealer, task), label: element })
                    return true
                }
                return false
            });
        });

    });
    return missions
}

function dict2array(dict) {
    var missions = []
    if (dict !== undefined) {
        dict.forEach(element => {
            missions.push(element.label)
        });
        return missions
    }
}

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: 'var(--color-bg-tertiary, #1a1a25)',
        borderColor: state.isFocused
            ? 'var(--color-accent-primary, #f59e0b)'
            : 'var(--color-border, rgba(255, 255, 255, 0.08))',
        borderRadius: '8px',
        padding: '0.25rem',
        boxShadow: state.isFocused
            ? '0 0 0 3px rgba(245, 158, 11, 0.15)'
            : 'none',
        '&:hover': {
            borderColor: 'var(--color-border-hover, rgba(255, 255, 255, 0.15))'
        },
        transition: 'all 0.25s ease',
        minHeight: '42px'
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected
            ? 'var(--color-accent-primary, #f59e0b)'
            : state.isFocused
                ? 'rgba(245, 158, 11, 0.1)'
                : 'var(--color-bg-tertiary, #1a1a25)',
        color: state.isSelected ? '#000' : '#f8fafc',
        cursor: 'pointer',
        padding: '0.75rem 1rem',
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 600,
        transition: 'all 0.15s ease'
    }),
    menu: (provided) => ({
        ...provided,
        background: 'var(--color-bg-secondary, #12121a)',
        border: '1px solid var(--color-border, rgba(255, 255, 255, 0.08))',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        zIndex: 9999
    }),
    menuList: (provided) => ({
        ...provided,
        padding: 0,
        maxHeight: '300px'
    }),
    multiValue: (provided) => ({
        ...provided,
        background: 'rgba(245, 158, 11, 0.15)',
        borderRadius: '4px',
        border: '1px solid rgba(245, 158, 11, 0.3)'
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#f8fafc',
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 600,
        padding: '2px 6px'
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#f59e0b',
        ':hover': {
            background: 'rgba(245, 158, 11, 0.3)',
            color: '#fff'
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'var(--color-text-muted, #64748b)',
        fontFamily: "'Rajdhani', sans-serif"
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#f8fafc',
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 600
    }),
    input: (provided) => ({
        ...provided,
        color: '#f8fafc'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'var(--color-text-secondary, #94a3b8)',
        '&:hover': {
            color: 'var(--color-accent-primary, #f59e0b)'
        }
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: 'var(--color-text-secondary, #94a3b8)',
        '&:hover': {
            color: '#ef4444'
        }
    }),
    indicatorSeparator: () => ({
        display: 'none'
    })
};

function makeBin(ids) {
    let bin = "";
    for (let index = 0; index < 300; index++) {
        bin += ids.includes(index) ? "1" : "0";
    }
    return bin
}

//2進数の文字列を64進数に変換する
function bin2hex64(bin) {
    var hex = "";
    var bin2hex = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!-";
    for (var i = 0; i < bin.length; i += 6) {
        var n = parseInt(bin.substr(i, 6), 2);
        hex += bin2hex[n];
    }
    return hex;
}

//64進数の文字列を2進数に変換する
function hex642bin(hex) {
    var bin = "";
    var hex2bin = {
        "0": "000000",
        "1": "000001",
        "2": "000010",
        "3": "000011",
        "4": "000100",
        "5": "000101",
        "6": "000110",
        "7": "000111",
        "8": "001000",
        "9": "001001",
        "A": "001010",
        "B": "001011",
        "C": "001100",
        "D": "001101",
        "E": "001110",
        "F": "001111",
        "G": "010000",
        "H": "010001",
        "I": "010010",
        "J": "010011",
        "K": "010100",
        "L": "010101",
        "M": "010110",
        "N": "010111",
        "O": "011000",
        "P": "011001",
        "Q": "011010",
        "R": "011011",
        "S": "011100",
        "T": "011101",
        "U": "011110",
        "V": "011111",
        "W": "100000",
        "X": "100001",
        "Y": "100010",
        "Z": "100011",
        "a": "100100",
        "b": "100101",
        "c": "100110",
        "d": "100111",
        "e": "101000",
        "f": "101001",
        "g": "101010",
        "h": "101011",
        "i": "101100",
        "j": "101101",
        "k": "101110",
        "l": "101111",
        "m": "110000",
        "n": "110001",
        "o": "110010",
        "p": "110011",
        "q": "110100",
        "r": "110101",
        "s": "110110",
        "t": "110111",
        "u": "111000",
        "v": "111001",
        "w": "111010",
        "x": "111011",
        "y": "111100",
        "z": "111101",
        "!": "111110",
        "-": "111111"
    };
    for (var i = 0; i < hex.length; i++) {
        bin += hex2bin[hex[i]];
    }
    return bin;
}

function getHex2Task(dealer, hex) {
    let hexList = hex.split("")
    let idList = []
    let taskList = []
    for (let index = 0; index < hexList.length; index++) {
        if (hexList[index] === "1") {
            idList.push(index)
        }
    }
    getMissionsByTrader(dealer).forEach(mission => {
        if (idList.includes(mission.value)) {
            taskList.push(mission.label)
        }
    })
    return taskList
}

function getId2Task(idList, dealer) {
    if (!Array.isArray(idList)) {
        return []
    }
    let taskList = []
    getMissionsByTrader(dealer).forEach(mission => {
        if (idList.includes(mission.value)) {
            taskList.push(mission.label)
        }
    })
    return taskList
}

const TaskSelect = ({ dealer, selectedDealer, setCode, idList }) => {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const id = query.get('id')
    const renderFlgRef = useRef(false)
    const dealerName = dealer ?? selectedDealer?.value ?? selectedDealer?.label;
    const missions = getMissionsByTrader(dealerName)
    /*
     * selectedMission: dict
     */
    const [selectedMissions, setSelectedMissions] = useState([]);

    useEffect(() => {
        if (Array.isArray(idList)) {
            Object.keys(data).forEach(dealer => {
                saveLocalStorage(dealer, getId2Task(idList, dealer))
            })
            setSelectedMissions(getLocalStorage(dealerName))
        }
    }, [idList, dealerName]);
    //dealerが変わるたびに呼び出し
    useEffect(() => {
        getLocalStorage(dealerName) !== undefined ? setSelectedMissions(getLocalStorage(dealerName)) : setSelectedMissions([])
    }, [dealerName]);
    useEffect(() => {
        if (renderFlgRef.current) {
            saveLocalStorage(dealerName, dict2array(selectedMissions))
            let ids = []
            Object.keys(data).forEach(dealer => {
                ids = ids.concat(getLocalStorageId(dealer))
            });
            if (setCode) {
                setCode(bin2hex64(makeBin(ids)))
            }
        } else {
            if (id !== null) {
                var hex = hex642bin(id)
                Object.keys(data).forEach(dealer => {
                    saveLocalStorage(dealer, getHex2Task(dealer, hex))
                })
                //urlをクエリパラメータなしに変更[?id=xxxxx] -> []
                window.history.replaceState(null, null, window.location.pathname);
            }
            renderFlgRef.current = true
        }
    }, [selectedMissions, dealerName, id, setCode]);


    const handleSelectChange = (value) => {
        setSelectedMissions(array2dict(value.map(option => option.label)));
    };
    return (
        <>
            <Select
                options={missions}
                isMulti
                styles={customStyles}
                value={selectedMissions}
                onChange={handleSelectChange}
            />
            <Checkbox missions={missions} selected={dict2array(selectedMissions)} setSelectedMissions={setSelectedMissions} dealer={dealer} />
        </>
    );
};

export default TaskSelect;
