import React, {useState} from 'react';
import InputField from "../../InputField/InputField";
import {globalConsts} from "../../../globalConsts";
import {Ajax} from '../../../utils/Ajax'

function AddStaffWindow(props) {
    const [position, setPosition] = useState();
    const [validPosition, setValidPosition] = useState();
    const [showQR, setShowQR] = useState(false);

    return (
        <div>
            {!showQR ?
                <>
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
                             Ajax(
                                 globalConsts.server.PATH_STAFF + `/api/v1/staff/generateQr/${props.cafeId}?position=${position}`,
                                'GET',
                                {},
                                (response) => {
                                    if (response.data != null) {
                                        if (response.errors === null) {
                                            console.log('qr', response.data)
                                            setShowQR(true)
                                        } else {
                                            throw response.errors;
                                        }
                                    }
                                },
                                 false
                            )
                            setShowQR(true)
                        } else {
                            alert(`Чет не то ${props.cafeId}`)
                        }
                    }}
                            className={`action-button submit-button-${validPosition ? 'valid' : 'invalid'}`}>
                        добавить сотрудника
                    </button>
                </>
                : <div>тут будет  qr</div>
            }
        </div>

    );
}


export default AddStaffWindow;
