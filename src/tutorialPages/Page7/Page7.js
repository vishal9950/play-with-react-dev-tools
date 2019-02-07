import React from 'react';
import './Page7.css';

const answer1 = 24;
const answer2 = 7;
const answer3 = 8;

class Page7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      third: 0,
    };
  }

    onChange = (event, box) => {
      this.setState({
        [`${box}`]: Number(event.target.value),
      });
    }

    verifyAnswer = () => {
      const { first, second, third } = this.state;
      if (first === answer1 && second === answer2 && third === answer3) {
        alert('You are correct!');
      } else {
        alert('Try again');
      }
    }

    render() {
      return (
        <div>
          <p>
            <div>
              {'Value of current component\'s \'a\' prop '}
              <input type="number" onChange={event => this.onChange(event, 'first')} />
            </div>
            <div>
              {'+ Current Page no. '}
              <input type="number" onChange={event => this.onChange(event, 'second')} />
            </div>
            <div>
              {'+ Page 5\'s value of \'c\' in state '}
              <input type="number" onChange={event => this.onChange(event, 'third')} />
            </div>
          </p>
          <p><button type="submit" onClick={this.verifyAnswer}>Verify your answer</button></p>
        </div>
      );
    }
}

export default Page7;
