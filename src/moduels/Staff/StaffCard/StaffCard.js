import React from 'react';
import './StaffCard.scss'
import {useHistory} from "react-router-dom";
import {customHistory} from "../../../index";
function StaffCard(props) {
    let reactHistory = useHistory();
    console.log(`staff card hidden ${props.hidden}`)
    return (
        <div className={`staff-card ${props.hidden !== undefined ?(props.hidden?'hidden':'selected'):''}`} onClick={() => {
            window.scrollTo({top: 0});
            reactHistory.push(`/staff/${props.id}`);
            // props.setSelected(Number(props.id));
            // customHistory.push(`/staff/${props.id}`);
        }}>
            <img className={'staff-card_img'} src={props.image}/>
            <label className={'staff-card_label'}>{props.name}</label>
            <span className={'staff-card_span'}>{props.position}</span>
        </div>
    );
}

export default StaffCard;
