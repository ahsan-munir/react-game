import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Game from './components/Game';

class App extends Component {
 
  render() {
    return <Game />;
  }
}

export default hot(App);
