import {
  SET_ROUNDMENU_IS_VISIBLE,
  SET_SHRUNKEN_ROUND,
} from "../actions/trainingViewActions";
import {
  SET_LOCAL_TRAINING,
  SET_LOCAL_TRAINING_NAME,
  SET_LOCAL_TRAINING_TYPE,
  SET_ROUND_ITERATION,
  GET_LOCAL_TRAININGS_SUCCESS,
  ADD_ROUND_TO_LOCAL_TRAINING,
  ADD_LOCAL_ROUND_TO_LOCAL_TRAINING,
  ADD_EXERCICE_TO_LOCAL_TRAINING,
  PUT_EXOFORM_IN_LOCAL_TRAINING,
  DELETE_ROUND_FROM_LOCAL_TRAINING,
  DELETE_EXO_FROM_ROUND,
  MOVE_ROUND_IN_STATE,
  MOVE_EXO_IN_STATE,
  SET_LOCAL_TRAINING_TIMECAP,
} from "../actions/trainingLocalActions";

/*-----------------------------------*/
import trainingServices from "../services/training";
/*----------------------------------*/
// import {apiTraining} from '../data/apiTraining';
// import {allTrainings} from '../data/allTrainings';
/*----------------------------------*/
const initialState = {
  // localTrainingReducer
  allLocalTrainings: [],
  trainingManagerNameInput: "",
  localTraining: {
    name: "Work Of Day",
    timecap: "",
    type: "",
    rounds: [
      {
        shrunken: true,
        menuIsVisible: false,
        iteration: 10,
        duration: 0,
        exercices: [
          // {
          //   isForm: false,
          //   name: 'Un exercice',
          //   description: '',
          //   options: [
          //     {
          //       iteration: 1,
          //       duration: 0,
          //       weight: 0,
          //       reps: 0,
          //     }
          //   ]
          // }
        ],
      },
    ],
  },
};

const reducer = (state = initialState, action = {}) => {
  const { rounds } = state.localTraining;

  const allRoundMenuHidden = rounds
    ? rounds.map((round) => ({ ...round, menuIsVisible: false }))
    : null;

  let allRoundsExoShrunken = rounds
    ? rounds.map((round) => {
        round.exercices.forEach((exo) => (exo.isForm = false));
        return round;
      })
    : null;

  switch (action.type) {
    /*--- localTraining state---*/

    case SET_LOCAL_TRAINING:
      if (action.value === "default") {
        return {
          ...state,
          localTraining: { ...initialState.localTraining },
        };
      }

      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          ...state.allLocalTrainings.find(
            (training) => training.name === action.value
          ),
        },
      };

    case SET_LOCAL_TRAINING_NAME:
      return {
        ...state,
        trainingManagerNameInput: action.value,
      };

    case SET_LOCAL_TRAINING_TYPE:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          type: action.value,
        },
      };

    case SET_LOCAL_TRAINING_TIMECAP:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          timecap: action.value,
        },
      };

    case GET_LOCAL_TRAININGS_SUCCESS:
      return {
        ...state,
        allLocalTrainings: action.data,
      };

    case PUT_EXOFORM_IN_LOCAL_TRAINING:
      const { exoForm, roundIndex, exoIndex } = action;
      allRoundsExoShrunken[roundIndex].exercices[exoIndex] = {
        ...allRoundsExoShrunken[roundIndex].exercices[exoIndex],
        name: exoForm.name,
        description: exoForm.desc,
        options: [
          {
            iteration: exoForm.iteration,
            duration: exoForm.duration,
            weight: exoForm.weight,
            reps: exoForm.reps,
          },
        ],
      };
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: allRoundsExoShrunken,
        },
      };

    case DELETE_EXO_FROM_ROUND:
      let roundWithoutExo = allRoundsExoShrunken.find(
        (round) => round === allRoundsExoShrunken[action.roundIndex]
      );

      roundWithoutExo.exercices = roundWithoutExo.exercices.filter(
        (exo) => exo !== roundWithoutExo.exercices[action.exoIndex]
      );

      allRoundsExoShrunken[action.roundIndex] = roundWithoutExo;

      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: allRoundsExoShrunken,
        },
      };

    case MOVE_ROUND_IN_STATE:
      const [roundToMove] = rounds.splice(action.oldIndex, 1);
      rounds.splice(action.newIndex, 0, roundToMove);

      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds,
        },
      };

    case MOVE_EXO_IN_STATE:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: trainingServices.changeExoOrder(rounds, action),
        },
      };

    case ADD_ROUND_TO_LOCAL_TRAINING:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: [
            ...allRoundMenuHidden,
            {
              menuIsVisible: false,
              iteration: 1,
              duration: 0,
              exercices: [
                {
                  isForm: true,
                  name: "",
                  description: "",
                  options: [
                    {
                      iteration: "1",
                      duration: "0",
                      weight: "0",
                      reps: "0",
                    },
                  ],
                },
              ],
            },
          ],
        },
      };

    case ADD_LOCAL_ROUND_TO_LOCAL_TRAINING:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: [...state.localTraining.rounds, action.roundToAdd],
        },
      };
    case DELETE_ROUND_FROM_LOCAL_TRAINING:
      const newRounds = rounds.filter(
        (round) => round !== rounds[action.value]
      );

      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: newRounds,
        },
      };

    case ADD_EXERCICE_TO_LOCAL_TRAINING:
      const round = allRoundMenuHidden[action.roundIndex];

      round.exercices.push({
        isForm: true,
        name: "",
        description: "",
        options: [
          {
            iteration: 1,
            duration: "",
            weight: "",
            reps: "",
          },
        ],
      });
      round.shrunken = false;

      allRoundMenuHidden[action.roundIndex] = round;

      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: allRoundMenuHidden,
          exoForm: { ...initialState.exoForm },
        },
      };

    case SET_ROUNDMENU_IS_VISIBLE:
      rounds[action.value.index].menuIsVisible = action.value.bool;

      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds,
        },
      };

    case SET_SHRUNKEN_ROUND:
      rounds[action.value.index].shrunken = action.value.bool;
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds,
        },
      };

    case SET_ROUND_ITERATION:
      rounds[action.value.index].iteration = action.value.value;
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds,
        },
      };

    default:
      return state;
  }
};

export default reducer;
