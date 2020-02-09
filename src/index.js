import App from "./app";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bulma';

import gitdrnkReducer from './reducers/reducers'

const store = createStore(gitdrnkReducer)

var mountNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  mountNode
);
