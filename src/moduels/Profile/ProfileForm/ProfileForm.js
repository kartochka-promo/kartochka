import React, {useEffect, useState} from 'react';
import {globalConsts} from "../../../globalConsts";
import './ProfileForm.scss'
import InputField from "../../InputField/InputField";
import {useStore} from "react-redux";

function ProfileForm(props) {

    const [isValid, setIsValid] = useState(false);

    const store = useStore();

    function select(state) {
        return {
            name: state.name,
            position: state.position
        }
    }

    let currentValue;
    function handleChanges() {
        let previousValue = currentValue
        currentValue = select(store.getState())
            if(!previousValue || currentValue.name !== previousValue.name){
                setFormValues(name => {
                    return {...name, name: currentValue.name}
                })
                setFormValidation(
                    name => {
                        return {...name, validName: true}
                    })

            }
            if(!previousValue || currentValue.position !== previousValue.position){
                setFormValues(position => {
                    return {...position, position: currentValue.position}
                })
                setFormValidation(position => {
                        return {...position, validPosition: true}
                    })
            }


    }

    const unsubscribe = store.subscribe(handleChanges)

    const [formValues, setFormValues] = useState({
        name: store.getState().name,
        position: store.getState().position,
    });
    const [formValidation, setFormValidation] = useState({
        validName: true,
        validPosition: true,
    });

    useEffect(() => {
        setIsValid(formValidation.validPassword && formValidation.validRePassword &&
            formValues.password === formValues.rePassword );

    });

    const imagePicker = (e) => {
        let image = document.getElementById('upload').files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('image').src = e.target.result;
        };
        reader.readAsDataURL(image);

        /*
        Здесь должно быть сохранение в стейт
         */
    }

    return (
        <div className={"profile-form"}>
            <div className={'profile-form__nav-container'}>
                <div className={"profile-form__nav-container__img-picker"}>
                    <img id="image"
                         src={'https://cdn0.iconfinder.com/data/icons/faces-general/100/female_old_flat-512.png'}/>
                    <input
                        id="upload"
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg, image/png"
                        onChange={imagePicker}/>
                </div>
            </div>

            <div className={'profile-form__inputs'}>

                <InputField
                    text={"Имя"}
                    patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                    type= {"text"}
                    value = {formValues.name}
                    onValidate={(val) => setFormValidation(
                        name => {
                            return {...name, validName: val}
                        })}
                    onChange={(val) => setFormValues(
                        name => {
                            return {...name, name: val}
                        })}
                    regexp={RegExp(globalConsts.validator.nameRegexp)}
                />

                <InputField
                    text={"Должность"}
                    value = {formValues.position}
                    patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                    type= {"text"}
                    onValidate={(val) => setFormValidation(
                        position => {
                            return {...position, validPosition: val}
                        })}
                    onChange={(val) => setFormValues(
                        position => {
                            return {...position, position: val}
                        })}
                    regexp={RegExp(globalConsts.validator.nameRegexp)}
                />

            </div>

        </div>

    );
}


export default ProfileForm;
