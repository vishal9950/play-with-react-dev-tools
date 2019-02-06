import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page2 from './tutorialPages/Page2/Page2';
import right_arrow from './assets/icons/right-arrow.png';
import left_arrow from './assets/icons/left-arrow.png';
import Page1 from './tutorialPages/Page1/Page1';
import Page3 from './tutorialPages/Page3/Page3';
import Page4 from './tutorialPages/Page4/Page4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  goBack = () => {
    const {page} = this.state;
    this.setState({
      page: page - 1
    });
  }

  goForward = () => {
    const {page} = this.state;
    this.setState({
      page: page + 1
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <div><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="Nav-bar-text">Play With React Dev Tools</div>
        </div>
        <header className="App-header">
        <div>
          {this.state.page !== 1 ? <button onClick={this.goBack} className="App-nav-button"><img src={left_arrow} alt="back" /></button> : null}
        </div>
          {this.state.page === 1 ? <Page1 /> : null}
          {this.state.page === 2 ? <Page2 /> : null}
          {this.state.page === 3 ? <Page3 /> : null}
          {this.state.page === 4 ? <Page4 /> : null}
          <div>
          <button onClick={this.goForward} className="App-nav-button"><img src={right_arrow} alt="back" /></button>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
