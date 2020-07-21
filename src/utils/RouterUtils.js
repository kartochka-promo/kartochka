import {Ajax} from "../utils/Ajax";
import {globalConsts} from "../globalConsts";
import {getCurrentUser, registerOwner} from "../model/Actions";
import React from "react";
import {useStore} from "react-redux";
import {useHistory} from "react-router";

export default function CheckAuth(props) {

    const store = useStore();
    const reactHistory = useHistory();
    const Component = props.component;
    const componentProps = props.componentProps;
    if(store.getState().isAuthorized){
        return  <Component {...componentProps}/>
    }
        Ajax(
        `${globalConsts.server.PATH_STAFF}/api/v1/get_current_staff/`,
        'GET',
        {},
        (response) => {
            console.log('ajax get current staff', props.component);
            if (response.errors === null) {
                store.dispatch(getCurrentUser(response))
            } else {
                reactHistory.push('/auth')
                throw response.errors;
            }

        },
        false);
    return  <Component {...componentProps}/>
}

