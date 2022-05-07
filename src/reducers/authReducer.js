import { GET_ME_SUCCESS, LOGOUT_SUCCESS } from "../actions/authActions";

const initialState = {
  id: -1,
  firstname: "",
  lastname: "",
  nickname: "",
  email: "",
  isUserLoggued: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ME_SUCCESS:
      console.log("get me success", action.value);
      return { ...state, ...action.value, isUserLoggued: true };

    case LOGOUT_SUCCESS:
      console.log("logout success");
      return { ...state, isUserLoggued: false };

    default:
      return state;
  }
};

export default reducer;
