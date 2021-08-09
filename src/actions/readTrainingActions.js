export const SET_READ_TRAINING = 'SET_READ_TRAINING';
export const setReadTraining = () => ({type: SET_READ_TRAINING})
export const SET_CURRENT_EXO = 'SET_CURRENT_EXO';
export const setCurrentExo = (exoIndex) => ({type: SET_CURRENT_EXO, exoIndex})
export const START_TRAINING = 'START_TRAINING';
export const startTraining = () => ({type: START_TRAINING});
export const PAUSE_TRAINING = 'PAUSE_TRAINING';
export const pauseTraining = () => ({type: PAUSE_TRAINING});
export const SET_EXOPLAYING_TIME = 'SET_EXOPLAYING_TIME';
export const setExoPlayingTime = (time) => ({type: SET_EXOPLAYING_TIME, time});
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
export const SET_GLOBAL_COUNTDOWN_SKIP_TIME = 'SET_GLOBAL_COUNTDOWN_SKIP_TIME';
export const setGlobalCountdownSkipTime = (bool) => ({type: SET_GLOBAL_COUNTDOWN_SKIP_TIME, value: bool});
