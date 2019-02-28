import React, { Component } from 'react';
import './App.css';
import  Menubar from './Menu';
import Body from './body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <Body />
      </div>
    );
  }
}

export default App;
