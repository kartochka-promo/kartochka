import React from 'react';
import {createStore} from "redux";
import reducer from "./model/reducer";
import {Provider} from "react-redux";
import './index.scss';
import Landing from "./moduels/landing";
import Authorization from "./moduels/Authorization/Authorization";
import { Switch, Route, Redirect } from 'react-router';

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <div className="App">
          <main className='main'>
              <Switch>
                  <Route path='/landing' component={Landing} />
                  <Route exact path='/login' component={() => <Authorization type={'login'} />} />
                  <Route exact path='/reg' component={() => <Authorization type={'reg'} />} />
                  <Redirect to='/'/>
              </Switch>
          </main>
        {/*<Landing/>*/}
        {/*<Authorization type="reg"/>*/}
      </div>
    </Provider>
  );
}

export default App;
