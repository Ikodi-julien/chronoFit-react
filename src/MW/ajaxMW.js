/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

import { APP_URL } from "../settings";

import {
  GET_TRAININGS_DONE,
  setTrainingsDone,
  // GET_CURRENT_TRAINING,
  getCurrentTrainingSuccess,
  GET_GIRLS,
  getGirlsSuccess,
  GET_ONE_GIRL,
  gotError,
} from "../actions/trainingAjaxActions";
import {
  setReadTraining,
  POST_NEW_TRAINING,
} from "../actions/readTrainingActions";

export default (store) => (next) => (action) => {
  const errorMsg = (
    <div>
      Oups, quelque chose ne se passe pas comme prévu. <br />
      <br /> Si le problème persiste, vous pouvez contacter l'équipe via le lien
      en bas de la page d'accueil
    </div>
  );
  const readTrainingState = store.getState().readTraining;

  switch (action.type) {
    case GET_TRAININGS_DONE:
      next(action);
      axios
        .get(`${APP_URL}/chronofit/trainings-done`)
        .then((res) => {
          console.log(res.data);
          store.dispatch(setTrainingsDone(res.data));
        })
        .catch((err) => console.error(err));
      break;

    case GET_GIRLS:
      next(action);
      axios
        .get(`${APP_URL}/girls`)
        .then((res) => store.dispatch(getGirlsSuccess(res.data)))
        .catch((err) => {
          store.dispatch(gotError(errorMsg));
        });
      break;

    case GET_ONE_GIRL:
      next(action);
      axios
        .get(`${APP_URL}/girl/${action.value}`)
        .then((res) => {
          store.dispatch(getCurrentTrainingSuccess(res.data));
          store.dispatch(setReadTraining("girl"));
        })
        .catch((err) => {
          store.dispatch(gotError(errorMsg));
        });
      break;

    case POST_NEW_TRAINING:
      const { trainingDetails, trainingRecord } = readTrainingState;
      const training = { ...trainingDetails, exos: trainingRecord };
      console.log(training);
      axios
        .post(`${APP_URL}/chronofit/new-training`, {
          ...training,
        })
        .then((res) => console.log(res.data))
        .catch((error) => {
          store.dispatch(gotError(errorMsg));
          console.log(error);
        });

      next(action);
      break;

    default:
      next(action);
  }
};
