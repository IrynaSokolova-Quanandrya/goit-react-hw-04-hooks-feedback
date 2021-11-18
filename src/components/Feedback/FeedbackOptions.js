/** @format */

import React from "react";
import s from "./FeedbackOptions.module.css";
import propTypes from "prop-types";

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map((vote) => (
        <button
          key={vote}
          type='button'
          className={s.feedback__btn}
          onClick={() => onLeaveFeedback(vote)}>
          {vote}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.object.isRequired,
};
export default FeedbackOptions;
