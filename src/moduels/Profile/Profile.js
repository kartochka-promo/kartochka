import React, {useEffect, useState} from 'react';
import './Profile.scss'
import PasswordForm from "./PasswordForm/PasswordForm";
import Settings from "./Settings/Settings";
import Input from "../Input";
import {globalConsts} from "../../globalConsts";
import ProfileForm from "./ProfileForm/ProfileForm";


function Profile(props) {
    const [type, setType] = useState('password');

    return (
        <div className={"profile"}>
            <div className={'profile__user'}>
                <ProfileForm/>
                <PasswordForm className={"profile__container__form"} type={type}/>
            </div>
            <div className={'profile__settings'}>
                <Settings/>
            </div>
        </div>
    );
}


export default Profile;
