import React from 'react';
import {createStore} from "redux";
import reducer from "./model/reducer";
import {Provider} from "react-redux";
import './index.scss';
import Landing from "./moduels/landing";
import Authorization from "./moduels/Authorization/Authorization";
import { Switch, Route, Redirect } from 'react-router';
import Profile from "./moduels/Profile/Profile";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <div className="App">
          <main className='main'>
              <Switch>
                  <Route path='/landing' component={Landing} />
                  <Route exact path='/auth' component={() => <Authorization type = {'reg'}/>}/>
                  <Route exact path='/profile' component={() => <Profile/>}/>
                  <Route exact path='/auth/:uuid/:position' component={() => <Authorization type = {'staff-reg'} />}/>
                  <Redirect to='/'/>
              </Switch>
          </main>
      </div>
    </Provider>
  );
}

export default App;
