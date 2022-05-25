import { PUT_EXOFORM_IN_LOCAL_TRAINING } from "../actions/trainingLocalActions";
import { SHOW_EXO_FORM, SHOW_EXO_IN_LIST } from "../actions/exoFormActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) => {
  switch (action.type) {
    case PUT_EXOFORM_IN_LOCAL_TRAINING:
      action.exoForm = store.getState().exoForm;
      console.log("exoForm", action);
      next(action);
      break;

    case SHOW_EXO_FORM:
      const { roundIndex, exoIndex, location } = action.value;
      const exoToShow =
        location === "/entrainement"
          ? store.getState().localTraining.localTraining.rounds[roundIndex]
              .exercices[exoIndex]
          : store.getState().localRound.exercices[exoIndex];

      action.value.exoToShow = {
        name: exoToShow.name,
        desc: exoToShow.description,
        iteration: exoToShow.options[0].iteration,
        reps: exoToShow.options[0].reps,
        duration: exoToShow.options[0].duration,
        weight: exoToShow.options[0].weight,
      };
      console.log(action);
      next(action);
      break;

    case SHOW_EXO_IN_LIST:
      console.log("show exo in list", action);
      next(action);
      break;

    default:
      next(action);
  }
};
