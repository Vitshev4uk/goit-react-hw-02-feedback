import { Component } from "react";
import FeedBack from "./FeedBack/FeedBack";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
// import FeedbackOption from "./Feedback/Feedback";


class App extends Component {

 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  render() {
    return (
      <div>
        <FeedBack />
        <Statistics />
        <Section />
        {/* <FeedbackOption/> */}
        
        {/* <Statistics
          good={this.state.good}
          neutral={this.state.good}
          bad={this.state.bad}
          total={ this.countTotalFeedback()}
          positivePercentage={ this.countPositiveFeedbackPercentage()} /> */}
      </div>
    )
  }
}

export default App;

 
