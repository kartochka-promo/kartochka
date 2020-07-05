import React from 'react';
import './StaffCard.scss'
import {useHistory} from "react-router-dom";

function StaffCard(props) {
    let reactHistory = useHistory();
    return (
        <div className={'staff-card'} onClick={() => {
            reactHistory.push(`/staff/${props.id}`)
        }}>
            <img className={'staff-card_img'} src={props.image}/>
            <label className={'staff-card_label'}>{props.name}</label>
            <span className={'staff-card_span'}>{props.position}</span>
        </div>
    );
}


export default StaffCard;
