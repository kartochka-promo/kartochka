import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CafeField from "./CafeField/CafeField";
import './Staff.scss'
import {data} from "./TestData";
import {customHistory} from "../../index";
import backArrow from '../../img/back.svg'
import {useHistory} from "react-router-dom";
import Actions from "./Actions/Actions";

const getStaffById = (id) => {
    for (let [, cafe] of Object.entries(data)) {
        for (let staff of cafe.staffList) {
            if (Number(staff.id) === Number(id)) {
                return staff
            }
        }
    }
}

function Staff(props) {
    const {id} = useParams();
    const [selected, setSelected] = useState(id);
    let reactHistory = useHistory();
    console.log(`staff ${id}`)
    return (

        <div className={'staff'}>
            <div className={`staff__button ${selected >= 0 ? '' : 'hidden'}`}  onClick={() => {
                reactHistory.push('/staff');
                // setSelected(undefined);
                // customHistory.push('/staff');
            }}>
            <img className={`staff__button_img`} src={backArrow}/>
                </div>
            {data.map((el) =>
                <CafeField setSelected={setSelected} cafeName={el.cafeName} cafeId={el.cafeId} staffList={el.staffList}
                           selected={selected}/>
            )}

            {selected >= 0? <Actions/> : null}
        </div>
    );
}

export default Staff;
