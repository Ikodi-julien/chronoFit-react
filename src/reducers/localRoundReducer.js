import {
  SET_CUSTOM_ROUND_NAME,
  SET_CUSTOM_ROUND,
  SET_CUSTOM_ROUND_ITERATION,
  GET_LOCAL_ROUNDS_SUCCESS,
  ADD_EXERCICE_TO_CUSTOM_ROUND,
  DELETE_LOCAL_ROUND,
  PUT_EXOFORM_IN_CUSTOM_ROUND,
  DELETE_EXO_FROM_CUSTOM_ROUND,
  MOVE_EXO_IN_CUSTOM_ROUND,
} from "../actions/roundLocalActions";
/*-----------------------------------*/
const initialState = {
  isApi: false,
  allLocalRounds: [],
  roundManagerNameInput: "",
  localRound: {
    name: "",
    menuIsVisible: false,
    shrunken: true,
    type: "",
    iteration: 1,
    duration: 0,
    exercices: [
      // {
      //   isForm: false,
      //   name: "",
      //   description: "",
      //   options: [
      //     {
      //       iteration: 1,
      //       duration: 0,
      //       weight: 0,
      //       reps: 0,
      //     },
      //   ],
      // },
    ],
  },
};

const reducer = (state = initialState, action = {}) => {
  let exoShrunken = state.localRound.exercices.map((exo) => ({
    ...exo,
    isForm: false,
  }));
  const localRound = { ...state.localRound };

  switch (action.type) {
    /*--- localTraining state---*/

    case SET_CUSTOM_ROUND:
      if (action.value === "default") {
        return {
          ...state,
          localRound: {
            ...initialState.localRound,
          },
        };
      }

      return {
        ...state,
        localRound: {
          ...state.localRound,
          ...state.allLocalRounds.find((round) => round.name === action.value),
        },
      };

    case SET_CUSTOM_ROUND_NAME:
      return {
        ...state,
        roundManagerNameInput: action.value,
      };

    case GET_LOCAL_ROUNDS_SUCCESS:
      return {
        ...state,
        allLocalRounds: action.data,
      };

    case PUT_EXOFORM_IN_CUSTOM_ROUND:
      console.log(action);
      exoShrunken[action.exoIndex] = {
        isForm: false,
        name: action.exoForm.name,
        description: action.exoForm.desc,
        options: [
          {
            iteration: action.exoForm.iteration,
            duration: action.exoForm.duration,
            weight: action.exoForm.weight,
            reps: action.exoForm.reps,
          },
        ],
      };

      return {
        ...state,
        localRound: {
          ...state.localRound,
          exercices: [...exoShrunken],
        },
      };

    case DELETE_EXO_FROM_CUSTOM_ROUND:
      console.log(action);
      localRound.exercices.forEach((exo) => (exo.isForm = false));
      localRound.exercices.splice(action.exoIndex, 1);
      console.log(localRound);
      return {
        ...state,
        localRound,
      };

    case MOVE_EXO_IN_CUSTOM_ROUND:
      console.log(action);
      const [exoToMove] = localRound.exercices.splice(action.value.oldIndex, 1);
      localRound.exercices.splice(action.value.newIndex, 0, exoToMove);

      console.log(localRound.exercices);
      return {
        ...state,
        localRound: {
          ...state.localRound,
          exercices: localRound.exercices,
        },
      };

    case ADD_EXERCICE_TO_CUSTOM_ROUND:
      return {
        ...state,
        localRound: {
          ...state.localRound,
          exercices: [
            ...state.localRound.exercices,
            {
              isForm: false,
              name: "Un nouvel exercice",
              description: "",
              options: [
                {
                  iteration: 1,
                  duration: 0,
                  weight: 0,
                  reps: 0,
                },
              ],
            },
          ],
        },
      };

    case SET_CUSTOM_ROUND_ITERATION:
      localRound.iteration = action.value;
      return {
        ...state,
        localRound,
      };

    case DELETE_LOCAL_ROUND:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
