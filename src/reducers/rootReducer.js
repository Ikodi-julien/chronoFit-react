import { combineReducers } from "redux";

import localTrainingReducer from "./localTrainingReducer";
import appReducer from "./appReducer";
import apiTrainingReducer from "./apiTrainingReducer";
import readTrainingReducer from "./readTrainingReducer";
import recapTrainingsReducer from "./recapTrainingsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  apiTraining: apiTrainingReducer,
  localTraining: localTrainingReducer,
  readTraining: readTrainingReducer,
  recapTrainings: recapTrainingsReducer,
});

export default rootReducer;
