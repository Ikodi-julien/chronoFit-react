import { TOGGLE_MENU, SET_APP_COMMENT_IS_OPEN } from "../actions/appActions";

import {
  PUT_EXOFORM_IN_LOCAL_TRAINING,
  MOVE_EXO_IN_STATE,
  ADD_EXERCICE_TO_LOCAL_TRAINING,
} from "../actions/trainingLocalActions";
import {
  DELETE_EXO_FROM_CUSTOM_ROUND,
  MOVE_EXO_IN_CUSTOM_ROUND,
} from "../actions/roundLocalActions";
import {
  SHOW_EXO_IN_TRAINING_FORM,
  SHOW_EXO_IN_LIST,
} from "../actions/exoFormActions";
import { GOT_ERROR } from "../actions/trainingAjaxActions";

const initialState = {
  menuIsVisible: false,
  isToRender: 0,
  messageToUser: "",
  commentIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible,
      };

    case GOT_ERROR:
      return {
        ...state,
        messageToUser: action.value,
        commentIsOpen: true,
      };

    case SET_APP_COMMENT_IS_OPEN:
      return {
        ...state,
        commentIsOpen: action.value,
      };

    case PUT_EXOFORM_IN_LOCAL_TRAINING:
    case MOVE_EXO_IN_STATE:
    case MOVE_EXO_IN_CUSTOM_ROUND:
    case ADD_EXERCICE_TO_LOCAL_TRAINING:
    case DELETE_EXO_FROM_CUSTOM_ROUND:
    case SHOW_EXO_IN_TRAINING_FORM:
    case SHOW_EXO_IN_LIST:
      return {
        ...state,
        isToRender: Math.random(),
      };

    default:
      return state;
  }
};

export default reducer;
