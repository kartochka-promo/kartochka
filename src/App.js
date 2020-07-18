import React, {useState} from 'react';
import {createStore} from "redux";
import reducer from "./model/reducer";
import {Provider} from "react-redux";
import './index.scss';
import Landing from "./moduels/landing";
import Authorization from "./moduels/Authorization/Authorization";
import {Switch, Route, Redirect} from 'react-router';
import Profile from "./moduels/Profile/Profile";
import Header from "./moduels/header";
import {useHistory} from "react-router-dom";
import Staff from "./moduels/Staff/Staff";
import CheckAuth from "./utils/RouterUtils";
import StaffCard from "./moduels/Staff/StaffCard/StaffCard";
import checkAuthorize from "./utils/RouterUtils";

function App() {
    const store = createStore(reducer);
    let reactHistory = useHistory();
    let [isAuthorized, setIsAuthorized] = useState(false);

    function select(state) {
        return state.isAuthorized
    }

    let currentValue;
    function handleChanges() {
        let previousValue = currentValue
        currentValue = select(store.getState())
        if(currentValue !== previousValue){
           setIsAuthorized(currentValue)
        }
    }

    const unsubscribe = store.subscribe(handleChanges)


    return (
        <Provider store={store}>
            <div className="App">
                {isAuthorized?
                <Header buttons={[
                    {
                        text: 'Заведения',
                        onClick: () => {
                        },
                    },
                    {
                        text: 'Работники',
                        onClick: () => reactHistory.push('/staff'),
                    },
                    {
                        text: 'Лендинг',
                        onClick: () => reactHistory.push('/landing'),
                    },
                    {
                        text: 'Профиль',
                        onClick: () => reactHistory.push('/profile'),
                    },
                ]}>
                </Header>:null}

                <Switch>
                    <Route path='/landing'
                           component={Landing}/>
                    <Route exact path='/auth'
                           component={()=><Authorization type={'reg'}/>}
                    />
                    <Route exact path='/auth/:uuid/:position'
                           component={()=> <Authorization type={'staff-reg'}/>}
                    />
                    <Route exact path='/profile'
                           component = {()=><CheckAuth component = {Profile}/>}
                    />
                    <Route exact path='/staff'
                           component = {(props)=><CheckAuth component = {Staff} componentProps = {props}/>}
                        />
                    <Route exact path='/staff/:id'
                           component = {(props)=><CheckAuth component = {Staff} componentProps = {props}/>}

                    />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Provider>
    );
}

export default App;
