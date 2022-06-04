import {
  EXOFORM_INPUT_CHANGE,
  SHOW_EXO_IN_TRAINING_FORM,
  SHOW_EXO_ROUND_FORM,
} from "../actions/exoFormActions";
import { PUT_EXOFORM_IN_CUSTOM_ROUND } from "../actions/roundLocalActions";
import { PUT_EXOFORM_IN_LOCAL_TRAINING } from "../actions/trainingLocalActions";

const initialState = {
  name: "",
  desc: "",
  iteration: 1,
  reps: 0,
  duration: 0,
  weight: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EXOFORM_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SHOW_EXO_IN_TRAINING_FORM:
      return {
        ...action.value.exoToShow,
      };

    case SHOW_EXO_ROUND_FORM:
      return {
        ...action.value.exoToShow,
      };

    case PUT_EXOFORM_IN_CUSTOM_ROUND:
    case PUT_EXOFORM_IN_LOCAL_TRAINING:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default reducer;
