import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <div><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="Nav-bar-text">Play With React Dev Tools</div>
        </div>
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
