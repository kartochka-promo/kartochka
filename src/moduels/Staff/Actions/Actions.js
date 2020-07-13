import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import './Actions.scss'
import arrowButton from '../../../img/arrow-bottom.svg'
import arrowTop from '../../../img/arrow-top.svg'
import ActionSerializer from "./ActionSerializer";
import StaffCard from "../StaffCard/StaffCard";

import DateCell from './DateCell/DateCell'
import ActionCell from './ActionCell/ActionCell'
function Actions(props) {

    let context = {
        dateStart: '01.05',
        dateEnd: '03.05',
        dateCells: {
            '01.05': [
                {
                    action: 'Начислил 10 бонусов',
                    time: '13:01'
                },
                {
                    action: 'Начислил 11 бонусов',
                    time: '14:02'
                },
                {
                    action: 'Начислил 12 бонусов',
                    time: '15:03'
                }
            ],
            '02.05': [
                {
                    action: 'Начислил 13 бонусов',
                    time: '13:01'
                },
                {
                    action: 'Начислил 14 бонусов',
                    time: '14:02'
                },
                {
                    action: 'Начислил 15 бонусов',
                    time: '15:03'
                }
            ],
            '03.05': [
                {
                    action: 'Начислил 13 бонусов',
                    time: '13:01'
                },
                {
                    action: 'Начислил 14 бонусов',
                    time: '14:02'
                },
                {
                    action: 'Начислил 15 бонусов',
                    time: '15:03'
                }
                ,
                {
                    action: 'Снял 15 бонусов',
                    time: '16:03'
                }
            ],
        }

    }


    const actionsTest = {
        data: [
            {
                json_data: '{\'coffee_cups\': \'5\'}',
                time: '2020-05-11T18:36:44.555781Z',
                clientUuid: '2eb420ca-fdf6-48d8-a186-5e98465f668e',
                staffId: 0,
                cafeId:2,
            },
            {
                json_data: '{\'coffee_cups\': \'5\'}',
                time: '2020-05-12T18:36:44.555781Z',
                clientUuid: '2eb420ca-fdf6-48d8-a186-5e98465f668e',
                staffId: 0,
                cafeId:2,
            },
            {
                json_data: '{\'coffee_cups\': \'5\'}',
                time: '2020-05-13T18:36:44.555781Z',
                clientUuid: '2eb420ca-fdf6-48d8-a186-5e98465f668e',
                staffId: 0,
                cafeId:2,
            },
            {
                json_data: '{\'coffee_cups\': \'5\'}',
                time: '2020-05-14T18:36:44.555781Z',
                clientUuid: '2eb420ca-fdf6-48d8-a186-5e98465f668e',
                staffId: 0,
                cafeId:2,
            },
        ],
        errors: null
    }
    // let context = ActionSerializer.serializeData(actionsTest);
    // console.log('data test',ActionSerializer.serializeData(actionsTest));

    // const [actions, setActions] = useState({
    //     start:'01:05',
    //     end:'30:05',
    //     actions:[
    //         {
    //             date: '01:05',
    //             time: '14:00',
    //             action: 'action',
    //
    //         },
    //         {
    //
    //         },
    //         {
    //
    //         },
    //         {
    //
    //         },
    //
    //     ]
    // });

    const entriesPolyFill = (context) => Object.keys(context).map(key => [key, context[key]]);
    const dayCells = entriesPolyFill(context.dateCells);
    // props.staffList.map(
    //     (el) => <StaffCard

    for(let i = 0; i < dayCells.length;i++){
       // {date:dayCells[i][0], cells: dayCells[i][1]}
    }

    return (
        <div className="staff-actions-container">
            <div className="staff-actions-container__date">
                <div className="staff-actions-container__date__button-prev">
                    <img src={arrowTop}/>
                </div>
                <div className="staff-actions-container__date__start-date-container">
                    <span className="staff-actions-container__date__start-date-container_span">
                        {context.dateStart.split('.')[0]}</span>
                    <span className="staff-actions-container__date__start-date-container_span">
                        {context.dateStart.split('.')[1]}</span>
                </div>
                <div className="staff-actions-container__date__strip"/>
                <div className="staff-actions-container__date__end-date-container">
                    <span className="staff-actions-container__date__end-date-container_span">
                         {context.dateEnd.split('.')[0]}
                    </span>
                    <span className="staff-actions-container__date__end-date-container_span">
                         {context.dateEnd.split('.')[1]}
                    </span>
                </div>
                <div className="staff-actions-container__date__button-next">
                    <img src={arrowButton}/>
                </div>
            </div>

            <div className="staff-actions-container__actions">
                {dayCells.map((dayCell)=>{
                    return (
                        <>
                            <DateCell date = {dayCell[0]}/>
                            {dayCell[1].map((actionCell)=><ActionCell action={actionCell.action} time = {actionCell.time}/>)}
                        </>
                    )
                })}
            </div>

        </div>
    );
}

export default Actions;

