import React from 'react';
import Select from 'react-select'
const AmmoSelecter = ({ options, setSelectedValue, value, isSearchable = false }) => {
    // const [selectedValue, setSelectedValue] = useState(options[0]);

    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption);
    };

    return (
        <Select
            defaultValue={value}
            className='w-100 pb-1'
            options={options}
            onChange={handleChange}
            isSearchable={isSearchable}
        />
    )
}
export default AmmoSelecter;
