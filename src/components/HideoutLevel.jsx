import React, { useState, useRef } from 'react';
function saveLocalStorage(hideoutName, data) {
    if (window.localStorage) {
        localStorage.setItem(hideoutName, data);
    }
}
function getLocalStorage(hideoutName) {
    if (window.localStorage) {
        return localStorage.getItem(hideoutName) !== null ? localStorage.getItem(hideoutName) : 0;
    }
}

const HideoutLevel = ({ hideoutName, max }) => {
    const [selectedValue, setSelectedValue] = useState(getLocalStorage(hideoutName));
    const selectRef = useRef(null);
    const handleSelectChange = () => {
        setSelectedValue(selectRef.current.value);
        saveLocalStorage(hideoutName, selectRef.current.value)
    };
    return (
        <>
            <select
                ref={selectRef}
                className="form-select w-75"
                value={selectedValue}
                onChange={handleSelectChange}
            >
                <option value={0}>未建設</option>
                <option value={1}>Lv.1</option>
                {max >= 2 ? <option value={2}>Lv.2</option> : null}
                {max >= 3 ? <option value={3}>Lv.3</option> : null}
                {max >= 4 ? <option value={4}>Lv.4</option> : null}
            </select>
        </>

    )
}
export default HideoutLevel