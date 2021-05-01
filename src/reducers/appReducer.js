import {TOGGLE_MENU} from '../actions/appActions';

const initialState = {
  menuIsVisible: false
}

const reducer = (state=initialState, action={}) => {
  
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible
      }
    default:
      return state;
  }
}

export default reducer;