import {
  SET_ROUNDMENU_IS_VISIBLE,
  SET_SHRUNKEN_ROUND,
} from "../actions/trainingViewActions";
import {
  SET_CUSTOM_ROUND_NAME,
  SET_CUSTOM_ROUND,
  SET_CUSTOM_ROUND_ITERATION,
  SET_CUSTOM_ROUND_TYPE,
  GET_CURRENT_CUSTOM_ROUND,
  GET_CURRENT_CUSTOM_ROUND_SUCCESS,
  GET_CUSTOM_ROUNDS,
  GET_CUSTOM_ROUNDS_SUCCESS,
  ADD_EXERCICE_TO_CUSTOM_ROUND,
  PUT_EXOFORM_IN_CUSTOM_ROUND,
  DELETE_CUSTOM_ROUND,
  DELETE_EXO_FROM_CUSTOM_ROUND,
  SHOW_EXO_FORM_CUSTOM_ROUND,
  SHOW_EXO_IN_CUSTOM_ROUND,
  MOVE_EXO_IN_CUSTOM_ROUND,
} from "../actions/roundLocalActions";
import {
  EXOFORM_INPUT_CHANGE,
  SET_TIMECAP,
  SET_TRAINING_TYPE,
} from "../actions/exoFormActions";
/*-----------------------------------*/
import trainingServices from "../services/training";
/*----------------------------------*/
// import {apiTraining} from '../data/apiTraining';
// import {allTrainings} from '../data/allTrainings';
/*----------------------------------*/
const initialState = {
  isApi: false,
  menuIsVisible: false,
  // localTrainingReducer
  allLocalRounds: [],
  roundManagerNameInput: "",

  localRound: {
    name: "Work Of Day",
    // timecap: "",
    // type: "",
    // rounds: [
    //   {
    shrunken: true,
    menuIsVisible: false,
    type: "",
    iteration: 1,
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
      //   ],
      // },
    ],
  },
};

const reducer = (state = initialState, action = {}) => {
  const { rounds } = state.allLocalRounds;

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

    // case SET_LOCAL_TRAINING:
    //   if (action.value === "default") {
    //     return {
    //       ...state,
    //       localTraining: { ...initialState.localTraining },
    //     };
    //   }

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       ...state.allLocalTrainings.find(
    //         (training) => training.name === action.value
    //       ),
    //     },
    //   };

    // case SET_LOCAL_TRAINING_NAME:
    //   return {
    //     ...state,
    //     trainingManagerNameInput: action.value,
    //   };

    // case SET_LOCAL_ROUND_TYPE:
    //   rounds[action.roundIndex].type = action.value;

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //   };

    // case GET_LOCAL_TRAININGS_SUCCESS:
    //   return {
    //     ...state,
    //     allLocalTrainings: action.data,
    //   };

    // case PUT_EXOFORM_IN_LOCAL_TRAINING:
    //   allRoundsExoShrunken[action.roundIndex].exercices[action.exoIndex] = {
    //     ...allRoundsExoShrunken[action.roundIndex].exercices[action.exoIndex],
    //     name: state.exoForm.name,
    //     description: state.exoForm.desc,
    //     options: [
    //       {
    //         iteration: state.exoForm.iteration,
    //         duration: state.exoForm.duration,
    //         weight: state.exoForm.weight,
    //         reps: state.exoForm.reps,
    //       },
    //     ],
    //   };
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds: allRoundsExoShrunken,
    //     },
    //     exoForm: initialState.exoForm,
    //   };

    // case DELETE_EXO_FROM_ROUND:
    //   let roundWithoutExo = allRoundsExoShrunken.find(
    //     (round) => round === allRoundsExoShrunken[action.roundIndex]
    //   );

    //   roundWithoutExo.exercices = roundWithoutExo.exercices.filter(
    //     (exo) => exo !== roundWithoutExo.exercices[action.exoIndex]
    //   );

    //   allRoundsExoShrunken[action.roundIndex] = roundWithoutExo;

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds: allRoundsExoShrunken,
    //     },
    //   };

    // case MOVE_ROUND_IN_STATE:
    //   const [roundToMove] = rounds.splice(action.oldIndex, 1);
    //   rounds.splice(action.newIndex, 0, roundToMove);

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //   };

    // case MOVE_EXO_IN_STATE:
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds: trainingServices.changeExoOrder(rounds, action),
    //     },
    //   };

    // case ADD_ROUND_TO_LOCAL_TRAINING:
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds: [
    //         ...allRoundMenuHidden,
    //         {
    //           menuIsVisible: false,
    //           iteration: 1,
    //           duration: 0,
    //           exercices: [
    //             {
    //               isForm: true,
    //               name: "",
    //               description: "",
    //               options: [
    //                 {
    //                   iteration: "1",
    //                   duration: "0",
    //                   weight: "0",
    //                   reps: "0",
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   };

    // case DELETE_ROUND_FROM_LOCAL_TRAINING:
    //   const newRounds = rounds.filter(
    //     (round) => round !== rounds[action.value]
    //   );

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds: newRounds,
    //     },
    //   };

    // case ADD_EXERCICE_TO_LOCAL_TRAINING:
    //   const round = allRoundMenuHidden[action.value.roundId];

    //   round.exercices.push({
    //     isForm: true,
    //     name: "",
    //     description: "",
    //     // isBenchmark: false,
    //     options: [
    //       {
    //         iteration: 1,
    //         duration: 0,
    //         weight: 0,
    //         reps: 0,
    //       },
    //     ],
    //   });
    //   round.shrunken = false;

    //   allRoundMenuHidden[action.value.roundId] = round;

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds: allRoundMenuHidden,
    //       exoForm: { ...initialState.exoForm },
    //     },
    //   };

    // case EXOFORM_INPUT_CHANGE:
    //   return {
    //     ...state,
    //     exoForm: {
    //       ...state.exoForm,
    //       [action.name]: action.value,
    //     },
    //   };

    // case SET_ROUNDMENU_IS_VISIBLE:
    //   rounds[action.value.index].menuIsVisible = action.value.bool;

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //   };

    // case SET_SHRUNKEN_ROUND:
    //   rounds[action.value.index].shrunken = action.value.bool;
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //   };

    // case SET_ROUND_ITERATION:
    //   rounds[action.value.index].iteration = action.value.value;
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //   };

    // case SET_TIMECAP:
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       timecap: action.value,
    //     },
    //   };

    // case SET_TRAINING_TYPE:
    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       type: action.value,
    //     },
    //   };

    // case SHOW_EXO_FORM:
    //   // This shows ExoForm but all exercices have been shrunk
    //   allRoundsExoShrunken[action.value.roundIndex].exercices[
    //     action.value.exoIndex
    //   ].isForm = true;

    //   const exoToShow =
    //     allRoundsExoShrunken[action.value.roundIndex].exercices[
    //       action.value.exoIndex
    //     ];

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //     exoForm: {
    //       name: exoToShow.name,
    //       desc: exoToShow.description,
    //       iteration: exoToShow.options[0].iteration,
    //       reps: exoToShow.options[0].reps,
    //       duration: exoToShow.options[0].duration,
    //       weight: exoToShow.options[0].weight,
    //     },
    //   };

    // case SHOW_EXO_IN_LIST:
    //   // This hides all ExoForm
    //   rounds[action.value.roundIndex].exercices[
    //     action.value.exoIndex
    //   ].isForm = false;

    //   return {
    //     ...state,
    //     localTraining: {
    //       ...state.localTraining,
    //       rounds,
    //     },
    //   };

    default:
      return state;
  }
};

export default reducer;
