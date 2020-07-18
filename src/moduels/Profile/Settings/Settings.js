import React, {useEffect, useState} from 'react';
import {Ajax} from "../../../utils/Ajax";
import {globalConsts} from "../../../globalConsts";
import Select from "react-dropdown-select";
import './Settings.scss'

function Settings(props) {

    const languageOptions = [
        {
            language: 'Русский',
            code: 'ru',
            disabled: false,
        },
        {
            language: 'English',
            code: 'en',
            disabled: true,
        },
        {
            language: 'Español',
            code: 'es',
            disabled: true,
        },
    ];
    const themeOptions = [
        {
            theme: 'Светлая',
            code: 'light',
            disabled: false,
        },
        {
            theme: 'Темная',
            code: 'dark',
            disabled: true,
        },
    ];

    return (
        <div className={'settings-card'}>
            <div className={'settings-card__selects'}>
                <div className={'settings-card__selects__localization'}>
                    <span className={'settings-card__selects__localization_span'}>Язык</span>
                    <Select
                        placeholder={'Выбор языка'}
                        labelField={'language'}
                        valueField={'code'}
                        className={'settings__select'}
                        searchBy={'language'}
                        options={languageOptions}
                        values={[languageOptions.find(opt => opt.code === 'ru')]}
                        onChange={(value) => console.log(value)}/>
                </div>

                <div className={'settings-card__selects__theme'}>
                    <span className={'settings-card__selects__theme_span'}>Тема</span>
                    <Select
                        placeholder={'Выбор темы'}
                        labelField={'theme'}
                        valueField={'code'}
                        className={'settings__select'}
                        searchBy={'theme'}
                        options={themeOptions}
                        values={[themeOptions.find(opt => opt.code === 'light')]}
                        onChange={(value) => console.log(value)}/>
                </div>

            </div>
            <button
                onClick={async ()=>{
                    await Ajax('https://s-soboy.com/api/v1/cafe/get_all?since=0&limit=100', 'GET', {}, (response)=>console.log(response),true);
                }}
                className={'settings-card__delete-account action-button stretch '}>Удалить аккаунт</button>


        </div>
    );

}


export default Settings;
