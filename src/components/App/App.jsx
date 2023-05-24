import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = e => {
    let el = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [el]: prevState[el] + 1 }));
    this.counterTotal();
    this.counterPositivePercentage();
  };
  counterTotal = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };
  counterPositivePercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.ceil(
        (prevState.good /
          (prevState.good + prevState.neutral + prevState.bad)) *
          100
      ),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
