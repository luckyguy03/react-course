import { useForm } from "./use-form";
import { Counter } from "../counter/counter";
import { ReviewContext } from "../../components/review-context-provider/index";
import { useContext } from "react"

import {
  RATING_COUNTER_MAX,
  RATING_COUNTER_MIN,
} from "../../constants/constants";
import { Button } from "../button/button";

import styles from "./review-form.module.css";

export const ReviewForm = ({ onSubmitForm, isSubmitButtonDisabled, userName }) => {

  const {reviewObject, setReview} = useContext(ReviewContext);
  const { form, onNameChange, onTextChange, onRatingChange, clear } = useForm(reviewObject.review !== undefined ? reviewObject.review.reviewText : "",  reviewObject.review !== undefined ? reviewObject.review.reviewRating : 1);
  const { text, ratingCount } = form;
  const reviewId = reviewObject.review !== undefined ? reviewObject.review.reviewId : null;

  return (
    <div className={styles.reviewForm}>
      <h3>Оставьте отзыв, пожалуйста:</h3>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <span>Ваше имя</span>
          <input
            value={userName}
            onChange={(event) => {
              onNameChange(event.target.value);
            }}
            type="text"
            disabled
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
              if (ratingCount < RATING_COUNTER_MAX)
                onRatingChange(ratingCount + 1);
            }}
            onDecrement={() => {
              if (ratingCount > RATING_COUNTER_MIN)
                onRatingChange(ratingCount - 1);
            }}
            decrementEnable={ratingCount > RATING_COUNTER_MIN}
            incrementEnable={ratingCount < RATING_COUNTER_MAX}
          />
        </div>
        <Button
          className={styles.resetBtn}
          onClick={clear}
          title={"Очистить"}
        />
        <Button
          title={"Отправить отзыв"}
          onClick={() => {
            if( text === ""){
              alert("Необходимо ввести сообщение");
            }else{
              onSubmitForm({...form, reviewId});
              clear();
              setReview({});
            }
          }}
          disabled={isSubmitButtonDisabled}
        />
      </form>
    </div>
  );
};
