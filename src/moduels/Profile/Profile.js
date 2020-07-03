import React, {useEffect, useState} from 'react';

import './Profile.scss'
import {Link} from "react-router-dom";
import ProfileForm from "./ProfileForm/ProfileForm";
import Settings from "./Settings/Settings";
import Header from "../header";

function Profile(props) {
    const [type, setType] = useState('profile');
    return (
        <div>
            <Header/>
        <div className={"profile"}>

            <Link to={{ pathname: '/landing' }}>Лендос(Тест)</Link>

            <div className={'profile__nav-container'}>

                <div className={"profile__nav-container__img-picker"}>
                    <img id="image"
                         src={'https://cdn0.iconfinder.com/data/icons/faces-general/100/female_old_flat-512.png'} ></img>
                    <input
                        id="upload"
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg, image/png"
                        onChange={(e)=>{
                            let image = document.getElementById('upload').files[0];
                            let reader = new FileReader();
                            reader.onload = function (e) {
                                document.getElementById('image').src = e.target.result;
                            };
                            reader.readAsDataURL(image);

                            /*
                            Здесь должно быть сохранение в стейт
                             */
                        }}></input>
                </div>
                <div className={'profile__nav-container__user-info'}>
                    <span className={'profile__nav-container__user-info_name'}> Имя Фамилия</span>
                    <span className={'profile__nav-container__user-info_position'}> Должность</span>
                </div>
                <div className={'profile__nav-container__items'}>
                    <div className={`profile__nav-container__items__item${type==='profile'? ' active':''}`}
                         onClick={()=>{setType('profile')}}>
                        <span>Профиль</span>
                    </div>
                    <div className={`profile__nav-container__items__item${type==='settings'? ' active':''}`}
                    onClick={()=>{setType('settings')}}>
                        <span>Настройки</span>
                    </div>
                </div>

            </div>

            {type === 'profile' ? <ProfileForm className={"profile__form"} type = {type}/> : null}
            {type === 'settings' ? <Settings/> : null}
        </div>
        </div>
    );
}


export default Profile;
