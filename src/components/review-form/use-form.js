import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  ratingCount: 1,
};

const SET_NAME_ACTION = "setName";
const SET_TEXT_ACTION = "setText";
const SET_RATING_ACTION = "setRating";
const CLEAR_ACTION = "clear";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...state,
        name: payload,
      };
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      };
    case SET_RATING_ACTION:
      return {
        ...state,
        ratingCount: payload,
      };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onNameChange = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const onTextChange = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const onRatingChange = (rating) => {
    dispatch({ type: SET_RATING_ACTION, payload: rating});
  };

  const clear = () => {
    dispatch({ type: CLEAR_ACTION });
  };

  return {
    form,
    onNameChange,
    onTextChange,
    onRatingChange,
    clear,
  };
};
