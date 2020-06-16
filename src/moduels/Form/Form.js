import React, {useState} from 'react';
import "./Form.scss"
import Validator from "../Validator/Validator";
import {useStore} from "react-redux";



export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

export const useSwitcher = initialValue => {
    const [type, setType] = useState(initialValue);
    console.log('value', type)
    return {
        type,
        setType,
        bind: {
            type,
            onClick: event => {
                setType((type==='reg')? 'login': 'reg');
            }
        }
    };
};


function Form(props) {
    const {type: type, bind:bindType} = useSwitcher('reg');
    const { value:name, bind:bindName, reset:resetName } = useInput('');
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    const { value:rePassword, bind:bindRePassword, reset:resetRePassword } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(validate(props.type)) {
            resetName();
            resetEmail();
            resetPassword();
            resetRePassword();
            alert(`Все ок, подтираем инпуты ${name} ${email} ${password} ${rePassword}`);
        }
    };

    const validate = (type)=>{
        switch(type){
            case 'reg' :
                let validate = Validator.validateName(name);
                if(!validate.valid){
                    alert(validate.reason);
                    return false
                }
                validate = Validator.validateEmail(email);
                if(!validate.valid){
                    alert(validate.reason);
                    return false
                }
                validate = Validator.validatePassword(password, rePassword);
                if(!validate.valid){
                    alert(validate.reason);
                    return false
                }
                return true;
            case 'login' :
                validate = Validator.validateEmail(email);
                if(!validate.valid){
                    alert(validate.reason);
                    return false
                }
                validate = Validator.validatePassword(password, rePassword);
                if(!validate.valid){
                    alert(validate.reason);
                    return false
                }
                return true;
            default:
                return false;

        }
    };




    function getInputs(props) {
        switch (props.type) {
            case 'reg':
                return (
                    <form className={"auth-form"} onSubmit={handleSubmit}>
                        <div className={"auth-form__input-field"}>
                            <label>Имя</label>
                            <input type = "text" {...bindName}/>
                        </div>
                        <div className={"auth-form__input-field"}>
                            <label>Почта</label>
                            <input type = "email"  {...bindEmail}/>
                        </div>
                        <div className={"auth-form__input-field"}>
                            <label>Пароль</label>
                            <input type = "password"  {...bindPassword}/>
                        </div>
                        <div className={"auth-form__input-field"}>
                            <label>Повторите пароль</label>
                            <input type = "password"  {...bindRePassword} />
                        </div>
                        <label className={"auth-form_label"} onClick={useSwitcher}>Авторизация</label>
                        <input type = "submit" value={"Готово"}  />
                    </form>
                );

            case 'login':
                return (
                    <form className={"auth-form"} onSubmit={handleSubmit}>
                        <div className={"auth-form__input-field"}>
                            <label>Почта</label>
                            <input type = "email"  {...bindEmail}/>
                        </div>
                        <div className={"auth-form__input-field"}>
                            <label>Пароль</label>
                            <input type = "password"  {...bindPassword}/>
                        </div>
                        <label className={"auth-form_label"} onClick={useSwitcher}>Регистрация</label>
                        <input type = "submit" value={"Готово"}  />
                    </form>
                );
            default:
                return (
                    <form>
                        <input type = "email" placeholder = "Почта" {...bindEmail}/>
                        <input type = "password" placeholder = "Пароль" {...bindPassword}/>
                        <input type = "submit" value={"Готово"} />

                    </form>
                );
        }
    }
    return getInputs(props);
}


export default Form;
