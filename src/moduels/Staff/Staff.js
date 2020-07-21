import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CafeField from "./CafeField/CafeField";
import './Staff.scss'
import {data} from "./TestData";
import {customHistory} from "../../index";
import backArrow from '../../img/back.svg'
import {useHistory} from "react-router-dom";
import Actions from "./Actions/Actions";
import {useStore} from "react-redux";
import {Ajax} from '../../utils/Ajax'
import {globalConsts} from "../../globalConsts";
import {getAllStaff} from "../../model/Actions";
import StaffSerializer from "./StaffSerializer";

import useModal from "../Modal/UseModal";
import Modal from "../Modal/Modal";
import AddStaffWindow from "./AddStaffWindow/AddStaffWindow";




function Staff(props) {
    let reactHistory = useHistory();
    const store = useStore();
    const {id} = useParams();

    const [selected, setSelected] = useState(id);
    const [selectedCafe, setSelectedCafe] = useState(undefined)
    const [userId, setUserId] = useState(store.getState().id);
    const [staff, setStaff] = useState(store.getState().staff);

    const {isShowing, toggle, target} = useModal();

    let currentValue = {
        id: userId,
        staff: staff,
    };


    function getStaff() {
        console.log('new userId', userId)
        Ajax(`${globalConsts.server.PATH_STAFF}/api/v1/staff/get_staff_list/${userId}`, 'GET',
            {}, (response) => {
                if (response.errors === null) {
                    console.log('test response', response)
                    store.dispatch(getAllStaff(response))
                } else {
                    console.log('error staff', response);
                    alert('error staff');
                    throw response.errors;
                }
            }, false);
    }
    console.log('test', userId, staff.length)
    if(userId && !staff.length){
        console.log('test get staff')
        getStaff();
    }
    function select(state) {
    return{
        id: state.id,
        staff :state.staff
    }
    }

    function handleChanges() {
        let previousValue = currentValue
        currentValue = select(store.getState())
        if((!previousValue.id || currentValue.id !== previousValue.id ) && Number(currentValue.id) ){
            console.log('set id', currentValue.id)
            setUserId(currentValue.id);
        }
        if(!previousValue.staff || currentValue.staff !== previousValue.staff){
            console.log('set staff', previousValue, currentValue)
            setStaff(currentValue.staff);
        }
    }

    const unsubscribe = store.subscribe(handleChanges)


    return (

        <div className={'staff'}>
            <div className={`staff__button ${selected >= 0 ? '' : 'hidden'}`} onClick={() => {
                window.scrollTo({top: 0});
                reactHistory.push('/staff');
                // setSelected(undefined);
                // customHistory.push('/staff');
            }}>
                <img className={`staff__button_img`} src={backArrow}/>
            </div>
            {staff.map((el) => {
                    return <CafeField setSelected={setSelected} cafeName={el.cafeName} cafeId={el.cafeId} staffList={el.staffList}
                               selected={selected}
                               setSelectedCafe = {setSelectedCafe}
                               toggle={toggle}
                    />
                }
            )}


            {selected >= 0 && StaffSerializer.findStaff(staff, selected)  ?
                <div className={'actions-container'}>
                    <div className={'scroll'}>
                        <div className={"scroll-indicator"}>
                            <div className={"scroll-indicator-inner"}/>
                        </div>
                    </div>
                    <h1>Активность</h1>
                    <Actions/>
                    <button className={'action-button fire-staff'}>Уволить</button>
                </div>
                : null}
            <Modal isShowing={isShowing} hide={toggle}>
                <AddStaffWindow cafeId = {selectedCafe}/>
            </Modal>
        </div>
    );
}

export default Staff;
