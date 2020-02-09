
import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import Header from './components/main/header/Header';
import Body from './components/main/body/Body';
import Footer from './components/main/footer/Footer';

class App extends Component {
  render() {
    const { name } = this.props;
    return (
        <div className="container">
          <Header />
          <Body />
          <Footer />
        </div>
    )
  }
}

export default hot(App);
