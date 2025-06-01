import { useForm } from "./use-form";
import { Counter } from "../counter/counter";
import { RATING_COUNTER_MAX, RATING_COUNTER_MIN } from "../../constants/constants";
import { Button } from "../button/button";

import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const { form, onNameChange, onTextChange, onRatingChange, clear } = useForm();

  const { name, text, ratingCount } = form;

  return (
    <div className={styles.reviewForm}>
      <h3>Оставьте отзыв, пожалуйста:</h3>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <span>Ваше имя</span>
          <input
            value={name}
            onChange={(event) => {
              onNameChange(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <span>Сообщение</span>
          <textarea
            value={text}
            onChange={(event) => {
              onTextChange(event.target.value);
            }}
            type="text"
            rows="5"
          />
        </div>
        <div>
          <span>Оценка (1 - 5)</span>
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
        <Button className={styles.resetBtn} onClick={clear} title={"Очистить"}/>
      </form>
    </div>
  );
};
