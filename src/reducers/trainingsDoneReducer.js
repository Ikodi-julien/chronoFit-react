import {
  DISPLAY_TRAINING_DETAILS,
  MODIFY_TRAINING_DONE,
  SET_TRAINING_MODAL_ISOPEN,
  SORT_TRAINING_TAB,
} from "../actions/trainingsDoneActions";
import { SET_TRAININGS_DONE } from "../actions/trainingAjaxActions";

const initialState = {
  recapTrainingModalIsOpen: false,
  trainings: [],
  shownTrainings: [],
  sortDateDesc: true,
  sortNameDesc: true,
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
  isModif: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TRAININGS_DONE:
      return {
        ...state,
        trainings: action.value,
        shownTrainings: action.value,
      };

    case DISPLAY_TRAINING_DETAILS:
      // console.log("yep, t'as dit yep ?", action.value);
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

    case SORT_TRAINING_TAB:
      let { trainings, sortDateDesc, sortNameDesc } = state;
      let shownTrainings = [];
      const sortByKey = (key) => (a, b) => a[key] > b[key] ? 1 : -1;

      // Utilise slice() pour faire une copie du state et ne pas le modifier directement
      if (action.value === "date") {
        shownTrainings = trainings.slice().sort(function (a, b) {
          const keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        if (!sortDateDesc) {
          shownTrainings = shownTrainings.reverse();
        }
        sortDateDesc = !sortDateDesc;
      }

      if (action.value === "name") {
        shownTrainings = trainings.slice().sort(sortByKey("name"));
        if (sortNameDesc) {
          shownTrainings = shownTrainings.reverse();
        }
        sortNameDesc = !sortNameDesc;
      }

      if (
        ["FOR TIME", "EMOM", "AMRAP", "MAX REPS", "none"].includes(action.value)
      ) {
        console.log("value", action.value);
        if (action.value === "none") {
          return {
            ...state,
            shownTrainings: state.trainings,
          };
        } else {
          shownTrainings = state.trainings
            .slice()
            .sort(sortByKey("date"))
            .reverse()
            .filter((training) => training.type === action.value);
        }
      }

      return {
        ...state,
        shownTrainings,
        sortDateDesc,
        sortNameDesc,
      };

    case MODIFY_TRAINING_DONE:
      return {
        ...state,
        isModif: action.value,
      };
    default:
      return state;
  }
};
export default reducer;
