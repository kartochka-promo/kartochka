import React from 'react';
import './StaffPage.scss'

function StaffPage(props) {
    if (props.staff) {
        return (
            <div className={'staff-card'}>
                Тут будет страница сотрудника с его статой
                <img className={'staff-card_img'} src={props.staff.image}/>
                <label className={'staff-card_label'}>{props.staff.name}</label>
                <span className={'staff-card_span'}>{props.staff.position}</span>
            </div>
        );
    }
    return (
        <div>Нет такого</div>
    );

}

export default StaffPage;
