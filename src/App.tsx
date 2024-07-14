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

interface Resp {
  good: string;
  neutral: string;
  bad: string;
  reset: string;
}

const App = () => {
  const [feedback, setFeedback] = useState<FeedbackState>(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback: number = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback: number = Math.round(
    (feedback.good / totalFeedback) * 100
  );

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

  const name: string = "Sip Happens Café";
  const descr: string =
    "Please leave your feedback about our service by selecting one of the options below ";

  return (
    <div className="container">
      <Description name={name} descr={descr} />
      <Options
        totalFeedback={totalFeedback}
        handleReset={handleReset}
        updateFeedback={updateFeedback}
        resp={resp as Resp}
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
