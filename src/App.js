import React from 'react';
import {createStore} from "redux";
import reducer from "./model/reducer";
import {Provider} from "react-redux";
import './index.scss';
import Landing from "./moduels/landing";
import Authorization from "./moduels/Authorization/Authorization";


function App() {

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <div className="App">
        <Landing/>
        {/*<Authorization type="reg"/>*/}
      </div>
    </Provider>
  );
}

export default App;
