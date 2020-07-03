import React, {useEffect, useState} from 'react';
import AuthForm from "./AuthForm/AuthForm";
import {Link} from "react-router-dom";
import "./Authorization.scss"

function Authorization(props) {
    const [type, setType] = useState(props.type);
    return (
        <div className={"authorization"}>
            <div className={"authorization__title"}>
                <h1>{(type === 'login')? 'Авторизация': 'Регистрация'}</h1>
            </div>
           <AuthForm
               uuid = {props.uuid}
               position = {props.position}
               className={"authorization__form"}
               type = {type}
               setType = {() => { (type === 'reg')? setType('login'): setType('reg')}
           }/>
        </div>
    );
}


export default Authorization;
