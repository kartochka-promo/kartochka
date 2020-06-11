import React from 'react';
import {createStore} from "redux";
import reducer from "./model/reducer";
import {Provider} from "react-redux";
import './index.scss';
import Input from "./moduels/Input";
import Landing from "./moduels/landing";

function App() {

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <div className="App">
        <Landing/>
      </div>
    </Provider>
  );
}

export default App;
