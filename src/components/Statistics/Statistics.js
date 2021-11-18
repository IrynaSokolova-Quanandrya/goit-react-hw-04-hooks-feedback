/** @format */

import React from "react";
import s from "./Statistics.module.css";
import propTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.statistics__list}>
      <li>Good:{good}</li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total:{total}</li>
      <li>Positive feedback: {positivePercentage}</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
export default Statistics;
