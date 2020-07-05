import React, {useEffect, useState} from 'react';
import Form from "../../Form/Form";
import InputField from "../../InputField/InputField";
import AnimationHandler from "../../../utils/AnimationHandler";
import {Ajax} from "../../../utils/Ajax";
import {globalConsts} from "../../../globalConsts";

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
        setIsValid(props.type !== 'login'?
            formValidation.validName && formValidation.validEmail  &&
            formValidation.validPassword && formValidation.validRePassword &&
            formValidation.password === formValidation.rePassword:
            formValidation.validEmail && formValidation.validPassword);

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

  const registerStaff = [`${globalConsts.server.PATH_STAFF}/api/v1/add_staff?uuid=${props.uuid}&position=${props.position}`,
      'POST',
      {
          'name': formValues.name,
          'email': formValues.email,
          'password': formValues.password,
      }, (response) => {
          if (response.errors === null){
              console.log('success reg staff', response);
              alert('success reg staff');
          } else {
              console.log('error reg staff', response);
              alert('error reg staff');
              throw response.errors;
          }
      },true
  ];

  const login = [`${globalConsts.server.PATH_STAFF}/api/v1/staff/login`, 'POST',
      {
          'email': formValues.email,
          'password': formValues.password
      }, (response) => {
          if (response.errors === null){
              console.log('success login', response);
              alert('success login')
          } else {
              console.log('error login', response);
              alert('error login');
              throw response.errors;
          }
      },false];




  return (
    <Form>
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
        {props.type !== 'staff-reg' ?
            <button className={"label"} onClick={props.setType}>
                {props.type === "reg" ? "Есть аккаунт" : "Нет аккаунта"}
            </button> :
            null
        }

      <button onClick={ async () => {
          if (isValid) {
              if(props.type === 'reg'){
                  await Ajax(...register);
              } else if(props.type === 'login'){
                  await Ajax(...login);
              } else if(props.type === 'staff-reg'){
                  await Ajax(...registerStaff);
              }
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
        className={isValid? 'submit-button-valid': 'submit-button-invalid'}>
        {props.type === "login" ? "Войти": "Регистрация"}
      </button>
    </Form>
  );
}
export default AuthForm;
