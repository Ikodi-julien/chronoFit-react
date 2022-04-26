import { DISPLAY_TRAINING_DETAILS } from "../actions/recapTrainingsActions";

const initialState = {
  recapTrainingModaleIsOpen: false,
  recapTraining: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_TRAINING_DETAILS:
      console.log("yep, t'as dit yep ?");
      return state;

    default:
      return state;
  }
};
export default reducer;
