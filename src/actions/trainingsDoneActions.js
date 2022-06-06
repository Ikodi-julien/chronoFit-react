export const DISPLAY_TRAINING_DETAILS = "DISPLAY_TRAINING_DETAILS";
export const displayTrainingDetails = (id) => ({
  type: DISPLAY_TRAINING_DETAILS,
  value: id,
});
export const setRecapTraingModalIsOpen = (bool) => ({
  type: SET_TRAINING_MODAL_ISOPEN,
  value: bool,
});
export const SET_TRAINING_MODAL_ISOPEN = "SET_TRAINING_MODAL_ISOPEN";
export const sortTrainingTab = (value) => ({
  type: SORT_TRAINING_TAB,
  value,
});
export const SORT_TRAINING_TAB = "SORT_TRAINING_TAB";
export const DELETE_TRAINING = "DELETE_TRAINING";
export const deleteTraining = (id) => ({ type: DELETE_TRAINING, value: id });
export const MODIFY_TRAINING_DONE = "MODIFY_TRAINING_DONE";
export const modifyTrainingDone = (bool) => ({
  type: MODIFY_TRAINING_DONE,
  value: bool,
});
export const SET_TRAININGDONE_MODAL_VALUE = "SET_TRAININGDONE_MODAL_VALUE";
export const setTrainingDoneModalValue = (index, name, value) => ({
  type: SET_TRAININGDONE_MODAL_VALUE,
  value: { index, name, value },
});
export const DELETE_EXO_FROM_TRAINING_DONE = "DELETE_EXO_FROM_TRAINING_DONE";
export const deleteExoFromTrainingDone = (index) => ({
  type: DELETE_EXO_FROM_TRAINING_DONE,
  value: index,
});
export const UPDATE_TRAINING_DONE = "UPDATE_TRAINING_DONE";
export const updateTrainingDone = (id) => ({
  type: UPDATE_TRAINING_DONE,
  value: id,
});
export const UPDATE_TRAINING_SUCCESS = "UPDATE_TRAINING_SUCCESS";
export const updateTrainingSuccess = () => ({ type: UPDATE_TRAINING_SUCCESS });
