import React from 'react';
import ReactDOM from 'react'
import './CafeField.scss'
import StaffCard from "../StaffCard/StaffCard";
import plus from '../../../img/plus.svg'
import ModalWindow from "../../Modal/Modal";

function CafeField(props) {
    return (
        <div className={'cafe-field'}>
            <h1 className={`cafe-field_h1 ${props.selected>=0 ? 'hidden': ''}`}>{props.cafeName}</h1>
            <div className={`cafe-field__staff-list ${props.selected >= 0 ? '' : 'selected' }`}>
                {props.staffList.map(
                    (el) => <StaffCard
                        setSelected = {props.setSelected}
                        id={el.id}
                        image={el.image}
                        name={el.name}
                        position={el.position}
                        hidden =
                            {props.selected !== undefined ?(Number(props.selected) >=0 ? Number(el.id) !== Number(props.selected): undefined)
                                :undefined}/>)}

                <div className={`cafe-field__staff-list__add-button ${props.selected>=0? 'hidden': ''}`}

                     onClick={()=>{
                         props.toggle();
                         props.setSelectedCafe(props.cafeId)
                     }}>

                    <div className={'cafe-field__staff-list__add-button__circle'}>
                        <img src={plus}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CafeField;
