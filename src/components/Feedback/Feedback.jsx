import css from "./Feedback.module.css";

function Feedback({ feedback: { good, neutral, bad } }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
  );
}

export default Feedback;
