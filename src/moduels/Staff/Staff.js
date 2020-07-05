import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CafeField from "./CafeField/CafeField";
import StaffPage from "./StaffPage/StaffPage";
import {data} from "./TestData";

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

    return (
        <div className={'staff'}>
            {id ? <StaffPage staff={getStaffById(id)}/> :
                data.map((el) =>
                    <CafeField cafeName={el.cafeName} cafeId={el.cafeId} staffList={el.staffList}/>)
            }
        </div>
    );
}

export default Staff;
