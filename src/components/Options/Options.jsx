import css from "./Options.module.css";

const Options = ({ updateFeedback, resp: { good, neutral, bad, reset } }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        {good}
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        {neutral}
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        {bad}
      </button>
      <button onClick={() => updateFeedback("reset")} type="button">
        {reset}
      </button>
    </div>
  );
};

export default Options;
