import React, { Component } from 'react';
import './App.css';
import  Menubar from './Menu';
import Body from './body';
import Packs from './packs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <Body />
        <Packs />
      </div>
    );
  }
}

export default App;
