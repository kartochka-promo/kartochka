import React from 'react';
import './CafeField.scss'
import StaffCard from "../StaffCard/StaffCard";
import plus from '../../../img/plus.svg'

function CafeField(props) {
    return (
        <div className={'cafe-field'}>
            <h1>{props.cafeName}</h1>
            <div className={'cafe-field__staff-list'}>
                {props.staffList.map(
                    (el) => <StaffCard
                        setType={props.setType}
                        id={el.id}
                        image={el.image}
                        name={el.name}
                        position={el.position}/>)}
                <div className={'cafe-field__staff-list__add-button'} onClick={
                    () => alert(`Добавляем в кафе ${props.cafeId}`)}>
                    <div className={'cafe-field__staff-list__add-button__circle'}>
                        <img src={plus}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CafeField;
