import {combineReducers} from 'redux';

import localTrainingReducer from './localTrainingReducer';
import appReducer from './appReducer';
import apiTrainingReducer from './apiTrainingReducer';

const rootReducer = combineReducers({
  app: appReducer,
  apiTraining: apiTrainingReducer,
  localTraining: localTrainingReducer
})

export default rootReducer;