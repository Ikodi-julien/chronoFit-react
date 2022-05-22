import { combineReducers } from "redux";

import localTrainingReducer from "./localTrainingReducer";
import localRoundReducer from "./localRoundReducer";
import appReducer from "./appReducer";
import apiTrainingReducer from "./apiTrainingReducer";
import readTrainingReducer from "./readTrainingReducer";
import trainingsDoneReducer from "./trainingsDoneReducer";
import authReducer from "./authReducer";
import exoForm from "./exoFormReducer";

const rootReducer = combineReducers({
  app: appReducer,
  apiTraining: apiTrainingReducer,
  auth: authReducer,
  exoForm: exoForm,
  localTraining: localTrainingReducer,
  localRound: localRoundReducer,
  readTraining: readTrainingReducer,
  trainingsDone: trainingsDoneReducer,
});

export default rootReducer;
