
import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import Header from './components/main/header/Header';
import Body from './components/main/body/Body';

class App extends Component {
  render() {
    const { name } = this.props;
    return (
        <div className="container">
          <Header />
          <Body />
        </div>
    )
  }
}

export default hot(App);
