import React, {useEffect, useState} from 'react';
import "./Authorization.scss"
import AuthForm from "./AuthForm/AuthForm";
import {history} from "../../index";
import {Link} from "react-router-dom";

function Authorization(props) {
    const [type, setType] = useState(props.type);
    return (
        <div className={"authorization"}>
            <Link to={{ pathname: '/landing' }}>Лендос(Тест)</Link>
                <div className={"authorization__title"}>
                <h1>{(type === 'reg')? 'Регистрация': 'Авторизация'}</h1>
            </div>
           <AuthForm
               className={"authorization__form"}
               type = {type}
               setType = {
                   () => {
                       if(type === 'reg'){
                           history.push('/login');
                           setType('login')
                       } else if(type === 'login'){
                           history.push('/reg');
                           setType('reg')
                       }
                }
           }/>
        </div>
    );
}


export default Authorization;
