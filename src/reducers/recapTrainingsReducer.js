import {
  DISPLAY_TRAINING_DETAILS,
  SET_TRAINING_MODAL_ISOPEN,
} from "../actions/recapTrainingsActions";
import { SET_TRAININGS_DONE } from "../actions/trainingAjaxActions";

const initialState = {
  recapTrainingModalIsOpen: false,
  trainings: [],
  currentTraining: {
    id: 1,
    user_id: 50,
    name: "create sql 0",
    type: "EMOM",
    duration: 6,
    timecap: 0,
    exos: [
      {
        name: "exo 1",
        description: "desc de l'exo 1",
        duration: 1.9,
        reps: 2,
        weight: 2,
      },
      {
        name: "exo 2",
        description: "desc de l'exo 2",
        duration: 1.9,
        reps: 3,
        weight: 0,
      },
      {
        name: "exo 2",
        description: "desc de l'exo 3",
        duration: 1.9,
        reps: 3,
        weight: 0,
      },
    ],
    created_at: "2022-04-23T12:53:08.557Z",
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TRAININGS_DONE:
      return {
        ...state,
        trainings: action.value,
      };

    case DISPLAY_TRAINING_DETAILS:
      console.log("yep, t'as dit yep ?", action.value);
      return {
        ...state,
        recapTrainingModalIsOpen: true,
        currentTraining: state.trainings.find(
          (training) => training.id === action.value
        ),
      };

    case SET_TRAINING_MODAL_ISOPEN:
      return {
        ...state,
        recapTrainingModalIsOpen: action.value,
      };

    default:
      return state;
  }
};
export default reducer;
