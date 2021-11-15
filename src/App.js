import "./App.css";
import { useState } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

function Feedback() {
  const [good, setGood] = useState(null);
  const [neutral, setNeutral] = useState(null);
  const [bad, setBad] = useState(null);

  const leaveFeedback = (vote) => {
    switch (vote) {
      case 'good':
        setGood(prev => prev + 1);
        console.log();
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return good === 0
      ? "0"
      : Math.round((good * 100) / countTotalFeedback()) + "%";
  };

  return (
    <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad' ]} onLeaveFeedback={leaveFeedback} />
        </Section>
        <Section title="Statistics" />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </>
  )
  }
 
export default Feedback;
