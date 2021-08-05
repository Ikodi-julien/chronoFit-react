import {TOGGLE_MENU} from '../actions/appActions';

import {
  PUT_EXOFORM_IN_LOCAL_TRAINING,
  MOVE_EXO_IN_STATE,
  ADD_EXERCICE_TO_LOCAL_TRAINING,
  SHOW_EXO_FORM,
  SHOW_EXO_IN_LIST,
} from '../actions/trainingLocalActions';

const initialState = {
  menuIsVisible: false,
  isToRender: 0,
}

const reducer = (state=initialState, action={}) => {
  
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible
      }
      
    case PUT_EXOFORM_IN_LOCAL_TRAINING:
    case MOVE_EXO_IN_STATE:
    case ADD_EXERCICE_TO_LOCAL_TRAINING:
    case SHOW_EXO_FORM:
    case SHOW_EXO_IN_LIST:
      return {
        ...state,
        isToRender: Math.random(),
      }
      
    default:
      return state;
  }
}

export default reducer;