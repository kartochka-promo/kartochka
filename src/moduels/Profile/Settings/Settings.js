import React, {useEffect, useState} from 'react';
import {Ajax} from "../../../utils/Ajax";
import {globalConsts} from "../../../globalConsts";
import Select from 'react-select';
function Settings(props) {

    let [state, setState] = useState({});

    const handleChange = (selectedOption) => {
        setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (state.selectedOption) {
            console.log(`Selected: ${state.selectedOption.label}`);
        }
    };

    return (
        <Select
            name="form-field-name"
            value={state.selectedOption}
            onChange={handleChange}
            options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
            ]}
        />);

}


export default Settings;
