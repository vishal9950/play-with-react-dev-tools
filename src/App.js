import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './tutorialPages/Page1/Page1';
import Page2 from './tutorialPages/Page2/Page2';
import Page3 from './tutorialPages/Page3/Page3';
import Page4 from './tutorialPages/Page4/Page4';
import Page5 from './tutorialPages/Page5/Page5';
import Page6 from './tutorialPages/Page6/Page6';
import Page7 from './tutorialPages/Page7/Page7';
import rightArrow from './assets/icons/right-arrow.png';
import leftArrow from './assets/icons/left-arrow.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  goBack = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
    });
  }

  goForward = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  }

  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <div className="Nav-bar">
          <div><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="Nav-bar-text">Play With React Dev Tools</div>
        </div>
        <header className="App-header">
          <div>
            {page !== 1 ? <button type="submit" onClick={this.goBack} className="App-nav-button"><img src={leftArrow} alt="back" /></button> : null}
          </div>
          {page === 1 ? <Page1 /> : null}
          {page === 2 ? <Page2 /> : null}
          {page === 3 ? <Page3 /> : null}
          {page === 4 ? <Page4 /> : null}
          {page === 5 ? <Page5 /> : null}
          {page === 6 ? <Page6 /> : null}
          {page === 7 ? <Page7 a={24} /> : null}
          <div>
            {page !== 7 ? <button type="submit" onClick={this.goForward} className="App-nav-button"><img src={rightArrow} alt="back" /></button> : null}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
