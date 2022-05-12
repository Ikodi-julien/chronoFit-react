import { combineReducers } from "redux";

import localTrainingReducer from "./localTrainingReducer";
import appReducer from "./appReducer";
import apiTrainingReducer from "./apiTrainingReducer";
import readTrainingReducer from "./readTrainingReducer";
import trainingsDoneReducer from "./trainingsDoneReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  app: appReducer,
  apiTraining: apiTrainingReducer,
  localTraining: localTrainingReducer,
  readTraining: readTrainingReducer,
  trainingsDone: trainingsDoneReducer,
  auth: authReducer,
});

export default rootReducer;
