import css from "./Feedback.module.css";
import { propsDescription } from "./Feedback.types";

const Feedback: React.FC<propsDescription> = ({
  totalFeedback,
  positiveFeedback,
  feedback: { good, neutral, bad },
}) => {
  return (
    <ul className={css.indent}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Positive: {positiveFeedback}%</li>
      <li className={css.item}>Total: {totalFeedback}</li>
    </ul>
  );
};

export default Feedback;
