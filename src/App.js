import React from 'react';
import {createStore} from "redux";
import reducer from "./model/reducer";
import {Provider} from "react-redux";
import './index.scss';
import Landing from "./moduels/landing";
import Authorization from "./moduels/Authorization/Authorization";
import { Switch, Route, Redirect } from 'react-router';
import Profile from "./moduels/Profile/Profile";
import Header from "./moduels/header";
import {useHistory} from "react-router-dom";

function App() {
  const store = createStore(reducer);
  let reactHistory = useHistory();

  return (
    <Provider store={store}>
      <div className="App">
          <Header buttons={[
              {
                  text: 'Заведения',
                  onClick: () => {},
              },
              {
                  text: 'Работники',
                  onClick: () => {},
              },
              {
                  text: 'Лендинг',
                  onClick: () => reactHistory.push('/landing'),
              },
              {
                  text: 'Профиль',
                  onClick: () =>  reactHistory.push('/profile'),
              },
          ]}>
          </Header>
              <Switch>
                  <Route path='/landing' component={Landing} />
                  <Route exact path='/auth' component={() => <Authorization type = {'reg'}/>}/>
                  <Route exact path='/auth/:uuid/:position' component={() => <Authorization type = {'staff-reg'} />}/>
                  <Route exact path='/profile' component={() => <Profile/>}/>
                  <Redirect to='/'/>
              </Switch>
      </div>
    </Provider>
  );
}

export default App;
