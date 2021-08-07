export const SET_READ_TRAINING = 'SET_READ_TRAINING';
export const setReadTraining = () => ({type: SET_READ_TRAINING})
export const SET_CURRENT_EXO = 'SET_CURRENT_EXO';
export const setCurrentExo = (exoIndex) => ({type: SET_CURRENT_EXO, exoIndex})
export const START_CHRONO = 'START_CHRONO';
export const startChrono = () => ({type: START_CHRONO});
export const PAUSE_CHRONO = 'PAUSE_CHRONO';
export const pauseChrono = () => ({type: PAUSE_CHRONO});
export const SET_EXOPLAYING_TIME = 'SET_EXOPLAYING_TIME';
export const setExoPlayingTime = (time) => ({type: SET_EXOPLAYING_TIME, time});