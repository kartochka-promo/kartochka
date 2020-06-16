import React from 'react';
import "./Authorization.scss"
import "../Form/Form"
import Form from "../Form/Form";

function Authorization(props) {
    const title = (props.type === 'reg')? 'Регистрация': 'Авторизация';
    return (
        <div className={"authorization"}>
            <div className={"authorization__title"}>
                <h1>{title}</h1>
            </div>
           <Form className={"authorization__form"} type = {props.type}/>
        </div>
    );
}

export default Authorization;
