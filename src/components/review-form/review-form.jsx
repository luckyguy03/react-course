import { useForm } from "./use-form";
import { Counter } from "../counter/counter";
import { RATING_COUNTER_MAX, RATING_COUNTER_MIN } from "../../constants/constants";

export const ReviewForm = () => {
  const { form, onNameChange, onTextChange, onRatingChange, clear } = useForm();

  const { name, text, ratingCount } = form;

  return (
    <>
      <h3>Оставьте отзыв, пожалуйста:</h3>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <span>Name</span>
          <input
            value={name}
            onChange={(event) => {
              onNameChange(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Text</span>
          <input
            value={text}
            onChange={(event) => {
              onTextChange(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Rating</span>
          <Counter 
            count={ratingCount} 
            onIncrement={() => {
              if(ratingCount < RATING_COUNTER_MAX)
                onRatingChange(ratingCount + 1)
            }} 
            onDecrement={() => {
              if(ratingCount > RATING_COUNTER_MIN)
                onRatingChange(ratingCount - 1)
            }}/>
        </div>
        <button onClick={clear}>clear</button>
      </form>
    </>
  );
};
