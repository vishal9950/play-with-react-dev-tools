import React from 'react';
import './Page6Child.css';
import southParkMe from '../../../assets/icons/south_park_me.png';

export default class Page6Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'This is state in the same component',
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <p><img key={message} className="Page6Child-img" src={southParkMe} alt="south" /></p>
      </div>
    );
  }
}
