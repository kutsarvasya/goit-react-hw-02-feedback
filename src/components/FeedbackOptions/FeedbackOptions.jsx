import { ListBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <ListBtn>
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>Neutral</button>
      <button onClick={onLeaveFeedback}>Bad</button>
    </ListBtn>
  );
}
