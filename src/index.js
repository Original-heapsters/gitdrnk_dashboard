import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import 'bulma';


var mountNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  mountNode
);
