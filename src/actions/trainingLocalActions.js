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

export const MOVE_ROUND_IN_STATE = 'MOVE_ROUND_IN_STATE';
export const moveRoundInState = (oldIndex, newIndex) => ({type: MOVE_ROUND_IN_STATE, oldIndex, newIndex});

export const MOVE_EXO_IN_STATE = 'MOVE_EXO_IN_STATE';
export const moveExoInState = (obj) => ({ type: MOVE_EXO_IN_STATE, value: obj});

export const SET_ROUND_ITERATION = 'SET_ROUND_ITERATION';
export const setRoundIteration = (index, value) => ({type: SET_ROUND_ITERATION, value: {index, value}});

export const SHOW_EXO_FORM = 'SHOW_EXO_FORM';
export const showExoForm = (roundIndex, exoIndex) => ({ type: SHOW_EXO_FORM, value: {roundIndex, exoIndex}});

export const SHOW_EXO_IN_LIST = 'SHOW_EXO_IN_LIST';
export const showExoInList = (roundIndex, exoIndex) => ({ type: SHOW_EXO_IN_LIST, value: {roundIndex, exoIndex}});

// ExoForm input actions
export const EXOFORM_INPUT_CHANGE = "EXOFORM_INPUT_CHANGE";
export const setExoFormInputValue = (inputObject) => ({
  type: EXOFORM_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value
})
