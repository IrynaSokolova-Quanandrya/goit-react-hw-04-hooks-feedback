import React from "react";
import "./Statistics.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="statistics__list">
      <li>Good:{good}</li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total:{total}</li>
      <li>Positive feedback: {positivePercentage}</li>
    </ul>
  );
}

export default Statistics;
