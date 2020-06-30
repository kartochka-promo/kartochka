import React, {useEffect, useState} from 'react';
import "./Form.scss"
// import Validator from "../Validator/Validator";
// import {useStore} from "react-redux";
import Input from "../Input";

function Form(props) {

  const [name, setName] = useState({valid:false, value:null});
  const [email, setEmail] = useState({valid:false, value:null});
  const [password, setPassword] = useState({valid:false, value:null});
  const [rePassword, setRePassword] = useState({valid:false, value:null});

  let isValid = false;
  let isValidName = false;
  let isValidEmail = false;
  let isValidPassword = false;
  let isValidRePassword = false;

  // useEffect(() => {
  //     console.log('use effect form')
  //     isValid = props.type === 'reg'?
  //         name.valid && email.valid  && password.valid && password.valid && password.value === rePassword.value:
  //         email.valid  && password.valid;
  // });


  function InputField(props) {
      const hidden = {
          opacity:  0,
          transition: 'opacity 0.25s'
      };
      const visible = {
          opacity:  1,
          transition: 'opacity 0.25s'
      };

    return(
      <div className={"input-field"} style={props.hidden? hidden : visible} >
        <label>{props.text} </label>
          <div className={"input-field__container"}>
              {props.children}
          </div>
      </div>
    )
  }

  return (
    <div className={"auth-form"}>
        <InputField hidden={props.type !== "reg"} text={"Имя"}>
            <Input type= {"text"} onValidate={(val) => { console.log('setName', val);setName(val)}} regexp={RegExp(
                "^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$")}
                   patternmessage={"Имя должно..."}/>
        </InputField>

        <InputField text={"Почта"}>
            <Input  type= {"text"} onValidate={(val) => { console.log('setEmail', val); setEmail(val)}} regexp={RegExp(
                "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")}
                   patternmessage={"Почта должна..."}/>
        </InputField>

        <InputField text={"Пароль"}>
            <Input type= {"password"} onValidate={(val) => setPassword(val)} regexp={RegExp(
                "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")} patternmessage={"Пароль должен..."}/>
        </InputField>

        <InputField hidden={props.type !== "reg"} text={"Повторите пароль"}>
            <Input
                type= {"password"}
                   onValidate={(val) => setRePassword(val)}
                   regexp={RegExp(`^(${password?password:'^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'})`)}
                   patternmessage={"Пароли должны совпадать"}/>
        </InputField>

      <button className={"label"} onClick={props.setType}>
        {props.type !== "reg" ? "Нет аккаунта": "Есть аккаунт"}
      </button>

      <button onClick={() => {
          isValid = name && email && password && rePassword
          if (name.valid) {
            alert(`${name}, ${email}, ${password}`)
          } else{
              console.log('values', name, email, password, rePassword)
              console.log('isValid',isValid, isValidName, isValidEmail, isValidPassword, isValidRePassword)
          }
        }}
        className={`auth-button${isValid ? '-active':''} `}>
        {props.type !== "reg" ? "Войти": "Регистрация"}
      </button>
    </div>
  );
}


export default Form;
