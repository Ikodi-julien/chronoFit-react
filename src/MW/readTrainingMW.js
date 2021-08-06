/* eslint-disable import/no-anonymous-default-export */
import {
  SET_READ_TRAINING
} from '../actions/readTrainingActions';
import trainingServices from '../services/training';

export default (store) => (next) => (action) => {
  const {localTraining} = store.getState().localTraining;
  // console.log(localTraining);
  
  switch (action.type) {
    case SET_READ_TRAINING:
      // console.log('readTrainingMW', trainingServices.getTrainingDuration(localTraining));
      action.trainingDetails = {
        name: localTraining.name,
        duration: trainingServices.getTrainingDuration(localTraining),
      };
      
      action.timeline = trainingServices.getTimeLine(localTraining);
      
      next(action);
      break;
      
    default :
      next(action);
  }
}