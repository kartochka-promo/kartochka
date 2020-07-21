import React, {useState} from 'react';
import InputField from "../../InputField/InputField";
import {globalConsts} from "../../../globalConsts";

function AddStaffWindow(props) {
    const [position, setPosition] = useState();
    const [validPosition, setValidPosition] = useState();

    return (
        <div>
            <InputField
                text={"Должность"}
                value={position}
                patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                type={"text"}
                onValidate={(val) => setValidPosition(val)}
                onChange={(val) => setPosition(val)}
                regexp={RegExp(globalConsts.validator.nameRegexp)}
            />
            <button onClick={() => {
                if (validPosition) {
                    alert(`добавляем в кафе ${props.cafeId}`)
                } else {
                    alert(`Чет не то ${props.cafeId}`)
                }
            }}
                    className={`action-button submit-button-${validPosition ? 'valid' : 'invalid'}`}>
                добавить сотрудника
            </button>
        </div>
    );
}


export default AddStaffWindow;
