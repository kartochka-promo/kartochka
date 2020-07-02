import React, {useEffect, useState} from 'react';
import InputField from "../../InputField/InputField";
import AnimationHandler from "../../../utils/AnimationHandler";
import {Ajax} from "../../../utils/Ajax";
import {globalConsts} from "../../../globalConsts";
function ProfileForm(props) {

    const [isValid, setIsValid] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        email:'',
        password: '',
        rePassword: '',
    });
    const [formValidation, setFormValidation] = useState({
        validName: false,
        validEmail: false,
        validPassword: false,
        validRePassword: false,
    });

    const register = [`${globalConsts.server.PATH_STAFF}/api/v1/staff`, 'POST',
        {
            'name': formValues.name,
            'email': formValues.email,
            'password': formValues.password,
            'isOwner': true,
            'Position': 'Владелец'
        }, (response) => {
            if (response.errors === null){
                console.log('success reg', response);
                alert('success reg');
            } else {
                console.log('error reg', response);
                alert('error reg');
                throw response.errors;
            }
        },true];

    useEffect(() => {
        setIsValid(props.type !== 'login'?
            formValidation.validName && formValidation.validEmail  &&
            formValidation.validPassword && formValidation.validRePassword &&
            formValidation.password === formValidation.rePassword:
            formValidation.validEmail && formValidation.validPassword);

    });

    return (
        <div className={"form"}>
            <InputField
                text={"Имя"}
                patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                hidden={props.type === "login"}
                type= {"text"}
                onValidate={(val) => setFormValidation(
                    formValidation => {return {...formValidation, validName: val}} )}
                onChange={(val) => setFormValues(
                    formValues => { return {...formValues, name: val} })}
                regexp={RegExp(globalConsts.validator.nameRegexp)}
            />

            <InputField
                text={"Почта"}
                patternmessage={"Введите корректную почту"}
                type= {"text"}
                onValidate={(val) => setFormValidation(
                    formValidation => {return {...formValidation, validEmail: val}} )}
                onChange={(val) => setFormValues(
                    formValues => { return {...formValues, email: val} })}
                regexp={RegExp(globalConsts.validator.emailRegexp)}
            />

            <InputField
                text={"Пароль"}
                patternmessage={"Минимум 8 символов.\nПароль должен содержать числа и заглавные буквы"}
                type= {"password"}
                onValidate={(val) => setFormValidation(
                    formValidation => {return {...formValidation, validPassword: val}} )}
                onChange={(val) => setFormValues(
                    formValues => { return {...formValues, password: val} })}
                regexp={RegExp(globalConsts.validator.passwordRegexp)}
            />

            <InputField
                text={"Повторите пароль"}
                patternmessage={"Пароли должны совпадать"}
                hidden={props.type === "login"}
                type= {"password"}
                onValidate={(val) => setFormValidation(
                    formValidation => {return {...formValidation, validRePassword: val}} )}
                onChange={(val) => setFormValues(
                    formValues => { return {...formValues, rePassword: val} })}
                regexp={RegExp(`^(${formValidation.password?
                    formValidation.password:
                    globalConsts.validator.passwordRegexp})`)}
            />

            <button id= {"auth-button"} onClick={ async () => {
                if (isValid) {
                    await Ajax(...register);

                } else{
                    let inputs = document.getElementsByClassName('input-field');
                    const time = 820;
                    let i = 0;
                    for(let [,value] of Object.entries(formValidation)){
                        if(!value){
                            AnimationHandler.addAnimation(
                                inputs.item(i),
                                `shake ${time}ms cubic-bezier(.36,.07,.19,.97) both`,
                                time);
                        }
                        i++;
                    }
                }
            }}
                    className={isValid? 'auth-button-valid': 'auth-button-invalid'}>
                Сохранить
            </button>
        </div>
    );
}


export default ProfileForm;
