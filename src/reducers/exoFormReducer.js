import {
  EXOFORM_INPUT_CHANGE,
  SHOW_EXO_IN_TRAINING_FORM,
  SHOW_EXO_ROUND_FORM,
} from "../actions/exoFormActions";
import { PUT_EXOFORM_IN_CUSTOM_ROUND } from "../actions/roundLocalActions";
import {
  PUT_EXOFORM_IN_LOCAL_TRAINING,
  ADD_EXERCICE_TO_LOCAL_TRAINING,
} from "../actions/trainingLocalActions";

const initialState = {
  roundIndex: 0,
  exoIndex: 0,
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

    case ADD_EXERCICE_TO_LOCAL_TRAINING:
      console.log(action);
      return {
        ...initialState,
        roundIndex: action.value.roundIndex,
        exoIndex: action.value.exoIndex,
      };

    default:
      return state;
  }
};
export default reducer;
