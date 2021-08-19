export const SET_READ_TRAINING = 'SET_READ_TRAINING';
export const setReadTraining = (value) => ({type: SET_READ_TRAINING, value})
export const SET_CURRENT_EXO = 'SET_CURRENT_EXO';
export const setCurrentExo = (exoIndex) => ({type: SET_CURRENT_EXO, exoIndex})
export const START_TRAINING = 'START_TRAINING';
export const startTraining = () => ({type: START_TRAINING});
export const PAUSE_TRAINING = 'PAUSE_TRAINING';
export const pauseTraining = () => ({type: PAUSE_TRAINING});
export const STOP_TRAINING = 'STOP_TRAINING';
export const stopTraining = () => ({type: STOP_TRAINING});
export const SET_COUNTDOWN_TIME = 'SET_COUNTDOWN_TIME';
export const setCountdownTime = (time) => ({type: SET_COUNTDOWN_TIME, time});
export const SET_GLOBAL_COUNTDOWN_TIME = 'SET_GLOBAL_COUNTDOWN_TIME';
export const setGlobalCountdownTime = (time) => ({type: SET_GLOBAL_COUNTDOWN_TIME, time});
export const SET_GLOBAL_CHRONO_TIME = 'SET_GLOBAL_CHRONO_TIME';
export const setGlobalChronoTime = (time) => ({type: SET_GLOBAL_CHRONO_TIME, time});
export const SET_CHRONO_TIME = 'SET_CHRONO_TIME';
export const setChronoTime = (time) => ({type: SET_CHRONO_TIME, time});
export const RESET_READTRAINING = 'RESET_READTRAINING';
export const resetReadTraining = () => ({type: RESET_READTRAINING});
export const END_TRAINING = 'END_TRAINING';
export const endTraining = () => ({type: END_TRAINING});
export const TELL_NEXT_EXO_NAME = 'TELL_NEXT_EXO_NAME';
export const tellNextExoName = () => ({type: TELL_NEXT_EXO_NAME});
export const SET_ISTRANSITION = 'SET_ISTRANSITION';
export const setIsTransition = (bool) => ({type: SET_ISTRANSITION, value: bool});
export const RESET_ALL = 'RESET_ALL';
export const resetAll = () => ({type: RESET_ALL});