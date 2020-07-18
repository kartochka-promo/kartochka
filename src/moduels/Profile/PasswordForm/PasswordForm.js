import React, {useEffect, useState} from 'react';
import InputField from "../../InputField/InputField";
import AnimationHandler from "../../../utils/AnimationHandler";
import {Ajax} from "../../../utils/Ajax";
import {globalConsts} from "../../../globalConsts";
function PasswordForm(props) {

    const [isValid, setIsValid] = useState(false);

    const [formValues, setFormValues] = useState({
        oldPassword: '',
        password: '',
        rePassword: '',
    });
    const [formValidation, setFormValidation] = useState({
        validOldPassword: true,
        validPassword: false,
        validRePassword: false,
    });

    useEffect(() => {
        setIsValid(formValidation.validPassword && formValidation.validRePassword &&
        formValues.password === formValues.rePassword );

    });

    return (
        <div id = {'password-form'}className={"form"}>
            <InputField
                text={"Старый пароль"}
                onChange={(val) => setFormValues(
                    formValues => { return {...formValues, oldPassword: val} })}
                onValidate={(val) => {}}
                regexp={RegExp(globalConsts.validator.passwordRegexp)}
            />
            <InputField
                text={"Новый пароль"}
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

            <button onClick={ async () => {
                if (isValid) {

                    alert('redact')
                } else{
                    let passwordInputs = document.getElementById('password-form');

                    let inputs = passwordInputs.getElementsByClassName('input-field');
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
                    className={`action-button submit-button-${isValid? 'valid': 'invalid'}`}>
                Сменить пароль
            </button>
        </div>
    );
}


export default PasswordForm;
