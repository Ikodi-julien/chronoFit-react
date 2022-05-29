/* eslint-disable import/no-anonymous-default-export */
import {
  GET_LOCAL_TRAININGS,
  getLocalTrainings,
  getLocalTrainingsSuccess,
  setLocalTraining,
  setLocalTrainingName,
  CREATE_LOCAL_TRAINING,
  DELETE_LOCAL_TRAINING,
} from "../actions/trainingLocalActions";
import {
  GET_LOCAL_ROUNDS,
  CREATE_LOCAL_ROUND,
  getLocalRounds,
  getLocalRoundsSuccess,
  setCustomRoundName,
  setCustomRound,
} from "../actions/roundLocalActions";
/*---------------------------------------*/
import localstorage from "../services/localstorage";
/*---------------------------------------*/

export default (store) => (next) => (action) => {
  const { localTraining, trainingManagerNameInput } =
    store.getState().localTraining;
  const { localRound } = store.getState().localRound;

  switch (action.type) {
    case CREATE_LOCAL_TRAINING:
      next(action);
      const newTraining = { ...localTraining };

      newTraining.name =
        trainingManagerNameInput !== ""
          ? trainingManagerNameInput
          : localTraining.name;

      localstorage.createTraining(newTraining);

      store.dispatch(getLocalTrainings());
      store.dispatch(setLocalTraining(newTraining.name));
      store.dispatch(setLocalTrainingName(""));
      break;

    case GET_LOCAL_TRAININGS:
      next(action);
      const localTrainings = localstorage.getTrainings();
      store.dispatch(getLocalTrainingsSuccess(localTrainings));
      store.dispatch(setLocalTrainingName(""));

      break;

    case DELETE_LOCAL_TRAINING:
      next(action);
      localstorage.deleteTraining(localTraining.name);
      store.dispatch(getLocalTrainings());
      store.dispatch(setLocalTraining("default"));
      store.dispatch(setLocalTrainingName(""));

      break;

    case GET_LOCAL_ROUNDS:
      next(action);
      const localRounds = localstorage.getRounds();
      store.dispatch(getLocalRoundsSuccess(localRounds));
      store.dispatch(setCustomRoundName(""));

      break;

    case CREATE_LOCAL_ROUND:
      next(action);
      const newRound = { ...localRound };

      newRound.name =
        trainingManagerNameInput !== ""
          ? trainingManagerNameInput
          : localTraining.name;

      localstorage.createRound(newRound);

      store.dispatch(getLocalRounds());
      store.dispatch(setCustomRound(newRound.name));
      store.dispatch(setCustomRoundName(""));
      break;

    default:
      next(action);
  }
};
