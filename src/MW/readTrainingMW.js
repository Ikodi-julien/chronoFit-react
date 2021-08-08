/* eslint-disable import/no-anonymous-default-export */
import {
  SET_READ_TRAINING,
  setCurrentExo,
  SET_GLOBAL_TIME,
  endTraining,
  TELL_NEXT_EXO_NAME,
} from '../actions/readTrainingActions';
import trainingServices from '../services/training';

export default (store) => (next) => (action) => {
  const {localTraining} = store.getState().localTraining;
  const {nextExo} = store.getState().readTraining;
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
      store.dispatch(setCurrentExo(0));
      break;
      
    case SET_GLOBAL_TIME:
      next(action);
      // if global time remaining < 0.1s, put readTraining.isCounting isCounting to false,
      if (action.time < 0.1) store.dispatch(endTraining());
      break;
    
    case TELL_NEXT_EXO_NAME:
      console.log(action);
      let utterance = new SpeechSynthesisUtterance(nextExo.name);
      speechSynthesis.speak(utterance);
      break;
      
    default :
      next(action);
  }
}