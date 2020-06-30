import React, {useEffect, useState} from 'react';
import "./AuthForm.scss"
import InputField from "./InputField/InputField";
import AnimationHandler from "../../../utils/AnimationHandler";
function AuthForm(props) {


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

  useEffect(() => {
      setIsValid(props.type === 'reg'?
          formValidation.validName && formValidation.validEmail  &&
          formValidation.validPassword && formValidation.validRePassword &&
          formValidation.password === formValidation.rePassword:
          formValidation.validEmail && formValidation.validPassword);

  });

  return (
    <div className={"auth-form"}>
            <InputField
                text={"Имя"}
                patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                hidden={props.type !== "reg"}
                type= {"text"}
                onValidate={(val) => setFormValidation(formValidation => {return {...formValidation, validName: val}} )}
                onChange={(val) => setFormValues(formValues => { return {...formValues, name: val} })}
                regexp={RegExp("^[_A-zА-я0-9]*((-|\\s)*[_A-zА-я0-9]){2,}")}
                   />

            <InputField
                text={"Почта"}
                patternmessage={"Введите корректную почту"}
                type= {"text"}
                onValidate={(val) => setFormValidation(formValidation => {return {...formValidation, validEmail: val}} )}
                onChange={(val) => setFormValues(formValues => { return {...formValues, email: val} })}
                regexp={RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")}
                   />

            <InputField
                text={"Пароль"}
                patternmessage={"Минимум 8 символов.\nПароль должен содержать числа и заглавные буквы"}
                type= {"password"}
                onValidate={(val) => setFormValidation(formValidation => {return {...formValidation, validPassword: val}} )}
                onChange={(val) => setFormValues(formValues => { return {...formValues, password: val} })}
                regexp={RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")}
            />

            <InputField
                text={"Повторите пароль"}
                patternmessage={"Пароли должны совпадать"}
                hidden={props.type !== "reg"}
                type= {"password"}
                onValidate={(val) => setFormValidation(formValidation => {return {...formValidation, validRePassword: val}} )}
                onChange={(val) => setFormValues(formValues => { return {...formValues, rePassword: val} })}
                regexp={RegExp(`^(${formValidation.password?formValidation.password:'^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'})`)}
                   />

      <button className={"label"} onClick={props.setType}>
        {props.type !== "reg" ? "Нет аккаунта": "Есть аккаунт"}
      </button>

      <button id= {"auth-button"} onClick={() => {
          if (isValid) {
              alert(`Все чикипуки\n 
              ${props.type === 'reg'? formValues.name + '\n' + formValues.email + '\n' + formValues.password :
                  formValues.email + '\n' + formValues.password }`);
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

              alert(`Просас\n
              ${props.type === 'reg'? formValues.name + '\n' + formValues.email + '\n' + formValues.password :
                  formValues.email + '\n' + formValues.password }`);
          }
        }}
        className={isValid? 'auth-button-valid': 'auth-button-invalid'}>
        {props.type !== "reg" ? "Войти": "Регистрация"}
      </button>
    </div>
  );
}


export default AuthForm;
