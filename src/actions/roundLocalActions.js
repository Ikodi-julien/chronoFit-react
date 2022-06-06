export const GET_LOCAL_ROUNDS = "GET_LOCAL_ROUNDS";
export const getLocalRounds = () => ({ type: GET_LOCAL_ROUNDS });

export const GET_LOCAL_ROUNDS_SUCCESS = "GET_LOCAL_ROUNDS_SUCCESS";
export const getLocalRoundsSuccess = (data) => ({
  type: GET_LOCAL_ROUNDS_SUCCESS,
  data,
});

export const GET_CURRENT_CUSTOM_ROUND = "GET_CURRENT_CUSTOM_ROUND";
export const getCurrentCustomRound = (id) => ({
  type: GET_CURRENT_CUSTOM_ROUND,
  value: id,
});
export const GET_CURRENT_CUSTOM_ROUND_SUCCESS =
  "GET_CURRENT_CUSTOM_ROUND_SUCCESS";
export const getCurrentCustomRoundSuccess = (data) => ({
  type: GET_CURRENT_CUSTOM_ROUND_SUCCESS,
  data,
});

export const SET_CUSTOM_ROUND = "SET_CUSTOM_ROUND";
export const setCustomRound = (roundName) => ({
  type: SET_CUSTOM_ROUND,
  value: roundName,
});

export const SET_CUSTOM_ROUND_NAME = "SET_CUSTOM_ROUND_NAME";
export const setCustomRoundName = (value) => ({
  type: SET_CUSTOM_ROUND_NAME,
  value,
});

export const SET_CUSTOM_ROUND_ITERATION = "SET_CUSTOM_ROUND_ITERATION";
export const setCustomRoundIteration = (value) => ({
  type: SET_CUSTOM_ROUND_ITERATION,
  value,
});

export const CREATE_LOCAL_ROUND = "CREATE_LOCAL_ROUND";
export const createLocalRound = () => ({ type: CREATE_LOCAL_ROUND });

export const DELETE_LOCAL_ROUND = "DELETE_LOCAL_ROUND";
export const deleteLocalRound = () => ({ type: DELETE_LOCAL_ROUND });

export const ADD_EXERCICE_TO_CUSTOM_ROUND = "ADD_EXERCICE_TO_CUSTOM_ROUND";
export const addExerciceToCustomRound = () => ({
  type: ADD_EXERCICE_TO_CUSTOM_ROUND,
});

export const DELETE_EXO_FROM_CUSTOM_ROUND = "DELETE_EXO_FROM_CUSTOM_ROUND";
export const deleteExoFromCustomRound = (exoIndex) => ({
  type: DELETE_EXO_FROM_CUSTOM_ROUND,
  exoIndex,
});

export const PUT_EXOFORM_IN_CUSTOM_ROUND = "PUT_EXOFORM_IN_CUSTOM_ROUND";
export const putExoFormInRound = (exoIndex) => ({
  type: PUT_EXOFORM_IN_CUSTOM_ROUND,
  exoIndex,
});

export const MOVE_EXO_IN_CUSTOM_ROUND = "MOVE_EXO_IN_CUSTOM_ROUND";
export const moveExoInCustomRound = (obj) => ({
  type: MOVE_EXO_IN_CUSTOM_ROUND,
  value: obj,
});

export const SHOW_EXO_FORM_CUSTOM_ROUND = "SHOW_EXO_FORM_CUSTOM_ROUND";
export const showExoFormCustomRound = (roundIndex, exoIndex) => ({
  type: SHOW_EXO_FORM_CUSTOM_ROUND,
  value: { roundIndex, exoIndex },
});

export const SHOW_EXO_IN_CUSTOM_ROUND = "SHOW_EXO_IN_CUSTOM_ROUND";
export const showExoInCustomRound = (roundIndex, exoIndex) => ({
  type: SHOW_EXO_IN_CUSTOM_ROUND,
  value: { roundIndex, exoIndex },
});
