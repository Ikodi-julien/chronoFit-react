import axios from "axios";
import { AUTH_URL } from "../settings";
import {
  GET_ME,
  getMeSuccess,
  LOGOUT,
  logoutSuccess,
} from "../actions/authActions";

const MW = (store) => (next) => async (action) => {
  switch (action.type) {
    case GET_ME:
      // TODO: Conditionner à l'état logguer ou pas
      try {
        const me = await axios.get(`${AUTH_URL}/me`, { withCredentials: true });
        console.log("GET ME", me);
        if (me.status === 200) store.dispatch(getMeSuccess(me.data));
      } catch (error) {
        console.log("error GET ME", error);
      }

      next(action);
      break;

    case LOGOUT:
      try {
        const logout = await axios.post(
          `${AUTH_URL}/logout`,
          {},
          { withCredentials: true }
        );
        console.log("status LOGOUT", logout.status);
        if (logout.status === 200) store.dispatch(logoutSuccess());
      } catch (error) {
        console.log("error LOGOUT", error);
      }

      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default MW;
