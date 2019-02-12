import React from 'react';
import './Page5.css';

class ThinkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 8,
    };
  }

  render() {
    const { c } = this.state;
    return (
      <div>
        <p><img key={c} src="https://media.giphy.com/media/l14qxlCgJ0zUk/giphy.gif" alt="gif" /></p>
        <p>{'Take a minute to analyze what\'s going on'}</p>
      </div>
    );
  }
}
export default ThinkPage;
