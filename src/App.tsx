import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import resp from "./resp.json";

import "./App.css";

interface FeedbackState {
  good: number;
  neutral: number;
  bad: number;
}

const App = () => {
  const [feedback, setFeedback] = useState<FeedbackState>(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType: keyof FeedbackState) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className="container">
      <Description
        name={"Sip Happens Café"}
        descr={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        totalFeedback={totalFeedback}
        handleReset={handleReset}
        updateFeedback={updateFeedback}
        resp={resp}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          feedback={feedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
