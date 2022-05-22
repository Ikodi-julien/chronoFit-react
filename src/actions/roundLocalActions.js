export const GET_CUSTOM_ROUNDS = "GET_CUSTOM_ROUNDS";
export const getCustomRounds = () => ({ type: GET_CUSTOM_ROUNDS });

export const GET_CUSTOM_ROUNDS_SUCCESS = "GET_CUSTOM_ROUNDS_SUCCESS";
export const getCustomRoundsSuccess = (data) => ({
  type: GET_CUSTOM_ROUNDS_SUCCESS,
  data,
});

export const SET_CUSTOM_ROUND = "SET_CUSTOM_ROUND";
export const setCustomRound = (roundName) => ({
  type: SET_CUSTOM_ROUND,
  value: roundName,
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

export const SET_CUSTOM_ROUND_NAME = "SET_CUSTOM_ROUND_NAME";
export const setCustomRoundName = (value) => ({
  type: SET_CUSTOM_ROUND_NAME,
  value,
});

export const SET_CUSTOM_ROUND_TYPE = "SET_CUSTOM_ROUND_TYPE";
export const setCustomRoundType = (roundIndex, value) => ({
  type: SET_CUSTOM_ROUND_TYPE,
  roundIndex,
  value,
});

export const CREATE_CUSTOM_ROUND = "CREATE_CUSTOM_ROUND";
export const createCustomRound = () => ({ type: CREATE_CUSTOM_ROUND });

export const DELETE_CUSTOM_ROUND = "DELETE_CUSTOM_ROUND";
export const deleteCustomRound = () => ({ type: DELETE_CUSTOM_ROUND });

export const ADD_EXERCICE_TO_CUSTOM_ROUND = "ADD_EXERCICE_TO_CUSTOM_ROUND";
export const addExerciceToCustomRound = (index) => ({
  type: ADD_EXERCICE_TO_CUSTOM_ROUND,
  value: { roundId: index },
});

export const PUT_EXOFORM_IN_CUSTOM_ROUND = "PUT_EXOFORM_IN_CUSTOM_ROUND";
export const putExoFormInRound = (roundIndex, exoIndex) => ({
  type: PUT_EXOFORM_IN_CUSTOM_ROUND,
  roundIndex,
  exoIndex,
});

export const DELETE_EXO_FROM_CUSTOM_ROUND = "DELETE_EXO_FROM_CUSTOM_ROUND";
export const deleteExoFromCustomRound = (roundIndex, exoIndex) => ({
  type: DELETE_EXO_FROM_CUSTOM_ROUND,
  roundIndex,
  exoIndex,
});

export const MOVE_EXO_IN_CUSTOM_ROUND = "MOVE_EXO_IN_CUSTOM_ROUND";
export const moveExoInCustomRound = (obj) => ({
  type: MOVE_EXO_IN_CUSTOM_ROUND,
  value: obj,
});

export const SET_CUSTOM_ROUND_ITERATION = "SET_CUSTOM_ROUND_ITERATION";
export const setCustomRoundIteration = (index, value) => ({
  type: SET_CUSTOM_ROUND_ITERATION,
  value: { index, value },
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
