import { PUT_EXOFORM_IN_LOCAL_TRAINING } from "../actions/trainingLocalActions";
import { PUT_EXOFORM_IN_CUSTOM_ROUND } from "../actions/roundLocalActions";
import {
  SHOW_EXO_IN_TRAINING_FORM,
  SHOW_EXO_ROUND_FORM,
  SHOW_EXO_IN_LIST,
} from "../actions/exoFormActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) => {
  switch (action.type) {
    case PUT_EXOFORM_IN_LOCAL_TRAINING:
      action.exoForm = store.getState().exoForm;
      console.log("exoForm", action);
      next(action);
      break;

    case SHOW_EXO_IN_TRAINING_FORM:
      const { roundIndex, exoIndex } = action.value;
      const exoToShow =
        store.getState().localTraining.localTraining.rounds[roundIndex]
          .exercices[exoIndex];

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

    /*--------------------------------*/
    /*----------- ROUND --------------*/
    /*--------------------------------*/
    case SHOW_EXO_ROUND_FORM:
      const exoRound =
        store.getState().localRound.localRound.exercices[action.value.exoIndex];

      action.value.exoToShow = {
        name: exoRound.name,
        desc: exoRound.description,
        iteration: exoRound.options[0].iteration,
        reps: exoRound.options[0].reps,
        duration: exoRound.options[0].duration,
        weight: exoRound.options[0].weight,
      };
      console.log(action);
      next(action);
      break;

    case SHOW_EXO_IN_LIST:
      console.log("show exo in list", action);
      next(action);
      break;

    case PUT_EXOFORM_IN_CUSTOM_ROUND:
      action.exoForm = store.getState().exoForm;
      console.log("exoForm", action);
      next(action);
      break;

    default:
      next(action);
  }
};
