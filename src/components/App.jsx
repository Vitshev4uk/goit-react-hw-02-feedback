import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOption from "./FeedbackOption/FeedbackOption";
import NotificationMessage from "./NotificationMessage/NotificationMessage";


class App extends Component {

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
    const { good, neutral, bad } = this.state;

    return (
      <div style={{
        margin: 200
      }}>
         <Section title="Please leave feedback">
          <FeedbackOption
            types={['good', 'neutral', 'bad']}
            handleFeedBackClick={this.handleFeedBackClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <NotificationMessage message="There is no feedback" />}
        </Section>
      </div>
    )
  }
}

export default App;

 
