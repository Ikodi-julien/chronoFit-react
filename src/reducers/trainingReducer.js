import {
  ADD_EXO, 
  EXOFORM_INPUT_CHANGE,
  SET_TRAINING_ID,
  SET_ROUNDMENU_IS_VISIBLE,
  SET_SHRUNKEN_ROUND,
  SET_ROUND_ITERATION,
  SHOW_EXO_FORM,
  SHOW_EXO_IN_LIST,
  MOVE_ROUND_IN_STATE,
  MOVE_EXO_IN_STATE,
} from '../actions/trainingViewActions';
import {
  GET_TRAININGS_SUCCESS,
  GET_CURRENT_TRAINING_SUCCESS,
} from '../actions/trainingAjaxActions';
import {
  SET_LOCAL_TRAINING,
  SET_LOCAL_TRAINING_NAME,
  SET_LOCAL_TRAINING_TYPE,
  GET_LOCAL_TRAININGS_SUCCESS,
  ADD_ROUND_TO_LOCAL_TRAINING,
  ADD_EXERCICE_TO_LOCAL_TRAINING,
  DELETE_ROUND_FROM_LOCAL_TRAINING,
  PUT_EXOFORM_IN_LOCAL_TRAINING,
  DELETE_EXO_FROM_ROUND,
} from '../actions/trainingLocalActions';
/*-----------------------------------*/
import trainingServices from '../services/training';
/*----------------------------------*/
// import {currentTraining} from '../data/currentTraining';
// import {allTrainings} from '../data/allTrainings';
/*----------------------------------*/
const initialState = {
  currentTrainingId: 0,
  allTrainings: [],
  currentTraining: {},
  isToRender: 0,
  
  allLocalTrainings: [],
  localTraining: {
    name: 'Work Of Day',
    type: 'emom',
    rounds: [
      {
        shrunken: true,
        menuIsVisible: false,
        iteration: 1,
        duration: 0,
        exercices: [
          {
            isForm: false,
            name: 'Un exercice',
            description: '',
            options: [
              {
                iteration: 1,
                duration: 0,
                weight: 0,
                reps: 0,
              }
            ]
          }
        ],
      }
    ]
  },
  // This is TrainingManager name input
  localTrainingName: '',
  // Those are the values used in ExoForm, put in training if submited.
  exoForm: {
    name: '',
    iteration: 1,
    desc: '',
    reps: '',
    duration: '',
    weight: '',
  }
}

const reducer = (state=initialState, action={}) => {
  
  const {rounds} = state.localTraining;
  
  const allRoundMenuHidden = rounds ? rounds.map(round => ({...round, menuIsVisible: false})) : null;
  
  let allRoundsExoShrunken = rounds ? rounds.map(round => {
    round.exercices.forEach(exo => exo.isForm = false)
    return round
  }) : null
  
  switch (action.type) {
    case EXOFORM_INPUT_CHANGE:
      return {
        ...state,
        exoForm: {
          ...state.exoForm,
          [action.name]: action.value,
        }
      }
      
    case PUT_EXOFORM_IN_LOCAL_TRAINING:
      allRoundsExoShrunken[action.roundIndex].exercices[action.exoIndex] = {
        ...allRoundsExoShrunken[action.roundIndex].exercices[action.exoIndex],
        name: state.exoForm.name,
        description: state.exoForm.desc,
        options: [
          {
            iteration: state.exoForm.iteration,
            duration: state.exoForm.duration,
            weight: state.exoForm.weight,
            reps: state.exoForm.reps,
          }
        ]
      }
      return {
        ...state,
        isToRender: Math.random(),
        localTraining: {
          ...state.localTraining,
          rounds: allRoundsExoShrunken
        },
        exoForm: initialState.exoForm,
      }
    
    case ADD_EXO:
      const {nameInput, descInput, durationInput, repsInput, weightInput} = state.exoForm;
      console.log(nameInput, descInput, durationInput, repsInput, weightInput);
      // Vérification du contenu des inputs et du type de value
      if (!nameInput.value || !descInput.value ) {
        console.log('1er');
        return state
      };

      if (
        (nameInput.value && typeof nameInput.value !== 'string') ||
        (descInput.value && typeof descInput.value !== 'string') ||
        (durationInput.value && typeof durationInput.value !== 'string') ||
        (repsInput.value && typeof repsInput.value !== 'string' )||
        (weightInput.value && typeof weightInput.value !== 'string')
      ) {
        console.log('2em')
        return state
      }
      
      return {
        ...state,
        exoList: [
          ...state.exoList,
          {
            name: nameInput.value,
            description: descInput.value,
            duration: +durationInput.value,
            reps: +repsInput.value,
            weight: +weightInput.value
          }
        ]
      }
    
    case DELETE_EXO_FROM_ROUND:
      
      let roundWithoutExo = allRoundsExoShrunken.find(round => round === allRoundsExoShrunken[action.roundIndex]);
      
      roundWithoutExo.exercices = roundWithoutExo.exercices.filter(exo => exo !== roundWithoutExo.exercices[action.exoIndex])
      
      allRoundsExoShrunken[action.roundIndex] = roundWithoutExo;
      
    return {
      ...state,
      localTraining: {
        ...state.localTraining,
        rounds: allRoundsExoShrunken
      }
    }
      
    case MOVE_ROUND_IN_STATE:
      const [roundToMove] = rounds.splice(action.oldIndex, 1);
      rounds.splice(action.newIndex, 0, roundToMove);
      
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds,
        }
      }
      
    case MOVE_EXO_IN_STATE:
      
      return {
        ...state,
        isToRender: Math.random(),
        localTraining: {
          ...state.localTraining,
          rounds: trainingServices.changeExoOrder(rounds, action) ,
        }
      }
    
    case GET_TRAININGS_SUCCESS:
      // console.log(action);
      return {
        ...state,
        allTrainings: action.data,
      }
    
    case SET_TRAINING_ID:
      return {
        ...state,
        currentTrainingId: action.value,
      }
      
    case GET_CURRENT_TRAINING_SUCCESS:
      return {
        ...state,
        currentTraining: action.data,
      }
    
    case SET_LOCAL_TRAINING:
      if (action.value === 'default') {
        return {
          ...state,
          localTraining: {...initialState.localTraining},
        }
      }
      
      
      
      return {
        ...state,
        localTraining: state.allLocalTrainings.find(training =>  training.name === action.value),
      }
      
    case SET_LOCAL_TRAINING_NAME:
      return {
        ...state,
        localTrainingName: action.value
      }
    
    case SET_LOCAL_TRAINING_TYPE:
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          type: action.value,
        }
      }
      
    case GET_LOCAL_TRAININGS_SUCCESS:
      return {
        ...state,
        allLocalTrainings: action.data,
      }
    
    case ADD_ROUND_TO_LOCAL_TRAINING:
      
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds : [
            ...allRoundMenuHidden,
            {
              menuIsVisible: false,
              iteration: 1,
              duration: 0,
              exercices: [
                {
                  isForm: false,
                  name: 'A définir',
                  description: '',
                  options: [
                    {
                      iteration: '1',
                      duration: '0',
                      weight: '0',
                      reps: '0',
                    }
                  ]
                }
              ],
            }
          ]
        }
      }
    
    case DELETE_ROUND_FROM_LOCAL_TRAINING:
      const newRounds = rounds.filter(round => round !== rounds[action.value]);
      
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds: newRounds,
        }
      }
      
    case ADD_EXERCICE_TO_LOCAL_TRAINING:
      // console.log(action);
      const round = allRoundMenuHidden[action.value.roundId];
      
      round.exercices.push(
        {
          isForm: true,
          name: '',
          description: '',
          // isBenchmark: false,
          options: [{
              duration: 0,
              weight: 0,
              reps: 0,
            }]
        })
      
      allRoundMenuHidden[action.value.roundId]= round;
      
      return {
        ...state,
        isToRender: Math.random(),
        localTraining : {
          ...state.localTraining,
          rounds: allRoundMenuHidden,
        }
      }
      
    case SET_ROUNDMENU_IS_VISIBLE:
      rounds[action.value.index].menuIsVisible = action.value.bool;
      
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds
        }
      }
    
    case SET_SHRUNKEN_ROUND:
      console.log(action);
      rounds[action.value.index].shrunken = action.value.bool;
      console.log(rounds);
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds
        }
      }
      
    case SET_ROUND_ITERATION:
      
      rounds[action.value.index].iteration = action.value.value;
      return {
        ...state,
        localTraining: {
          ...state.localTraining,
          rounds
        }
      }
      
    case SHOW_EXO_FORM:
      // This shows ExoForm but all exercices have been shrunk
      allRoundsExoShrunken[action.value.roundIndex].exercices[action.value.exoIndex].isForm = true;
      
      const exoToShow = allRoundsExoShrunken[action.value.roundIndex].exercices[action.value.exoIndex];
      
      return {
        ...state,
        isToRender: Math.random(),
        localTraining: {
          ...state.localTraining,
          rounds,
        },
        exoForm: {
        name: exoToShow.name,
        desc: exoToShow.description,
        iteration: exoToShow.options[0].iteration,
        reps: exoToShow.options[0].reps,
        duration: exoToShow.options[0].duration,
        weight: exoToShow.options[0].weight,
      }
    }
    
    case SHOW_EXO_IN_LIST:
      // This hides all ExoForm
      rounds[action.value.roundIndex].exercices[action.value.exoIndex].isForm = false;
    
    return {
      ...state,
      isToRender: Math.random(),
      localTraining: {
        ...state.localTraining,
        rounds,
      },
      
    }
    default:
      return state;
  }
}

export default reducer;