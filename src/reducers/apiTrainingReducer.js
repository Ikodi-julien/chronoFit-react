import {
  SET_TRAINING_ID,
} from '../actions/trainingViewActions';
import {
  GET_TRAININGS_SUCCESS,
  GET_CURRENT_TRAINING_SUCCESS,
} from '../actions/trainingAjaxActions';

const initialState = {
  allApiTrainings: [],
  apiTrainingId: 0,
  apiTraining: {}, 
}

const reducer = (state=initialState, action={}) => {
  
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
        apiTraining: action.data,
      }
    
    case SET_TRAINING_ID:
      return {
        ...state,
        apiTrainingId: action.value,
      }
    
    default :
    return state;
  }
}

export default reducer;