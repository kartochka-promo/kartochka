import React, {useEffect, useState} from 'react';
import './Profile.scss'
import PasswordForm from "./PasswordForm/PasswordForm";
import Settings from "./Settings/Settings";
import Input from "../Input";
import {globalConsts} from "../../globalConsts";


function Profile(props) {
    const [type, setType] = useState('password');

    const [name, setName] = useState({value: 'Имя Фамилия', valid: true});
    const [position, setPosition] = useState({value: 'Должность', valid: true});

    const imagePicker = (e) => {
        let image = document.getElementById('upload').files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('image').src = e.target.result;
        };
        reader.readAsDataURL(image);

        /*
        Здесь должно быть сохранение в стейт
         */
    }
    return (
        <div className={"profile"}>
            <div className={'profile__nav-container'}>
                <div className={"profile__nav-container__img-picker"}>
                    <img id="image"
                         src={'https://cdn0.iconfinder.com/data/icons/faces-general/100/female_old_flat-512.png'}/>
                    <input
                        id="upload"
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg, image/png"
                        onChange={imagePicker}/>
                </div>
                <div className={'profile__nav-container__user-info'}>
                    <Input type={'text'}
                           value={name.value}
                           onInput = {()=>{alert('onInput')}}
                           onValidate={(val) => setName(
                               name => {
                                   return {...name, valid: val}
                               })}
                           onChange={(val) => setName(
                               name => {
                                   return {...name, value: val}
                               })}
                           regexp={RegExp(globalConsts.validator.nameRegexp)}
                           className={`profile__nav-container__user-info_input ${name.valid ? '' : ' invalid'}`}
                    />
                    <Input type={'text'}
                           value={position.value}
                           onValidate={(val) => setPosition(
                               position => {
                                   return {...position, valid: val}
                               })}
                           onChange={(val) => setPosition(
                               position => {
                                   return {...position, value: val}
                               })}
                           regexp={RegExp(globalConsts.validator.nameRegexp)}
                           className={`profile__nav-container__user-info_input ${position.valid ? '' : ' invalid'}`}
                    />

                </div>
                <div className={'profile__nav-container__items'}>
                    <div className={`profile__nav-container__items__item${type === 'password' ? ' active' : ''}`}
                         onClick={() => {
                             setType('password')
                         }}>
                        <span>Пароль</span>
                    </div>
                    <div className={`profile__nav-container__items__item${type === 'settings' ? ' active' : ''}`}
                         onClick={() => {
                             setType('settings')
                         }}>
                        <span>Настройки</span>
                    </div>
                </div>

            </div>
            <div className={'profile__container'}>
                {type === 'password' ? <PasswordForm className={"profile__container__form"} type={type}/> : null}
                {type === 'settings' ? <Settings/> : null}
            </div>

        </div>
    );
}


export default Profile;
