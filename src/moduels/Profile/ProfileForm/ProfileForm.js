import React, {useEffect, useState} from 'react';
import {globalConsts} from "../../../globalConsts";
import './ProfileForm.scss'
import InputField from "../../InputField/InputField";
import {useStore} from "react-redux";
import {Ajax} from '../../../utils/Ajax'

function ProfileForm(props) {

    const [isValid, setIsValid] = useState(false);
    const [edited,  setEdited] = useState(false);
    const [userImageFile,  setUserImageFile] = useState(undefined)

    const store = useStore();

    function select(state) {
        return {
            name: state.name,
            position: state.position,
            photo: state.photo
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
        if(!previousValue || currentValue.photo !== previousValue.photo){
            setFormValues(photo => {
                return {...photo, photo: currentValue.photo}
            })
        }


    }

    const unsubscribe = store.subscribe(handleChanges)

    const [formValues, setFormValues] = useState({
        name: store.getState().name,
        position: store.getState().position,
        photo: store.getState().photo,
    });
    const [formValidation, setFormValidation] = useState({
        validName: true,
        validPosition: true,
    });

    useEffect(() => {
        setIsValid(formValidation.validName && formValidation.validPosition && edited);

    });

    const imagePicker = (e) => {
        const image = document.getElementById('upload').files[0];
        setUserImageFile(image);
        console.log('set file', userImageFile);
        let reader = new FileReader();
        reader.onload = function (e) {
            setEdited(true);
            document.getElementById('image').src = e.target.result;
        };
        reader.readAsDataURL(image);

        /*
        Здесь должно быть сохранение в стейт
         */
    }

    return (
        <div className={"profile-form"}>
            {console.log('kek',store.getState().photo, formValues.photo)}
            <div className={'pf-container'}>

            <div className={'profile-form__nav-container'}>
                <div className={"profile-form__nav-container__img-picker"}>
                    <img id="image"
                         src={formValues.photo? formValues.photo:
                             'https://cdn0.iconfinder.com/data/icons/faces-general/100/female_old_flat-512.png'}/>
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
                    valid = {true}
                    patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                    type= {"text"}
                    value = {formValues.name}
                    onValidate={(val) => {
                        setEdited(true);
                        setFormValidation(
                        name => {
                            return {...name, validName: val}
                        })}}
                    onChange={(val) => setFormValues(
                        name => {
                            return {...name, name: val}
                        })}
                    regexp={RegExp(globalConsts.validator.nameRegexp)}
                />

                <InputField
                    text={"Должность"}
                    valid = {true}
                    value = {formValues.position}
                    patternmessage={"Минимум 2 символа.\nСпециальные символы запрещены"}
                    type= {"text"}
                    onValidate={(val) => setFormValidation(
                        position => {
                            return {...position, validPosition: val}
                        })}
                    onChange={(val) => {
                        setEdited(true);
                        setFormValues(
                        position => {
                            return {...position, position: val}
                        })}}
                    regexp={RegExp(globalConsts.validator.nameRegexp)}
                />

            </div>
            </div>
            <button
                onClick={()=>{
                    const state = store.getState();
                    console.log('onclick test file', userImageFile)
                    alert('Сохраняю');
                    // const formData = this._makeFormData(photo);
                    Ajax(globalConsts.server.PATH_STAFF+'/api/v1/staff/' + state.id,
                        'PUT',
                        {
                            'name': formValues.name,
                            'email': state.email,
                            'Position': formValues.position
                        },
                        (response) => {
                            if (response.errors === null) {
                                alert('Изменено')
                                setEdited(false)
                            } else {
                                throw response.errors;
                            }
                        }, true,
                        userImageFile? {'photo':userImageFile}:null
                    );


                }}
                className={`action-button submit-button-valid ${isValid ? '' : 'hidden'}`}>Сохранить</button>

        </div>

    );
}


export default ProfileForm;
