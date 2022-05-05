import axios from "axios";
import { AUTH_URL } from "../settings";
import { GET_ME, getMeSuccess } from "../actions/authActions";

const MW = (store) => (next) => async (action) => {
  switch (action.type) {
    case GET_ME:
      // TODO: Conditionner à l'état logguer ou pas
      const me = await axios.get(`${AUTH_URL}/me`, { withCredentials: true });

      console.log("GET ME", me);
      if (me.status === 200) store.dispatch(getMeSuccess(me.data));
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default MW;
