/* eslint-disable import/no-anonymous-default-export */
import {
  SET_READ_TRAINING,
  // setReadTraining,
  setCurrentExo,
  endTraining,
  TELL_EXO_NAME,
  SET_CURRENT_EXO,
  pauseTraining,
  startTraining,
  // stopTraining,
  setChronoTime,
  setCountdownTime,
  RESET_READTRAINING,
  setGlobalChronoTime,
  setGlobalCountdownTime,
  tellExoName,
  // STOP_TRAINING,
} from '../actions/readTrainingActions';
import trainingServices from '../services/training';

export default (store) => (next) => (action) => {
  const {currentTraining} = store.getState().apiTraining;
  const {localTraining} = store.getState().localTraining;
  const {timeline, exoPlaying, trainingDetails, isSpeaking} = store.getState().readTraining;
  
  switch (action.type) {
    case SET_READ_TRAINING:

    if (action.value === 'girl') {
      action.trainingDetails = {
        name: currentTraining.name,
        duration: trainingServices.getTrainingDuration(currentTraining),
        timecap: currentTraining.timecap * 60,
      };
      action.viewOrigin = '/girls';
      action.timeline = trainingServices.getTimeLine(currentTraining);
      
    } else {
      action.trainingDetails = {
        name: localTraining.name,
        duration: trainingServices.getTrainingDuration(localTraining),
        timecap: localTraining.timecap * 60,
      };
      action.viewOrigin = '/custom_training';
      action.timeline = trainingServices.getTimeLine(localTraining);
    }
      
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
        
        // Dire le nom de l'exo actuel
        if (isSpeaking && timeline.length > 4) store.dispatch(tellExoName());
      }
        
      break;
    
    case TELL_EXO_NAME:
      next(action);
      console.log(navigator.userAgent);
      // Disable SpeechSynthesis for Opera, not supported with android
      if (navigator.userAgent.indexOf("OPR") === -1)  {
        let utterance = new SpeechSynthesisUtterance(exoPlaying.name);
        speechSynthesis.speak(utterance);
      }

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