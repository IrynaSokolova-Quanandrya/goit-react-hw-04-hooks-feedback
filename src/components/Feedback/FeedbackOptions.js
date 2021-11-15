import React from "react";
import "./FeedbackOptions.css";
import propTypes from "prop-types";

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map(vote =>
        <button
          key={vote}
          type="button"
          className="feedback__btn"
          onClick={() => onLeaveFeedback(vote)}
        >
          {vote}
        </button>
      )
      }
    </>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
