/* eslint-disable import/no-anonymous-default-export */
import {
  SET_READ_TRAINING,
  // setReadTraining,
  setCurrentExo,
  endTraining,
  TELL_NEXT_EXO_NAME,
  SET_CURRENT_EXO,
  pauseTraining,
  startTraining,
  // stopTraining,
  setChronoTime,
  setCountdownTime,
  RESET_READTRAINING,
  setGlobalChronoTime,
  setGlobalCountdownTime,
  // STOP_TRAINING,
} from '../actions/readTrainingActions';
import trainingServices from '../services/training';

export default (store) => (next) => (action) => {
  const {localTraining} = store.getState().localTraining;
  const {nextExo, timeline, exoPlaying, trainingDetails} = store.getState().readTraining;
  // console.log(localTraining);
  
  switch (action.type) {
    case SET_READ_TRAINING:

    action.trainingDetails = {
        name: localTraining.name,
        duration: trainingServices.getTrainingDuration(localTraining),
        timecap: localTraining.timecap * 60,
      };
      
      action.timeline = trainingServices.getTimeLine(localTraining);
      
      next(action);
      store.dispatch(setCurrentExo(0));
      break;
      
    case SET_CURRENT_EXO:
      if (!trainingDetails.finished) {
        
        next(action);
        if (timeline[action.exoIndex].end) {
          // It's beyond the last exercice in timeline
          store.dispatch(endTraining());
          break;
        }
        // This is to handle several chrono in a row, need to be stopped, reseted and started again. This has no effect on GlobalChrono and GlobalCountdown
        store.dispatch(pauseTraining());
        setTimeout(() => {
          store.dispatch(setChronoTime(0));
          store.dispatch(setCountdownTime(store.getState().readTraining.exoPlaying.duration));
          // Don't restart if already paused before changing exo
          if (exoPlaying.isCounting) store.dispatch(startTraining())
        }, 110);
      }
        
      break;
    
    case TELL_NEXT_EXO_NAME:
      next(action);
      console.log(action);
      let utterance = new SpeechSynthesisUtterance(nextExo.name);
      speechSynthesis.speak(utterance);
      break;
      
    case RESET_READTRAINING:
      next(action);
      setTimeout(() => {
        store.dispatch(setGlobalChronoTime(0));
        store.dispatch(setCountdownTime(store.getState().readTraining.exoPlaying.duration));
        store.dispatch(setGlobalCountdownTime(store.getState().readTraining.trainingDetails.timecap));
      }, 110);
      break;
      
    default :
      next(action);
  }
}