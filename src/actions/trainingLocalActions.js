export const GET_LOCAL_TRAININGS = 'GET_LOCAL_TRAININGS';
export const getLocalTrainings = () => ({type: GET_LOCAL_TRAININGS})

export const GET_LOCAL_TRAININGS_SUCCESS = 'GET_LOCAL_TRAININGS_SUCCESS';
export const getLocalTrainingsSuccess = (data) => ({type: GET_LOCAL_TRAININGS_SUCCESS, data});

export const SET_LOCAL_TRAINING = 'SET_LOCAL_TRAINING';
export const setLocalTraining = (trainingName) => ({ type: SET_LOCAL_TRAINING, value: trainingName });

export const GET_CURRENT_LOCAL_TRAINING = 'GET_CURRENT_LOCAL_TRAINING';
export const getCurrentLocalTraining = (id) => ({type: GET_CURRENT_LOCAL_TRAINING, value: id});
export const GET_CURRENT_LOCAL_TRAINING_SUCCESS = 'GET_CURRENT_LOCAL_TRAINING_SUCCESS';
export const getCurrentLocalTrainingSuccess = (data) => ({type: GET_CURRENT_LOCAL_TRAINING_SUCCESS, data});

export const SET_LOCAL_TRAINING_NAME = 'SET_LOCAL_TRAINING_NAME';
export const setLocalTrainingName = (value) => ({ type: SET_LOCAL_TRAINING_NAME, value});

export const SET_LOCAL_TRAINING_TYPE = 'SET_LOCAL_TRAINING_TYPE';
export const setLocalTrainingType = (value) => ({ type: SET_LOCAL_TRAINING_TYPE, value});

export const CREATE_LOCAL_TRAINING = 'CREATE_LOCAL_TRAINING';
export const createLocalTraining = () => ({ type: CREATE_LOCAL_TRAINING });

export const DELETE_LOCAL_TRAINING = 'DELETE_LOCAL_TRAINING';
export const deleteLocalTraining = () => ({ type: DELETE_LOCAL_TRAINING });

export const ADD_ROUND_TO_LOCAL_TRAINING = 'ADD_ROUND_TO_LOCAL_TRAINING';
export const addRoundToLocalTraining = () => ({ type: ADD_ROUND_TO_LOCAL_TRAINING });

export const DELETE_ROUND_FROM_LOCAL_TRAINING = 'DELETE_ROUND_FROM_LOCAL_TRAINING';
export const deleteRoundFromLocalTraining = (index) => ({ type: DELETE_ROUND_FROM_LOCAL_TRAINING, value: index });

export const ADD_EXERCICE_TO_LOCAL_TRAINING = 'ADD_EXERCICE_TO_LOCAL_TRAINING';
export const addExerciceToLocalTraining = (index) => ({type: ADD_EXERCICE_TO_LOCAL_TRAINING, value: {roundId: index} });

export const PUT_EXOFORM_IN_LOCAL_TRAINING = 'PUT_EXOFORM_IN_LOCAL_TRAINING';
export const putExoFormInTraining = (roundIndex, exoIndex) => ({ type: PUT_EXOFORM_IN_LOCAL_TRAINING, roundIndex, exoIndex });

export const DELETE_EXO_FROM_ROUND = 'DELETE_EXO_FROM_ROUND';
export const deleteExoFromRound = (roundIndex, exoIndex) => ({ type: DELETE_EXO_FROM_ROUND, roundIndex, exoIndex});

