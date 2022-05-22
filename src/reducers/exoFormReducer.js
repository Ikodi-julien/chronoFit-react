import {
  EXOFORM_INPUT_CHANGE,
  SET_TIMECAP,
  SET_TRAINING_TYPE,
} from "../actions/exoFormActions";

const initialState = {
  exoForm: {
    name: "",
    iteration: 1,
    desc: "",
    reps: 0,
    duration: 0,
    weight: 0,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EXOFORM_INPUT_CHANGE:
      return {
        ...state,
        exoForm: {
          ...state.exoForm,
          [action.name]: action.value,
        },
      };

    case SET_TIMECAP:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          timecap: action.value,
        },
      };

    case SET_TRAINING_TYPE:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          type: action.value,
        },
      };
    default:
      return state;
  }
};
export default reducer;
