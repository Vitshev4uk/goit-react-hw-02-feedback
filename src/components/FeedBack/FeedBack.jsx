import { Component } from 'react';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedBackClick = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
    
  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;
      const positivPercentage = (good / total) * 100;
      return positivPercentage.toFixed(0);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button
            onClick={() => {
              this.handleFeedBackClick('good');
            }}
          >
            Good
          </button>
          <button
            onClick={() => {
              this.handleFeedBackClick('neutral');
            }}
          >
            Neutral
          </button>
          <button
            onClick={() => {
              this.handleFeedBackClick('bad');
            }}
          >
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
            
      </div>
    );
  }
}

export default FeedBack;
