export const SET_READ_TRAINING = "SET_READ_TRAINING";
export const setReadTraining = (value) => ({ type: SET_READ_TRAINING, value });
export const SET_CURRENT_EXO = "SET_CURRENT_EXO";
export const setCurrentExo = (exoIndex) => ({
  type: SET_CURRENT_EXO,
  exoIndex,
});
export const ADD_CHRONO_TO_RECORD = "ADD_CHRONO_TO_RECORD";
export const addChronoToRecord = () => ({ type: ADD_CHRONO_TO_RECORD });
export const ADD_COUNTDOWN_TO_RECORD = "ADD_COUNTDOWN_TO_RECORD";
export const addCountdownToRecord = () => ({ type: ADD_COUNTDOWN_TO_RECORD });
export const START_TRAINING = "START_TRAINING";
export const startTraining = () => ({ type: START_TRAINING });
export const PAUSE_TRAINING = "PAUSE_TRAINING";
export const pauseTraining = () => ({ type: PAUSE_TRAINING });
export const STOP_TRAINING = "STOP_TRAINING";
export const stopTraining = () => ({ type: STOP_TRAINING });
export const SET_COUNTDOWN_TIME = "SET_COUNTDOWN_TIME";
export const setCountdownTime = (time) => ({ type: SET_COUNTDOWN_TIME, time });
export const SET_GLOBAL_COUNTDOWN_TIME = "SET_GLOBAL_COUNTDOWN_TIME";
export const setGlobalCountdownTime = (time) => ({
  type: SET_GLOBAL_COUNTDOWN_TIME,
  time,
});
export const SET_GLOBAL_CHRONO_TIME = "SET_GLOBAL_CHRONO_TIME";
export const setGlobalChronoTime = (time) => ({
  type: SET_GLOBAL_CHRONO_TIME,
  time,
});
export const SET_CHRONO_TIME = "SET_CHRONO_TIME";
export const setChronoTime = (time) => ({ type: SET_CHRONO_TIME, time });
export const RESET_READTRAINING = "RESET_READTRAINING";
export const resetReadTraining = () => ({ type: RESET_READTRAINING });
export const END_TRAINING = "END_TRAINING";
export const endTraining = () => ({ type: END_TRAINING });
export const TELL_EXO_NAME = "TELL_EXO_NAME";
export const tellExoName = () => ({ type: TELL_EXO_NAME });
export const SET_ISTRANSITION = "SET_ISTRANSITION";
export const setIsTransition = (bool) => ({
  type: SET_ISTRANSITION,
  value: bool,
});
export const RESET_ALL = "RESET_ALL";
export const resetAll = () => ({ type: RESET_ALL });
export const SET_IS_SPEAKING = "SET_IS_SPEAKING";
export const setIsSpeaking = (bool) => ({ type: SET_IS_SPEAKING, value: bool });
export const SET_END_TRAINING_VALUE = "SET_END_TRAINING_VALUE";
export const setEndTrainingValue = (index, name, value) => ({
  type: SET_END_TRAINING_VALUE,
  index,
  name,
  value,
});
export const RESET_TRAININGRECORD = "RESET_TRAININGRECORD";
export const resetRecordTraining = () => ({ type: RESET_TRAININGRECORD });
export const POST_NEW_TRAINING = "POST_NEW_TRAINING";
export const postNewTraining = () => ({ type: POST_NEW_TRAINING });
