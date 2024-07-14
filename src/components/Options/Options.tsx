import css from "./Options.module.css";
import { OptionProps } from "./Options.types";

const Options: React.FC<OptionProps> = ({
  totalFeedback,
  handleReset,
  updateFeedback,
  resp: { good, neutral, bad, reset },
}) => {
  return (
    <div className={css.wrapper}>
      <button
        className={css.btn}
        onClick={() => updateFeedback("good")}
        type="button"
      >
        {good}
      </button>
      <button
        className={css.btn}
        onClick={() => updateFeedback("neutral")}
        type="button"
      >
        {neutral}
      </button>
      <button
        className={css.btn}
        onClick={() => updateFeedback("bad")}
        type="button"
      >
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={handleReset} type="button">
          {reset}
        </button>
      )}
    </div>
  );
};

export default Options;
