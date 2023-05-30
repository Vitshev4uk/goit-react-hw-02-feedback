import { Component } from 'react';
import css from 'components/Statistics/Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className={css.StatisticsList}>
        <li className={css.StatisticsListItem}>Good: {good}</li>
        <li className={css.StatisticsListItem}>Neutral: {neutral}</li>
        <li className={css.StatisticsListItem}>Bad: {bad}</li>
        <li className={css.StatisticsListItem}>Total: {total}</li>
        <li className={css.StatisticsListItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

export default Statistics;
