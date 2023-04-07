import React from 'react';
import Select from 'react-select'
const DealerSelecter = ({ options, setSelectedValue, value }) => {
    // const [selectedValue, setSelectedValue] = useState(options[0]);

    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption.value);
    };

    return (
        <Select
            defaultValue={options[0]}
            className='w-100 pb-1'
            options={options}
            onChange={handleChange}
            isSearchable={false}
        />
    )
}
export default DealerSelecter;
