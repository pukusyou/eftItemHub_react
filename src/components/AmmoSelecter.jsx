import React from 'react';
import Select from 'react-select'
const AmmoSelecter = ({ options, setSelectedValue, value }) => {
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
        />
    )
}
export default AmmoSelecter;
