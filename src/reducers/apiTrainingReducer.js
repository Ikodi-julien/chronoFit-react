import {
  SET_TRAINING_ID,
  SET_SHRUNKEN_API_ROUND,
} from '../actions/trainingViewActions';
import {
  GET_TRAININGS_SUCCESS,
  GET_CURRENT_TRAINING_SUCCESS,
} from '../actions/trainingAjaxActions';

const initialState = {
  allApiTrainings: [],
  currentTrainingId: 0,
  currentTraining: {}, 
}

const reducer = (state=initialState, action={}) => {
  const {rounds} = state.currentTraining;
  
  switch (action.type) {
    
    case GET_TRAININGS_SUCCESS:
      // console.log(action);
      return {
        ...state,
        allApiTrainings: action.data,
      }

    case GET_CURRENT_TRAINING_SUCCESS:
      return {
        ...state,
        currentTraining: action.data,
      }
    
    case SET_TRAINING_ID:
      return {
        ...state,
        currentTrainingId: action.value,
      }
    
    case SET_SHRUNKEN_API_ROUND:
      rounds[action.value.index].shrunken = action.value.bool;
      
      return {
        ...state,
        currentTraining: {
          ...state.currentTraining,
          rounds,
        }
      }
    default :
    return state;
  }
}

export default reducer;