import React from 'react';
import './Page7.css';

const answer1 = 24;
const answer2 = 7;
const answer3 = 8;

class QuizPage extends React.Component {
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
      console.log('wdjk');
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
              <span className="Page7-textSmall">{'(Page nos. are stored in App component\'s state) '}</span>
              <input type="number" onChange={event => this.onChange(event, 'second')} />
            </div>
            <div>
              {'+ Page 5\'s'}
              <span className="Page7-textSmall">(ThinkPage Component)</span>
              {'value of \'c\' in state '}
              <input type="number" onChange={event => this.onChange(event, 'third')} />
            </div>
          </p>
          <p><button type="submit" onClick={() => this.verifyAnswer()}>Verify your answer</button></p>
        </div>
      );
    }
}

export default QuizPage;
