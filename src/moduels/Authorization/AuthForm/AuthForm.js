import React, {useEffect, useState} from 'react';
import "./AuthForm.scss"
import InputField from "./InputField/InputField";

function AuthForm(props) {

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(false);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [rePassword, setRePassword] = useState('');
  const [isValidRePassword, setIsValidRePassword] = useState(false);

  let isValid = false;

  useEffect(() => {
      isValid = props.type === 'reg'?
          isValidName && isValidEmail  && isValidPassword && isValidRePassword && password=== rePassword:
          isValidEmail && isValidRePassword;
      let btn = document.getElementById('auth-button');
      btn.className = isValid? 'auth-button-valid': 'auth-button-invalid';

  });

  const removeAnimations = () => {
        let inputs = document.getElementsByClassName('input-field');
        for(let i = 0; i < inputs.length; i++){
            inputs.item(i).style.animation = ''
        }
    }



  return (
    <div className={"auth-form"}>
            <InputField
                text={"Имя"}
                patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                hidden={props.type !== "reg"}
                value = {name.value}
                type= {"text"}
                onValidate={(val) => setIsValidName(val)}
                onChange={(val) => setName(val)}
                regexp={RegExp("^[_A-zА-я0-9]*((-|\\s)*[_A-zА-я0-9]){2,}")}
                   />

            <InputField
                text={"Почта"}
                patternmessage={"Введите корректную почту"}
                value = {email.value}
                type= {"text"}
                onValidate={(val) =>  setIsValidEmail(val)}
                onChange={(val) => setEmail(val)}
                regexp={RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")}
                   />

            <InputField
                text={"Пароль"}
                patternmessage={"Минимум 8 символов.\nПароль должен содержать числа и заглавные буквы"}
                type= {"password"}
                onValidate={(val) => setIsValidPassword(val)}
                onChange={(val) => setPassword(val)}
                regexp={RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")}
            />

            <InputField
                text={"Повторите пароль"}
                patternmessage={"Пароли должны совпадать"}
                hidden={props.type !== "reg"}
                type= {"password"}
                onValidate={(val) => setIsValidRePassword(val)}
                onChange={(val) => setRePassword(val)}
                regexp={RegExp(`^(${password?password:'^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'})`)}
                   />

      <button className={"label"} onClick={props.setType}>
        {props.type !== "reg" ? "Нет аккаунта": "Есть аккаунт"}
      </button>

      <button id= {"auth-button"} onClick={(event) => {

          if (isValid) {
              alert(`Все чикипуки\n ${props.type === 'reg'? name + '\n' + email + '\n' + password : email + '\n' + password }`);
          } else{
              let inputs = document.getElementsByClassName('input-field');
              const time = 820;
              if(!isValidName){
                  inputs.item(0).style.animation = `shake ${time}ms cubic-bezier(.36,.07,.19,.97) both`
              }
              if(!isValidEmail){
                  inputs.item(1).style.animation = `shake ${time}ms  cubic-bezier(.36,.07,.19,.97) both`
              }
              if(!isValidPassword){
                  inputs.item(2).style.animation = `shake ${time}ms  cubic-bezier(.36,.07,.19,.97) both`
              }
              if(!isValidRePassword){
                  inputs.item(3).style.animation = `shake ${time}ms  cubic-bezier(.36,.07,.19,.97) both`
              }
              setTimeout(removeAnimations, time);
              alert(`Просас\n${props.type === 'reg'? name + '\n' + email + '\n' + password : email + '\n' + password }`);
          }
        }}
        className={'auth-button-invalid'}>
        {props.type !== "reg" ? "Войти": "Регистрация"}
      </button>
    </div>
  );
}


export default AuthForm;
