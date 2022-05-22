import { PUT_EXOFORM_IN_LOCAL_TRAINING } from "../actions/trainingLocalActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) => {
  switch (action.type) {
    case PUT_EXOFORM_IN_LOCAL_TRAINING:
      action.exoForm = store.getState().exoForm.exoForm;
      console.log("exoForm", action);
      next(action);
      break;
    default:
      next(action);
  }
};
