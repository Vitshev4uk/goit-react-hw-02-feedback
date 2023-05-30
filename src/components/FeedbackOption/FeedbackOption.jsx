import { Component } from 'react';
import css from 'components/FeedbackOption/FeedbackOption.module.css';

class FeedbackOption extends Component {
  render() {
    const { types, handleFeedBackClick } = this.props;
    return (
      <div className={css.BtnContainer}>
        {types.map(type => (
          <button
            className={css.BtnOption}
            type="button"
            key={type}
            onClick={() => handleFeedBackClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOption;
