import { Button, ListBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ListBtn>
      {Object.keys(options).map(el => (
        <Button onClick={onLeaveFeedback} key={el}>
          {el}
        </Button>
      ))}
    </ListBtn>
  );
}
