import React, {useEffect, useState} from 'react';
import "./Form.scss"
import Validator from "../Validator/Validator";
import {useStore} from "react-redux";
import Input from "../Input";

function Form(props) {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  let isValidValues = {
      name: false,
      email:false,
      password:false,
  };
  let isValid = isValidValues.name && isValidValues.email && isValidValues.password;

  useEffect(() => {
      isValidValues = {
            name: name !== null,
            email: email !== null,
            password: password !== null && password === rePassword
      };
  });


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
            <Input type ={"text"} onValidate={(val) => setName(val)} regexp={RegExp(
                "^[0-9]+$")}/>
            {/*{!isValidValues.name? <span>Пароль должен чето там</span>:null}*/}
        </InputField>

        <InputField text={"Почта"}>
            <Input type ={"email"} onValidate={(val) => setEmail(val)} regexp={RegExp(
                "[^\\>]*")}/>
            {/*{!isValidValues.email? <span>Пароль должен чето там</span>:null}*/}
        </InputField>

        <InputField text={"Пароль"}>
            <Input type ={"password"} onValidate={(val) => setPassword(val)} regexp={RegExp(
                "[^\\>]*")}/>
            {/*{!isValidValues.password? <span>Пароль должен чето там</span>:null}*/}
        </InputField>

        <InputField hidden={props.type !== "reg"} text={"Повторите пароль"}>
            <Input type ={"password"} onValidate={(val) => setRePassword(val)} regexp={RegExp(
                "[^\\>]*")}/>
            {/*{!isValidValues.password? <span>Пароль должен чето там</span>:null}*/}
        </InputField>

      <button className={"label"} onClick={props.setType}>
        {props.type !== "reg" ? "Нет аккаунта": "Есть аккаунт"}
      </button>

      <button onClick={() => {
          if (isValid) {
            alert(`${name}, ${email}, ${password}`)
          } else{
              console.log(isValidValues)
          }
        }}
        className={`auth-button${isValid ? '-active':''} `}>
        {props.type !== "reg" ? "Войти": "Регистрация"}
      </button>
    </div>
  );
}


export default Form;
