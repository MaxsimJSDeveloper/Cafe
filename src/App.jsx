import "./App.css";
import { useState } from "react";

import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import resp from "./resp.json";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options updateFeedback={updateFeedback} resp={resp}></Options>
      <Feedback feedback={feedback} />
    </>
  );
};

export default App;
