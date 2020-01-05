
import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import Header from './components/main/header/Header';

class App extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="main">
        <Header />;
      </div>
    )
  }
}

export default hot(App);
