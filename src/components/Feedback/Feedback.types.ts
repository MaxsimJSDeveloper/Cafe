export interface propsDescription {
  totalFeedback: number;
  positiveFeedback: number;
  feedback: Feedback;
}

export interface Feedback {
  good: number;
  neutral: number;
  bad: number;
}
