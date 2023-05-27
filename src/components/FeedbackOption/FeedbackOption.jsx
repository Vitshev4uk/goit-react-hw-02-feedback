import { Component } from "react";

const FeedbackOption = ({ types, handleFeedBackClick }) => {
  return (
    <div>
      {types.map(type => (
          <button type='button' key={type} onClick={() => handleFeedBackClick(type)}>
          {type}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOption;