export interface OptionProps {
  totalFeedback: number;
  handleReset: () => void;
  updateFeedback: (feedbackType: "good" | "neutral" | "bad") => void;
  resp: {
    good: string;
    neutral: string;
    bad: string;
    reset: string;
  };
}
