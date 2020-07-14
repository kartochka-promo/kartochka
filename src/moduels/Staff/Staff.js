import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CafeField from "./CafeField/CafeField";
import './Staff.scss'
import {data} from "./TestData";
import {customHistory} from "../../index";
import backArrow from '../../img/back.svg'
import {useHistory} from "react-router-dom";
import Actions from "./Actions/Actions";

function Staff(props) {
    const {id} = useParams();
    const [selected, setSelected] = useState(id);
    let reactHistory = useHistory();
    console.log(`staff ${id}`)
    return (

        <div className={'staff'}>
            <div className={`staff__button ${selected >= 0 ? '' : 'hidden'}`}  onClick={() => {
                window.scrollTo({top: 0});
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

            {selected >= 0?
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
        </div>
    );
}

export default Staff;
