import React, {useEffect, useState} from 'react';
import AuthForm from "./AuthForm/AuthForm";
import {Link} from "react-router-dom";
import "./Authorization.scss"
import {useParams} from "react-router";

function Authorization(props) {
    const [type, setType] = useState(props.type);
    const {uuid, position} = useParams();
    const redirect = props.redirect? `/${props.redirect}`: '/profile';
    return (
        <div className={"authorization"}>
            <div className={"authorization__title"}>
                <h1>{(type === 'login') ? 'Авторизация' : 'Регистрация'}</h1>
            </div>
            <AuthForm
                redirect = {redirect}
                uuid={uuid}
                position={position}
                className={"authorization__form"}
                type={type}
                setType={() => {
                    (type === 'reg') ? setType('login') : setType('reg')
                }
                }/>
        </div>
    );
}


export default Authorization;
