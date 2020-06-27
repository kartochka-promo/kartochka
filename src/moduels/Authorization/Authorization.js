import React, {useState} from 'react';
import "./Authorization.scss"
import AuthForm from "./AuthForm/AuthForm";

function Authorization() {
    const [type, setType] = useState('reg');
    return (
        <div className={"authorization"}>
            <div className={"authorization__title"}>
                <h1>{(type === 'reg')? 'Регистрация': 'Авторизация'}</h1>
            </div>
           <AuthForm className={"authorization__form"} type = {type} setType = {() => setType(type !== "reg" ? "reg": "login")}/>
        </div>
    );
}


export default Authorization;
