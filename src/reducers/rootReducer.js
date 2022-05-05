import { combineReducers } from "redux";

import localTrainingReducer from "./localTrainingReducer";
import appReducer from "./appReducer";
import apiTrainingReducer from "./apiTrainingReducer";
import readTrainingReducer from "./readTrainingReducer";
import recapTrainingsReducer from "./recapTrainingsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  app: appReducer,
  apiTraining: apiTrainingReducer,
  localTraining: localTrainingReducer,
  readTraining: readTrainingReducer,
  recapTrainings: recapTrainingsReducer,
  auth: authReducer,
});

export default rootReducer;
